
var LIVERELOAD_PORT = 35729;
var SERVER_PORT = 9001;
var proxySnippet = require('grunt-connect-proxy/lib/utils').proxyRequest;
var lrSnippet = require('connect-livereload')({
    port: LIVERELOAD_PORT
});

module.exports = function(grunt) {
    // show elapsed time at the end
    require('time-grunt')(grunt);
    // load all grunt tasks
    require('load-grunt-tasks')(grunt);
    //load grunt-connect-proxy
    grunt.loadNpmTasks('grunt-connect-proxy');
    //load angular-templates to concatenate & register your AngularJS templates in the $templateCache
    grunt.loadNpmTasks('grunt-angular-templates');
    // load wiredep - wire bower dependencies
    grunt.loadNpmTasks('grunt-wiredep');
    //load injector
    grunt.loadNpmTasks('grunt-injector');

    // Configure Grunt
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
                    host: 'aowp-workshop-backend-ef23ed36-1.lukaasp.cont.tutum.io',
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
            },
            test: {
                options: {
                    middleware: function (connect) {
                        return [
                            lrSnippet,
                            connect.static('test'),
                            connect.static('app')
                        ];
                    }
                }
            },
            testInBrowser: {
                options: {
                    middleware: function (connect) {
                        return [
                            proxySnippet,
                            lrSnippet,
                            connect.static('.tmp'),
                            connect.static('test'),
                            connect.static('app')
                        ];
                    }
                }
            }
        },

        clean: {
            server: '.tmp'
        },

        // grunt-open will open your browser at the project's URL
        open: {
            all: {
                // Gets the port from the connect configuration
                path: 'http://localhost:<%= connect.options.port%>'
            }
        },

        karma: {
            options: {
                configFile: 'karma.conf.js'
            },
            continuous: {
                singleRun: true,
                browsers: ['PhantomJS']
            },
            dev: {
                reporters: ['mocha']
            }
        },

        wiredep: {
            test: {
                src: 'test/index.html',
                options: {
                    devDependencies: true,
                    ignorePath: '../app/'
                }
            }
        },

        injector: {
            options: {
                bowerPrefix: 'bower:'
            },
            localDependencies: {
                options: {
                    ignorePath: ['app']
                },
                files: {
                    'test/index.html': [
                        'app/scripts/**/*.module.js',
                        'app/scripts/**/*.js'
                    ]
                }
            }
        },

        ngtemplates:  {
            test: {
                cwd:    'app',
                src:    ['scripts/**/*.html','!index.html'],
                dest:   '.tmp/templates/templates.js',
                options:    {
                    htmlmin:  { collapseWhitespace: true, collapseBooleanAttributes: true },
                    module: 'app.core'
                }
            }
        }

    });

    // Creates the `server` task
    grunt.registerTask('serve', [
        'clean:server',
        'configureProxies',
        'connect:livereload',
        'open',
        'watch'
    ]);
};
