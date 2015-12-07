module.exports = function (karma) {
    karma.set({

        // include browserify first in used frameworks
        frameworks: ['browserify', 'jasmine'],

        // add all your files here,
        // including non-commonJS files you need to load before your test cases
        files: [
            'test/**/*.js'
        ],

        browsers: [
            'Chrome'
        ],

        // add preprocessor to the files that should be
        // processed via browserify
        preprocessors: {
            'test/**/*.js': ['browserify']
        },

        // see what is going on
        logLevel: 'LOG_DEBUG',
        reporters: ['dots'],

        // add additional browserify configuration properties here
        // such as transform and/or debug=true to generate source maps
        browserify: {
            debug: true
        }
    });
};