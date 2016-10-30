module.exports = function(grunt) {
    grunt.initConfig({
        jshint: {
            files: ["*.js", "public/scripts/*.js"],
            options: {
                esnext: true,
                globals: {
                    jQuery: true
                }
            }
        },
        browserify: {
            client: {
                src: [
                    "public/scripts/effects.js",
                    "public/scripts/menu.js",
                    "public/scripts/switch-effect.js"
                ],
                dest: "public/build/app.js"
            }
        },
        watch: {
            options: {
                livereload: true
            },
            scripts: {
                files: ["public/scripts/*.js", "!public/scripts/windowResize.js"],
                tasks: ["hint", "browserify"]
            }
            // css: {
            //     files: ["public/styles/*.css"],
            //     tasks: ["css"]
            // },
        },
        express: {
            all: {
                options: {
                    port: 3000,
                    hostname: 'localhost',
                    bases: ['./public'],
                    livereload: true
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-browserify");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks('grunt-express');

    grunt.registerTask("hint", ["jshint"]);
    grunt.registerTask("bundle-js", ["browserify"]);
    grunt.registerTask('server', ['express', 'watch']); // start live reload

    grunt.registerTask("default", ["jshint", "browserify"]);
};
