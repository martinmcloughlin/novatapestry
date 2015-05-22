module.exports = function(grunt) {
	
	grunt.initConfig({
		jade: {
			options: {
				data: {
					debug: false
				},
				pretty: true
			},
			html: {
				files: [{
					expand: true,
					cwd: './src/jade/',
					src: ['**/*.jade', '!**/_*', '!patterns/', '!patterns/**'],
					dest: './src/',
					extDot: 'last',
					ext: '.html'
				}]
			},
			templates: {
				files: [{
					expand: true,
					cwd: './src/assets/js/templates/jade/',
					src: '*.jade',
					dest: './src/assets/js/templates/',
					extDot: 'last',
					ext: '.html'
				}]
			},
			patterns: {
				files: [{
					expand: true,
					cwd: './src/jade/patterns/',
					src: '**/*.jade',
					dest: './src/patterns/',
					extDot: 'last',
					ext: '.md'
				}]
			}
		},
		sass: {
			dist: {
				options: {
					style: 'expanded'
				},
				files: [{
					expand: true,
					cwd: './src/assets/sass/',
					src: ['**/*.scss','!**/_*'],
					dest: './src/assets/css',
					extDot: 'last',
					ext: '.css'
				}]
			}
		},
		clean: {
			build:{
				src: './build/'
			}, 
			cleanJSON: {
				src: './src/json/*.json'
			}
		},
		gulp: {
			target: {
				options: {
					tasks: function(stream) { return stream.pipe(require('gulp-tree')()); }
				},
				expand: true,
				cwd: './src/patterns/',
				src: '*',
				dest: './src/json'
			},
		},
	});
	
	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-gulp');
	
	
	
	grunt.registerTask('default');
	grunt.registerTask('pages', ['jade:html']);
	grunt.registerTask('jadePatterns', ['jade:patterns']);
	grunt.registerTask('ngTemplates', ['jade:templates']);
	grunt.registerTask('guideSass', ['sass:dist']);
	
	
	
};