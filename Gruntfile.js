
var LIVERELOAD_PORT = 35729;
var SERVER_PORT = 9001;
var proxySnippet = require('grunt-connect-proxy/lib/utils').proxyRequest;
var lrSnippet = require('connect-livereload')({
    port: LIVERELOAD_PORT
});

module.exports = function(grunt) {

    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);
    grunt.loadNpmTasks('grunt-connect-proxy');

    grunt.initConfig({
        jshint: {
            options:
            {jshintrc: '.jshintrc' },
            all: ['Gruntfile.js',
            'app/scripts/*.js',
            'app/scripts/**/*.js',
            'app/scripts/**/**/*.js']
        },
        watch: {
            all: {
                files: ['index.html',
                    'app/scripts/*.js',
                    'app/scripts/**/*.js',
                    'app/scripts/**/**/*.js'],
                options: {
                    livereload: true
                }
            }
        },
        connect: {
            options: {
                port: grunt.option('port') || SERVER_PORT,
                hostname: '0.0.0.0'
            },
            proxies: [
                {
                    context: ['/openbr'],
                    host: '52.50.192.49',
                    port: 80
                }
            ],
            livereload: {
                options: {
                    middleware: function (connect) {
                        return [
                            proxySnippet,
                            lrSnippet,
                            connect.static('app')
                        ];
                    }
                }
            }
        },

        clean: {
            server: '.tmp'
        },

        open: {
            all: {
                path: 'http://localhost:<%= connect.options.port%>'
            }
        }
    });

    grunt.registerTask('serve', [
        'clean:server',
        'configureProxies',
        'connect:livereload',
        'open',
        'watch'
    ]);
};
