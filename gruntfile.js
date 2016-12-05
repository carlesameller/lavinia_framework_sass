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
                    //'js/vendor/check_radio/icheck.js',
                    //'js/vendor/datepicker/bootstrap-datepicker.js',
                    //'js/vendor/inViewport/jquery.onscreen.js',
                    //'js/vendor/modal/remodal.min.js',
                    //'js/vendor/select/select2.full.min.js',
                    //'js/vendor/slider/slick.min.js',
                    //'js/vendor/tooltips/jquery.tooltipster.js',
                    //'js/vendor/range/ion.rangeSlider.js',
                    //'js/vendor/progressbar/circular/jquery.knob.js',
                    //'js/vendor/progressbar/linear/bootstrap-progressbar.js',
                    //'js/vendor/scrollbars/jquery.mCustomScrollbar.js',
                    //'js/vendor/range/ion.rangeSlider.js',
                    'js/vendor/material/materialize.js'
                ],
                dest: 'js/vendor.min.js'
            }
        },
        sass: {                              // Task
            dist: {                            // Target
                options: {                       // Target options
                    style: 'expanded'
                },
                files: {                         // Dictionary of files
                    'less/vendor/material/materialize.less': 'vendor/materialize/sass/materialize.scss'       // 'destination': 'source'
                }
            }
        },
        less: {
            development: {
                options: {
                    paths: ["less/**/*"],
                    yuicompress: true,
                    compress: true
                },
                files: {
                    "css/cam.css": "less/cam.less"
                }
            }
        },
        cssnano: {
            options: {
                sourcemap: false
            },
            dist: {
                files: {
                    'css/cam.css': 'css/cam.css'
                }
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
                "vendor/materialize/sass/**/*",
                "less/**/*",
                "img/src/**/*",
                "gruntfile.js"
            ],
            tasks: [
                "uglify",
                "sass",
                "less",
                "cssnano",
                ['newer:imagemin']
            ]
        }
    });

    // Loads
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-cssnano');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-newer');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['watch']);
};
