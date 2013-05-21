require.config({
    paths: {
        'jquery':                   'components/jquery/jquery',
        'handlebars':               'components/handlebars/handlebars.runtime',
        'prettify':                 'components/google-code-prettify/src/prettify',
        'mediator-js':              'components/mediator-js/index'
    },
    shim: {
        handlebars: {
            exports: 'Handlebars'
        },
        highslide: {
            exports: 'hs'
        }
    }
});