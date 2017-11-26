module.exports = function (grunt) {
    "use strict"

    grunt.initConfig({

        watch: {
            options: {
                livereload: true
            },

            sass: {
                files: "src/scss/*.scss",
                tasks: "sass"
            },

            js: {
                files: "src/js/*.js",
                tasks: "uglify"
            },

            cssmin: {
                files: "build/css/*.css",
                tasks: "cssmin"
            }


        },

        sass: {
            dist: {
                files: {
                    "build/css/Lightbox.css": "src/scss/estilo.scss"
                }
            }
        },

        uglify: {
            dist: {
                files: {
                    "build/js/Lightbox.min.js": "src/js/script.js"
                }
            }
        },

        cssmin: {
            dist: {
                files: {
                    "build/css/min/Lightbox.min.css": "build/css/Lightbox.css"
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
};