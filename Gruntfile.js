//Archivo de configuracion para tareas con grunt
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    //Configuraciones de nodemon
    nodemon: {
      dev: {
        script: "./bin/www"
      }
    },
    //Configuraciones de less
    less: {
      development: {
        options: {
          paths: ["assets/css"]
        },
        files: {
          "path/to/result.css": "path/to/source.less"
        }
  }}
});

  //Cargar plugins de grunt "necesario para que las tareas funcionen"
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-contrib-less');
  //Definicion de la tarea inicial
  grunt.registerTask("default", ["nodemon:dev"]);

}
