module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.initConfig({
		uglify: {
			my_target: {
				files: {
					'mini.js' : ['./js/*.js']
				}
			}
		}
	});
	
};