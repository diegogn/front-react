module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
          concat: {
            options: {
              // define a string to put between each file in the concatenated output
              separator: ';'
            },
            dist: {
              // the files to concatenate
              src: ['assets/scripts/*'],
              // the location of the resulting JS file
              dest: '.temp/<%= pkg.name %>.tsx'
            }
          },
          uglify: {
            options: {
              // the banner is inserted at the top of the output
              banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
              files: {
                'dist/js/<%= pkg.name %>.min.js': ['.temp/<%= pkg.name %>-req.js']
              }
            }
          },
          browserify: {
            dist: {
              files: {
                '.temp/<%= pkg.name %>-req.js': ['.temp/<%= pkg.name %>-shim.js']
              }
            }
          },
          less: {
            development: {
                options: {
                    paths: ["assets/styles/less"]
                },
                files: {
                    'dist/css/<%= pkg.name %>.css': 'assets/styles/main.less'
                }
            }
          },
    });

grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-browserify');
grunt.loadNpmTasks('grunt-contrib-less');

grunt.registerTask('default', ['concat', 'browserify', 'uglify', 'less']);

};