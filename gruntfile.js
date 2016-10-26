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
                    "public/scripts/windowResize.js",
                    "public/scripts/menu.js",
                    "public/scripts/switch-effect.js"
                ],
                dest: "public/build/app.js"
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-browserify");

    grunt.registerTask("hint",["jshint"]);
    grunt.registerTask("bundle-js",["browserify"]);

    grunt.registerTask("default",["jshint", "browserify"]);
};
