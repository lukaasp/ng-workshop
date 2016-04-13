var SERVER_PORT = 9001;

var proxyMiddleware = require('http-proxy-middleware');

module.exports = function(grunt) {grunt 

  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);
  grunt.loadNpmTasks('grunt-browser-sync');

  grunt.initConfig({
    jshint: {
      options:
      {jshintrc: '.jshintrc'},
      all: ['Gruntfile.js',
      'app/scripts/*.js',
      'app/scripts/**/*.js',
      'app/scripts/**/**/*.js']
    },
    browserSync: {
      bsFiles: {
        src: ['app/**/*.*', '!bower_components/**/*.*']
      },
      options: {
        server: {
          baseDir: './app',
          middleware: [proxyMiddleware('/openbr', {
            target: 'http://localhost:8001',
            changeOrigin: true   // for vhosted sites, changes host header to match to target's host
          })]
        },
        port: SERVER_PORT,
        ghostMode: {
          clicks: true,
          forms: true,
          scroll: true
        },
        injectChanges: true
      }
    },
    clean: {
      server: '.tmp'
    }
  });

  grunt.registerTask('serve', [
      'clean:server',
      'browserSync'
  ]);
};
