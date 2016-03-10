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
    },

    watch: {
      sass: {
        files: 'scss/main.scss',
        tasks: ['sass', 'cssmin']
      }
    }

  });

  //Load the npm plugins
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-sass');


  //Do the tasks
  grunt.registerTask('default', ['watch']);

};
