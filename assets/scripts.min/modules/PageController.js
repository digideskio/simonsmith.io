define("modules/Spinner",["require","jquery","mediator"],function(e){function r(e,n){this.container=t(e),this.elem=t("<div></div>",{"class":"loading","aria-hidden":!0}).hide(),this.elem.appendTo(this.container),this.attachEvents(n)}var t=e("jquery"),n=e("mediator");return r.prototype={attachEvents:function(e){n.subscribe(e.show,this.show,null,this),n.subscribe(e.hide,this.hide,null,this)},show:function(){this.elem.attr("aria-hidden",!1).show(),this.container.attr("aria-busy",!0)},hide:function(){this.elem.attr("aria-hidden",!0).hide(),this.container.attr("aria-busy",!1)}},r}),define("modules/Scroller",["require","jquery","mediator"],function(e){var t=e("jquery"),n=e("mediator"),r=function(e){this.attachEvents(e.contentLoad)};return r.prototype={scrollable:t("html, body"),attachEvents:function(e){n.subscribe(e,this.scrollToTop,null,this)},scrollToTop:function(e){e.type=="ajax"&&this.scrollable.animate({scrollTop:0})}},r}),define("templates/single",["handlebars"],function(e){var t=e.template,n=e.templates=e.templates||{};n["single.mustache"]=t(function(e,t,n,r,i){n=n||e.helpers;var s="",o,u,a="function",f=this.escapeExpression;s+='\n    <article>\n        <header class="post-title">\n            <h1 class="hdr hdr-post">',u=n.title,u?o=u.call(t,{hash:{}}):(o=t.title,o=typeof o===a?o():o);if(o||o===0)s+=o;s+='</h1>\n            <time class="post-date" datetime="',u=n.w3c_date,u?o=u.call(t,{hash:{}}):(o=t.w3c_date,o=typeof o===a?o():o),s+=f(o)+'">',u=n.date,u?o=u.call(t,{hash:{}}):(o=t.date,o=typeof o===a?o():o),s+=f(o)+'</time>\n        </header>\n        <div class="post-content">\n            ',u=n.content,u?o=u.call(t,{hash:{}}):(o=t.content,o=typeof o===a?o():o);if(o||o===0)s+=o;return s+='\n        </div>\n        <footer class="post-footer">\n            <p>Fancy a comment? <a href="http://twitter.com/blinkdesign">Hit me up on twitter</a></p>\n        </footer>\n    </article>\n',s})}),define("templates/single_project",["handlebars"],function(e){var t=e.template,n=e.templates=e.templates||{};n["single_project.mustache"]=t(function(e,t,n,r,i){function c(e,t){var i="",s;i+="\n                ",s=e,s=a.invokePartial(r.attachment,"attachment",s,n,r);if(s||s===0)i+=s;return i+="\n            ",i}n=n||e.helpers,r=r||e.partials;var s="",o,u,a=this,f="function",l=n.blockHelperMissing;s+='\n    <article>\n        <header class="post-title">\n            <h1 class="hdr hdr-post">',u=n.title,u?o=u.call(t,{hash:{}}):(o=t.title,o=typeof o===f?o():o);if(o||o===0)s+=o;s+='</h1>\n            <p class="url"><a href="http://',u=n.url,u?o=u.call(t,{hash:{}}):(o=t.url,o=typeof o===f?o():o);if(o||o===0)s+=o;s+='">www.',u=n.url,u?o=u.call(t,{hash:{}}):(o=t.url,o=typeof o===f?o():o);if(o||o===0)s+=o;s+='</a></p>\n            <p class="description">',u=n.excerpt,u?o=u.call(t,{hash:{}}):(o=t.excerpt,o=typeof o===f?o():o);if(o||o===0)s+=o;s+='</p>\n        </header>\n        <div class="post-content">\n            ',u=n.content,u?o=u.call(t,{hash:{}}):(o=t.content,o=typeof o===f?o():o);if(o||o===0)s+=o;s+='\n        </div>\n        <div class="work-images">\n            ',u=n.attachments,u?o=u.call(t,{hash:{},inverse:a.noop,fn:a.program(1,c,i)}):(o=t.attachments,o=typeof o===f?o():o),n.attachments||(o=l.call(t,o,{hash:{},inverse:a.noop,fn:a.program(1,c,i)}));if(o||o===0)s+=o;return s+="\n        </div>\n    </article>\n",s})}),define("templates/home",["handlebars"],function(e){var t=e.template,n=e.templates=e.templates||{};n["home.mustache"]=t(function(e,t,n,r
,i){function c(e,t){var i="",s;i+="\n            ",s=e,s=a.invokePartial(r.excerpt,"excerpt",s,n,r);if(s||s===0)i+=s;return i+="\n        ",i}n=n||e.helpers,r=r||e.partials;var s="",o,u,a=this,f="function",l=n.blockHelperMissing;s+='<section>\n    <h1 class="hdr hdr-page">Blog</h1>\n\n    <div class="layout-excerpt js-post-list">\n        ',u=n.blog_posts,u?o=u.call(t,{hash:{},inverse:a.noop,fn:a.program(1,c,i)}):(o=t.blog_posts,o=typeof o===f?o():o),n.blog_posts||(o=l.call(t,o,{hash:{},inverse:a.noop,fn:a.program(1,c,i)}));if(o||o===0)s+=o;return s+="\n    </div>\n</section>\n",s})}),define("templates/projects",["handlebars"],function(e){var t=e.template,n=e.templates=e.templates||{};n["projects.mustache"]=t(function(e,t,n,r,i){function c(e,t){var i="",s;i+="\n                ",s=e,s=a.invokePartial(r.excerpt,"excerpt",s,n,r);if(s||s===0)i+=s;return i+="\n            ",i}n=n||e.helpers,r=r||e.partials;var s="",o,u,a=this,f="function",l=n.blockHelperMissing;s+='\n    <section>\n        <h1>Projects</h1>\n\n        <div class="layout-excerpt layout-excerpt-grid cf">\n            ',u=n.project_items,u?o=u.call(t,{hash:{},inverse:a.noop,fn:a.program(1,c,i)}):(o=t.project_items,o=typeof o===f?o():o),n.project_items||(o=l.call(t,o,{hash:{},inverse:a.noop,fn:a.program(1,c,i)}));if(o||o===0)s+=o;return s+="\n        </div>\n    </section>\n",s})}),define("templates/cv",["handlebars"],function(e){var t=e.template,n=e.templates=e.templates||{};n["cv.mustache"]=t(function(e,t,n,r,i){return n=n||e.helpers,'\n    <div class="hresume">\n\n        <h1>CV</h1>\n\n        <p class="recruiter-warning">This CV can be found in it\'s original format - <a href="http://blink-design.net/cv">http://blink-design.net/cv</a></p>\n\n        <section id="profile" class="summary">\n            <h2 class="hdr hdr-main">Profile</h2>\n            <p>I\'ve been doing things with websites professionally for over five years and I make things happen with HTML5, CSS3, JavaScript and mobile first responsive design.</p>\n        </section>\n\n        <section id="employment" class="layout-entries">\n            <h2 class="hdr hdr-main">Employment</h2>\n\n            <article id="im" class="entry vcalendar">\n                <header class="experience vevent">\n                    <h3 class="fn org hdr hdr-item">Immediate Media</h3>\n                    <p class="company-url location"><a href="http://www.immediatemedia.co.uk/">www.immediatemedia.co.uk</a></p>\n                    <dl class="employment-dates cf">\n                        <dt>From</dt>\n                        <dd><time datetime="2012-10-29" class="dtstart">October 2012</time></dd>\n                        <dt>To</dt>\n                        <dd>Present</dd>\n                    </dl>\n                </header>\n                <div class="summary">\n                    <p>Building a mobile-first responsive TV listings grid for Radio Times using Twitter\'s <a href="http://twitter.github.com/flight/">Flight JS library</a>, <a href="http://handlebarsjs.com/">Handlebars</a> and Sass.</p>\n                </div>\n            </article>\n\n            <article id="qmetric" class="entry vcalendar">\n                <header class="experience vevent">\n                    <h3 class="fn org hdr hdr-item">QMetric</h3>\n                    <p class="company-url location"><a href="http://www.qmetric.co.uk">www.qmetric.co.uk</a></p>\n                    <dl class="employment-dates cf">\n                        <dt>From</dt>\n                        <dd><time datetime="2011-12-05" class="dtstart">December 2011</time></dd>\n                        <dt>To</dt>\n                        <dd><time datetime="2012-11-26" class="dtend">October 2012</time></dd>\n                    </dl>\n                </header>\n                <div class="summary">\n                    <p>Worked on <a href="http://www.policyexpert.co.uk">www.policyexpert.co.uk</a> and an internal Back Office Ajax application.</p>\n                    <p>Used HTML5, CSS3 (via LESS), Twitter bootstrap and Mootools</p>\n                    <p>Led development on a mobile first, responsive design and rebuild of <a href="http://www.policyexpert.co.uk">the Policy Expert site</a>. Also running on Wordpress</p>\n                    <p>Launched responsive version of the <a href="http://qmetric.co.uk">QMetric company website</a>. Source on <a href="https://github.com/qmetric/qmg-website">GitHub</a></p>\n                </div>\n            </article>\n\n            <article id="bbc-worldwide" class="entry vcalendar">\n                <header class="experience vevent">\n                    <h3 class="fn org hdr hdr-item">BBC Worldwide</h3>\n                    <p class="company-url location"><a href="http://www.bbcworldwide.com">www.bbcworldwide.com</a></p>\n                    <dl class="employment-dates cf">\n                        <dt>From</dt>\n                        <dd><time datetime="2009-08-30" class="dtstart">August 2009</time></dd>\n                        <dt>To</dt>\n                        <dd><time datetime="2011-12-02" class="dtend">December 2011</time></dd>\n                    </dl>\n                </header>\n                <div class="summary">\n                    <p>Led UI development on <a href="http://radiotimes.com">the new Radio Times</a>.</p>\n                    <p>Used the latest and greatest front-end tech on a major BBC site. (HTML5, CSS3, Modernizr, MooTools)</p>\n                    <p>Providing feedback to PM, Product Owner and design agency regarding user experience best practices and accessibility guidelines.</p>\n                    <p>Worked with another front-end developer to architect a <a href="http://topgear.com">new Top Gear homepage</a>, news article page and car model section. Created clean, semantic code and took care to ensure the user experience was acceptable on multiple browsers, environments and languages.</p>\n                    <p>Maintained front-end code on <a href="http://www.bbcgoodfood.com/">GoodFood</a> and <a href="http://www.gardenersworld.com/">Gardener\'s World</a></p>\n                </div>\n            </article>\n\n            <article id="sas-design" class="entry vcalendar">\n                <header class="experience vevent">\n                    <h3 class="fn org hdr hdr-item">SAS Design</h3>\n                    <p class="company-url location"><a href="http://www.saslondon.com/">http://www.saslondon.com/</a></p>\n                    <dl class="employment-dates cf">\n                        <dt>From</dt>\n                        <dd><time datetime="2009-04-15" class="dtstart">April 2009</time></dd>\n                        <dt>To</dt>\n                        <dd><time datetime="2009-06-24" class="dtend">June 2009</time></dd>\n                    </dl>\n                </header>\n                <div class="summary">\n                    <p>Worked from Photoshop design mock-ups to create static web pages using valid, standards based code which performed in various browser environments.</p>\n                </div>\n            </article>\n\n            <article id="de-construct" class="entry vcalendar">\n                <header class="experience vevent">\n                    <h3 class="fn org hdr hdr-item">De-construct</h3>\n                    <p class="company-url location"><a href="http://www.de-construct.com/">de-construct.com</a></p>\n                    <dl class="employment-dates cf">\n                        <dt>From</dt>\n                        <dd><time datetime="2009-03-08" class="dtstart">March 2009</time></dd>\n                        <dt>To</dt>\n                        <dd><time datetime="2009-04-10" class="dtend">April 2009</time></dd>\n                    </dl>\n                </header>\n                <div class="summary">\n                    <p>Constructed a mini site based on existing designs using front-end technologies.</p>\n                </div>\n            </article>\n\n            <article id="dgtl" class="entry vcalendar">\n                <header class="experience vevent">\n                    <h3 class="fn org hdr hdr-item">DGTL</h3>\n                    <p class="company-url location"><a href="http://www.dgtl.net/">dgtl.net</a></p>\n                    <dl class="employment-dates cf">\n                        <dt>From</dt>\n                        <dd><time datetime="2008-11-24" class="dtstart">November 2008</time></dd>\n                        <dt>To</dt>\n                        <dd><time datetime="2009-03-02" class="dtend">March 2009</time></dd>\n                    </dl>\n                </header>\n                <div class="summary">\n                    <p>Responsible for all front-end code on <a href="http://www.pentland.com/">www.pentland.com</a> and exact duplication of site designs were required in various browser environments.</p>\n                </div>\n            </article>\n\n            <article id="focus" class="entry vcalendar">\n                <header class="experience vevent">\n                    <h3 class="fn org hdr hdr-item">Focus</h3>\n                    <p class="company-url location"><a href="http://www.focusintegrated.co.uk/">focusintegrated.co.uk</a></p>\n                    <dl class="employment-dates cf">\n                        <dt>From</dt>\n                        <dd><time datetime="2008-10-04" class="dtstart">October 2008</time></dd>\n                        <dt>To</dt>\n                        <dd><time datetime="2008-11-08" class="dtend">November 2008</time></dd>\n                    </dl>\n                </header>\n                <div class="summary">\n                    <p>Several small sites required development from Photoshop designs into fully working web pages.</p>\n                </div>\n            </article>\n\n            <article id="akqa" class="entry vcalendar">\n                <header class="experience vevent">\n                    <h3 class="fn org hdr hdr-item">AKQA</h3>\n                    <p class="company-url location"><a href="http://www.akqa.com/">akqa.com</a></p>\n                    <dl class="employment-dates cf">\n                        <dt>From</dt>\n                        <dd><time datetime="2008-06-30" class="dtstart">June 2008</time></dd>\n                        <dt>To</dt>\n                        <dd><time datetime="2008-09-13" class="dtend">September 2008</time></dd>\n                    </dl>\n                </header>\n                <div class="summary">\n                    <p>Responsible for front-end development and bug fixing on <a href="http://www.sainsburys.co.uk">www.sainsburys.co.uk</a> whilst working in a small project team.</p>\n                </div>\n            </article>\n\n            <article id="aat" class="entry vcalendar">\n                <header class="experience vevent">\n                    <h3 class="fn org hdr hdr-item"><abbr title="Association of Accounting Technicians">AAT</abbr></h3>\n                    <p class="company-url location"><a href="http://www.aat.org">aat.org</a></p>\n                    <dl class="employment-dates cf">\n                        <dt>From</dt>\n                        <dd><time datetime="2007-06-30" class="dtstart">June 2007</time></dd>\n                        <dt>To</dt>\n                        <dd><time datetime="2008-06-28" class="dtend">June 2008</time></dd>\n                    </dl>\n                </header>\n                <div class="summary">\n                    <p>Part of the front-end development team working in a Java environment. Working closely with project managers and back-end developers to create web applications on the VYRE Unify CMS.</p>\n                </div>\n            </article>\n        </section>\n\n        <section class="layout-spacing-bottom">\n            <h2 class="hdr hdr-main">Skills</h2>\n            <ul class="skills">\n                <li class="skill"><abbr title="Hyper Text Markup Language">HTML5</abbr></li>\n                <li class="skill"><abbr title="Cascading Style Sheets">CSS3</abbr></li>\n                <li class="skill">JavaScript</li>\n                <li class="skill">MooTools</li>\n                <li class="skill">jQuery</li>\n                <li class="skill">LESS CSS</li>\n                <li class="skill">Mobile First Responsive Design</li>\n            </ul>\n        </section>\n\n        <section id="additional" class="layout-entries">\n            <h2 class="hdr hdr-main">Additional Information</h2>\n\n            <article id="personal" class="entry">\n                <h3 class="hdr hdr-item">Personal Web Projects</h3>\n                <p>Creating, owning and maintaining a hugely popular gaming community - <a href="http://www.interlopers.net">www.interlopers.net</a>. The site receives thousands of page visits per day and has an expanding community of nearly 10,000 members.</p>\n                <p>Started in 2004, the site has grown considerably and I am responsible for all front-end code on the site. Working closely with a PHP developer has allowed various web applications\n                to be built that have been received well by the user base.</p>\n                <p>I have begun re-writing the site responsively and it is visible at <a href="http://dev.interlopers.net">dev.interlopers.net</a>.</p>\n                <p>Not so long ago I worked with another developer to release Boxjs, a new way for users to load scripts into their pages. The service will take multiple scripts and deliver them to the browser as one,\n                compressed and cached file. A small JS library was necessary to ensure loading files was an easy task and the site also implements a fully responsive design.</p>\n            </article>\n\n            <article id="interests" class="entry">\n                <h3 class="hdr hdr-item">Interests</h3>\n                <p>I play drums in <a href="http://fashodacrisis.com">a loud rock band</a>. We\'ve completed three tours of Eastern Europe and released multiple CDs independently.</p>\n                <p>I\'ve also had the remarkable experience of <a href="http://www.flickr.com/photos/simonblink24/sets/72157625051285708/">visiting Chernobyl in September 2010</a> and returning radiation free! A bit different to ‘Badminton, socialising and reading blogs’ usually found here!</p>\n            </article>\n        </section>\n\n    </div>\n'
})}),define("templates/partials/attachment",["handlebars"],function(e){var t=e.template,n=e.templates=e.templates||{};n["attachment.mustache"]=t(function(e,t,n,r,i){n=n||e.helpers;var s="",o,u,a="function",f=this.escapeExpression;return s+='<figure class="work-img-container">\n    <a href="',u=n.url,u?o=u.call(t,{hash:{}}):(o=t.url,o=typeof o===a?o():o),s+=f(o)+'" class="highslide">\n        <img class="work-img work-img-large" src="',u=n.thumb,u?o=u.call(t,{hash:{}}):(o=t.thumb,o=typeof o===a?o():o),s+=f(o)+'" alt="',u=n.alt,u?o=u.call(t,{hash:{}}):(o=t.alt,o=typeof o===a?o():o),s+=f(o)+'" width="200">\n    </a>\n</figure>\n',s})}),define("modules/registerTemplates",["require","handlebars","templates/single","templates/single_project","templates/home","templates/projects","templates/cv","templates/partials/attachment","templates/partials/excerpt"],function(e){var t=e("handlebars");return function(){e("templates/single"),e("templates/single_project"),e("templates/home"),e("templates/projects"),e("templates/cv"),e("templates/partials/attachment"),e("templates/partials/excerpt"),t.registerPartial({attachment:t.templates["attachment.mustache"],excerpt:t.templates["excerpt.mustache"]})}}),define("modules/PageUpdater",["require","jquery","handlebars","mediator","modules/registerTemplates"],function(e){var t=e("jquery"),n=e("handlebars"),r=e("mediator"),i=e("modules/registerTemplates");i();var s=function(e,n,r){this.nav=t(e),this.injectTarget=t(n),this.body=t(document.body),this.attachEvents(r.contentLoad)};return s.prototype={attachEvents:function(e){r.subscribe(e,this.updatePage,null,this)},updatePage:function(e){var n=e.response;if(n.page_meta.page_title==t.trim(document.title.split("|")[0]))return;this.updateNavigation(n.page_meta.nav_menu),this.updateBodyClass(n.page_meta.body_class),this.updateTitle(n.page_meta.page_title),e.navType=="ajax"&&this.updateContent(e.element,n),e.navType=="popstate"&&this.renderTemplate(n.template,n)},updateTitle:function(e){var n=document.title.split("|");document.title=[e," | ",t.trim(n[1])].join("")},updateNavigation:function(e){this.nav.html(e)},updateBodyClass:function(e){this.body.removeClass().addClass(e)},updateContent:function(e,t){this.renderTemplate(t.template,t),history.pushState(t,null,e.attr("href"))},renderTemplate:function(e,t){var i=n.templates[e];this.injectTarget.html(i(t)),r.publish("content:rendered",t.page_meta.body_class)}},s}),define("modules/PageController",["require","jquery","mediator","modules/Spinner","modules/Scroller","modules/PageUpdater"],function(e){function o(e){t.each(e,function(e,n){this[e]=t(n)}.bind(this)),new r(this.container,{show:"content:get:before",hide:"content:get:always"}),new i({contentLoad:"content:get:done"}),new s(this.nav,this.injectTarget,{contentLoad:"content:get:done"}),this.setInitialPage(),this.attachEvents()}var t=e("jquery"),n=e("mediator"),r=e("modules/Spinner"),i=e("modules/Scroller"),s=e("modules/PageUpdater");return o.prototype={setInitialPage:function(){t.getJSON(location.href,{ajax:!0},function(e){history.replaceState(e,null,location.href)})},attachEvents:function(){this.container.on("click",this.links.selector,this.getPageContent.bind(this)),window.addEventListener("popstate",function(e){n.publish("content:get:done",{response:e.state,navType:"popstate"})}.bind(this))},getPageContent:function(e){var r=t(e.currentTarget),i=t.ajax({data:{ajax:!0},dataType:"json",context:this,timeout:6e3,url:r.attr("href"),beforeSend:function(){n.publish("content:get:before"
)}});i.always(function(){n.publish("content:get:always")}),i.fail(function(){n.publish("content:get:fail",{element:r})}),i.done(function(e){n.publish("content:get:done",{response:e,navType:"ajax",element:r})}),e&&e.preventDefault()}},o});