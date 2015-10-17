/**
 * Gruntfile for config
 * Created by Administrator on 2015/10/17.
 */
const childProcess = require("child_process");
module.exports =function(grunt){
    grunt.initConfig({
        concat: {
            options: {
                separator: ';',
            },
            dist: {
                src: ['lib/button.js'],
                dest: 'js/util.js',
            },
        },
        uglify: {
            options: {
                // 此处定义的banner注释将插入到输出文件的顶部
                banner: '/*! uglify <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'js/util.min.js': ['<%= concat.dist.dest %>']
                }
            }
        },
        watch : {
            files: ['src/button.js'],
            tasks: ['babel','concat','uglify']
        }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');//检查制定的文件变化后，执行相应的操作
    grunt.registerTask('tidy',['concat','uglify']);
    grunt.event.on("watch", function (action, filepath, target) {
        console.log("grunt-contrib-watch is running:"+action);
    })
    grunt.registerTask("babel", function () {
        childProcess.exec("babel -d lib src/")
    });
    grunt.registerTask('default', function () {
        console.info("welcome to Grunt!")
    });
}