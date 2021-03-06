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
                    "public/scripts/menu.js"
                ],
                dest: "public/build/app.js"
            }
        },
        watch: {
            options: {
                livereload: true
            },
            scripts: {
                files: ["public/scripts/*.js", "!public/scripts/windowResize.js", "public/*.html", "public/styles/*.cs"],
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

    grunt.registerTask("hint", ["jshint"]);
    grunt.registerTask("bundle-js", ["browserify"]);
    grunt.registerTask('server', ['express', 'watch']); // start live reload

    grunt.registerTask("default", ["jshint", "browserify"]);
};
