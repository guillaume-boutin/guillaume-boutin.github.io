module.exports = function(grunt) {

  grunt.initConfig({

    //Basic settings and infos about the plugin
    pkg: grunt.file.readJSON('package.json'),

    cssmin: {
      minify: {
        src: 'css/main.css',
        dest: 'css/main.min.css'
      }
    },

    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'css/main.css': 'scss/main.scss'
        }
      }
    }


  });

  //Load the npm plugins
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-sass');


  //Do the tasks
  grunt.registerTask('default', ['cssmin']);

  grunt.registerTask('speak', function() {
    console.log("I'm speaking.");
  });

  grunt.registerTask('yell', function() {
    console.log("I'm YELLING!");
  });

  grunt.registerTask('both', ['speak', 'yell']);

};
