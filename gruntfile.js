module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.initConfig({
		uglify: {
			my_target: {
				files: {
					'mini.js' : ['./js/*.js']
				}
			}
		},
		watch: {
			files: ['./js/*.js'],
			tasks: ['uglify']
		}
	});
	
};