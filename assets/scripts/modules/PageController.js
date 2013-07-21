define(function(require) {
    'use strict';
    var $           = require('zepto');
    var mediator    = require('mediator-js');
    var prime       = require('prime');
    var Spinner     = require('modules/Spinner');
    var Scroller    = require('modules/Scroller');
    var PageUpdater = require('modules/PageUpdater');
    var storage     = require('modules/Storage');

    return prime({
        constructor: function(elements) {
            $.each(elements, function(key, value) {
                this[key] = $(value);
            }.bind(this));

            new Spinner(this.container, {
                show: 'content:get:before',
                hide: 'content:get:always'
            });

            new Scroller({
                contentLoad: 'content:get:done'
            });

            new PageUpdater(this.nav, this.injectTarget, {
                contentLoad: 'content:get:done'
            });

            this.attachEvents();
        },

        attachEvents: function() {
            this.container.on('click', this.links.selector, this.getPageContent.bind(this));

            window.addEventListener('popstate', function(event) {
                // Chrome/Safari seem to fire popstate on normal page load, bah
                // http://goo.gl/JJfwR
                if (!event.state) {
                    return;
                }

                mediator.publish('content:get:done', {
                    response: event.state,
                    navType: 'popstate'
                });
            }.bind(this));
        },

        getPageContent: function(event) {
            var href = (typeof event == 'string' ? event : event.currentTarget.href);

            // Try to get the page from storage first
            if (!this.fetchFromStorage(href)) {
                this.fetchFromServer(href);
            }

            event && event.preventDefault();
        },

        fetchFromStorage: function(href) {
            var json = storage.getItem(href);

            if (!json) {
                return null;
            }

            mediator.publish('content:get:done', {
                response: json,
                href: href
            });

            return json;
        },

        fetchFromServer: function(href) {
            var req = $.ajax({
                data: { ajax: true },
                dataType: 'json',
                context: this,
                timeout: 6000,
                url: href,
                beforeSend: function() {
                    mediator.publish('content:get:before');
                }
            });

            req.always(function() {
                mediator.publish('content:get:always');
            });
            req.fail(function() {
                mediator.publish('content:get:fail');
            });
            req.done(function(json) {
                mediator.publish('content:get:done', {
                    response: json,
                    href: href
                });

                storage.setItem(href, json);
            });
        }
    });
});
