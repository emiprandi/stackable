module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*\n' +
                        ' * <%= pkg.name %> - v<%= pkg.version %>\n' +
                        ' * Author: <%= pkg.author %>\n' +
                        ' * <%= pkg.homepage %>\n' +
                        ' * <%= pkg.license %> License\n' +
                        ' */\n'
            },
            build: {
                src: 'src/<%= pkg.name %>.src.js',
                dest: '<%= pkg.name %>.min.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['uglify']);
};
