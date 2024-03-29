module.exports = function (grunt) {

    grunt.initConfig({
        protractor: {
            options: {
                configFile: "tests/e2e/protractorConf.js", // Default config file
                keepAlive: true, // If false, the grunt process stops when the test fails.
                noColor: false, // If true, protractor will not use colors in its output.
                args: {
                    // Arguments passed to the command
                }
            },
            validate_forums_tests: {
                configFile: "tests/e2e/conf/protractorConf.js",
                options: {
                  args: {
                    suite: ['validateForums'],
                    verbose: true
                  }
                }
              },
        },
    });

    grunt.loadNpmTasks('grunt-protractor-runner');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('validateForums', ['protractor:validate_forums_tests']);
};



