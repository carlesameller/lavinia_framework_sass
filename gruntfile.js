'use strict';

const sass = require('node-sass');

module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                //banner: "'use strict';\n",
                process: function(src, filepath) {
                    return '// Source: ' + filepath + '\n' +
                        src.replace(/(^|\n)[ \t]*('use strict'|"use strict");?\s*/g, '$1');
                }
            },
            dist: {
                src: [
                    'js/vendor/jquery/jquery.js',
                    //'js/vendor/onscreen/on-screen.umd.js',
                    //'js/vendor/modal/remodal.js',
                    //'js/vendor/sticky/sticky-kit.js',
                    //'js/vendor/select2/select2.full.js',
                    //'js/vendor/slider/slick.js',
                    //'js/vendor/tooltips/tooltipster.bundle.js',
                    //'js/vendor/rangeslider/ion.rangeSlider.js',
                    //'js/vendor/circular_progressbar/jquery.knob.js',
                    //'js/vendor/scrollbar/jquery.mCustomScrollbar.concat.min.js',
                    //'js/vendor/masonry/masonry.pkgd.js',
                    //'js/vendor/materializecss/materialize.js'
                ],
                dest: 'js/vendor.js'
            }
        },
        /*babel: {
            options: {
                sourceMap: false,
                presets: ['env']
            },
            dist: {
                files: {
                    'js/vendor/onscreen/on-screen.js': 'js/vendor/onscreen/on-screen.umd.js'
                }
            }
        },*/
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: [
                    'js/vendor.js'
                ],
                dest: 'js/vendor.min.js'
            }
        },
        sass: {
            options: {
                implementation: sass
            },
            compile: {
                files: {
                    'css/cam.css': 'scss/cam.scss'
                    //'css/materialize.css': 'scss/materialize.scss'
                }
            }
        },
        postcss: {
            options: {
                map: false, // inline sourcemaps
                processors: [
                    require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes
                    require('cssnano')() // minify the result
                ]
            },
            dist: {
                src: 'css/*.css'
            }
        },
        imagemin: {                          // Task
            dynamic: {                         // Target
                options: {                       // Target options
                    optimizationLevel: 3,
                    progressive: true
                },
                files: [{
                    expand: true,                  // Enable dynamic expansion
                    cwd: 'img/src/',                   // Src matches are relative to this path
                    src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
                    dest: 'img/dist/'                  // Destination path prefix
                }]
            }
        },
        watch: {
            sass: {
                files: [
                    "scss/**/*"
                ],
                tasks: [
                    "sass",
                    "postcss"
                ]
            },
            js: {
                files: [
                    'js/vendor/**/*.js',
                    "gruntfile.js"
                ],
                tasks: [
                    "concat",
                    //"babel",
                    "uglify"
                ]
            },
            img: {
                files: [
                    "img/src/**/*"
                ],
                tasks: [
                    ['newer:imagemin']
                ]
            }

        },
        //JUST FOR VENDORS
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        src: ['node_modules/jquery/dist/jquery.js'],
                        dest: 'js/vendor/jquery/',
                        flatten: true,
                        filter: 'isFile'
                    },
                    {
                        expand: true,
                        src: ['node_modules/Respond.js/dest/respond.min.js'],
                        dest: 'js/vendor/ie/',
                        flatten: true,
                        filter: 'isFile'
                    },
                    {
                        expand: true,
                        src: ['node_modules/html5shiv/dist/html5shiv.min.js'],
                        dest: 'js/vendor/ie/',
                        flatten: true,
                        filter: 'isFile'
                    },
                    {
                        expand: true,
                        src: ['node_modules/Placeholders.js/dist/placeholders.min.js'],
                        dest: 'js/vendor/ie/',
                        flatten: true,
                        filter: 'isFile'
                    },
                    {
                        expand: true,
                        src: ['node_modules/onscreen/dist/on-screen.umd.js'],
                        dest: 'js/vendor/onscreen/',
                        flatten: true,
                        filter: 'isFile'
                    },
                    {
                        expand: true,
                        src: ['node_modules/jquery-knob/js/jquery.knob.js'],
                        dest: 'js/vendor/circular_progressbar/',
                        flatten: true,
                        filter: 'isFile'
                    },
                    {
                        expand: true,
                        src: ['node_modules/masonry-layout/dist/masonry.pkgd.js'],
                        dest: 'js/vendor/masonry/',
                        flatten: true,
                        filter: 'isFile'
                    },
                    {
                        expand: true,
                        src: ['node_modules/animate.css/animate.css'],
                        dest: 'scss/vendor/animate/',
                        flatten: true,
                        filter: 'isFile',

                        rename: function(dest, src) {
                            return dest + src.replace('.css','.scss');
                        }
                    },
                    {
                        expand: true,
                        src: ['node_modules/remodal/dist/remodal.css'],
                        dest: 'scss/vendor/modal/',
                        flatten: true,
                        filter: 'isFile',

                        rename: function(dest, src) {
                            return dest + src.replace('.css','.scss');
                        }
                    },
                    {
                        expand: true,
                        src: ['node_modules/remodal/dist/remodal-default-theme.css'],
                        dest: 'scss/vendor/modal/',
                        flatten: true,
                        filter: 'isFile',

                        rename: function(dest, src) {
                            return dest + src.replace('.css','.scss');
                        }
                    },
                    {
                        expand: true,
                        src: ['node_modules/remodal/dist/remodal.js'],
                        dest: 'js/vendor/modal/',
                        flatten: true,
                        filter: 'isFile'
                    },
                    {
                        expand: true,
                        src: ['node_modules/ion-rangeslider/css/ion.rangeSlider.css'],
                        dest: 'scss/vendor/rangeslider/',
                        flatten: true,
                        filter: 'isFile',

                        rename: function(dest, src) {
                            return dest + src.replace('.css','.scss');
                        }
                    },
                    {
                        expand: true,
                        src: ['node_modules/ion-rangeslider/js/ion.rangeSlider.js'],
                        dest: 'js/vendor/rangeslider/',
                        flatten: true,
                        filter: 'isFile'
                    },
                    {
                        expand: true,
                        src: ['node_modules/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css'],
                        dest: 'scss/vendor/scrollbars/',
                        flatten: true,
                        filter: 'isFile',

                        rename: function(dest, src) {
                            return dest + src.replace('.css','.scss');
                        }
                    },
                    {
                        expand: true,
                        src: ['node_modules/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js'],
                        dest: 'js/vendor/scrollbar/',
                        flatten: true,
                        filter: 'isFile'
                    },
                    {
                        expand: true,
                        src: ['node_modules/select2/dist/css/select2.css'],
                        dest: 'scss/vendor/select2/',
                        flatten: true,
                        filter: 'isFile',

                        rename: function(dest, src) {
                            return dest + src.replace('.css','.scss');
                        }
                    },
                    {
                        expand: true,
                        src: ['node_modules/select2/dist/js/select2.full.js'],
                        dest: 'js/vendor/select2/',
                        flatten: true,
                        filter: 'isFile'
                    },
                    {
                        expand: true,
                        src: ['node_modules/slick-carousel/slick/slick.css'],
                        dest: 'scss/vendor/slider/',
                        flatten: true,
                        filter: 'isFile',

                        rename: function(dest, src) {
                            return dest + src.replace('.css','.scss');
                        }
                    },
                    {
                        expand: true,
                        src: ['node_modules/slick-carousel/slick/slick-theme.css'],
                        dest: 'scss/vendor/slider/',
                        flatten: true,
                        filter: 'isFile',

                        rename: function(dest, src) {
                            return dest + src.replace('.css','.scss');
                        }
                    },
                    {
                        expand: true,
                        src: ['node_modules/slick-carousel/slick/slick.js'],
                        dest: 'js/vendor/slider/',
                        flatten: true,
                        filter: 'isFile'
                    },
                    {
                        expand: true,
                        src: ['node_modules/tooltipster/dist/css/tooltipster.bundle.css'],
                        dest: 'scss/vendor/tooltips/',
                        flatten: true,
                        filter: 'isFile',

                        rename: function(dest, src) {
                            return dest + src.replace('.css','.scss');
                        }
                    },
                    {
                        expand: true,
                        src: ['node_modules/tooltipster/dist/js/tooltipster.bundle.js'],
                        dest: 'js/vendor/tooltips/',
                        flatten: true,
                        filter: 'isFile'
                    },
                    {
                        expand: true,
                        cwd: 'node_modules/materialize-css/sass/',
                        src: ['**'],
                        dest: 'scss/vendor/materializecss/'
                    },
                    {
                        expand: true,
                        src: ['node_modules/materialize-css/dist/js/materialize.js'],
                        dest: 'js/vendor/materializecss/',
                        flatten: true,
                        filter: 'isFile'
                    },
                    {
                        expand: true,
                        src: ['node_modules/sticky-kit/dist/sticky-kit.js'],
                        dest: 'js/vendor/sticky/',
                        flatten: true,
                        filter: 'isFile'
                    }
                ]
            }
        }
    });

    // Loads
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-newer');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-babel');

    // Default task(s).
    grunt.registerTask('default', ['watch']);
};

