module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: [
                    'node_modules/jquery/dist/jquery.min.js',
                    //'node_modules/onscreen/dist/on-screen.umd.min.js',
                    //'node_modules/remodal/dist/remodal.min.js',
                    //'node_modules/select2/dist/js/select2.full.min.js',
                    //'node_modules/slick-carousel/slick/slick.min.js',
                    //'node_modules/tooltipster/dist/js/tooltipster.bundle.min.js',
                    //'node_modules/ion-rangeslider/js/ion.rangeSlider.min.js',
                    //'node_modules/jquery-knob/dist/jquery.knob.min.js',
                    //'node_modules/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js',
                    //'node_modules/masonry-layout/dist/masonry.pkgd.min.js',
                    'js/vendor/material/materialize.js'
                ],
                dest: 'js/vendor.min.js'
            }
        },
        sass: {                              // Task
            dist: {                            // Target
                options: {                       // Target options
                    style: 'compressed',
                    noCache: true
                },
                files: {                         // Dictionary of files
                    'css/cam.css': 'sass/cam.scss'       // 'destination': 'source'
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
            files: [
                'js/vendor/**/*.js',
                "sass/**/*",
                "img/src/**/*",
                "gruntfile.js"
            ],
            tasks: [
                "uglify",
                "sass",
                "postcss",
                ['newer:imagemin']
            ]
        },
        //JUST FOR PLUGINS.BAT/SH
        copy: {
            main: {
                files: [
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
                        cwd: 'node_modules/materialize-css/sass/',
                        src: ['**'],
                        dest: 'scss/vendor/materializecss/'
                    }
                ]
            }
        }
    });

    // Loads
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-newer');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Default task(s).
    grunt.registerTask('default', ['watch']);
};

