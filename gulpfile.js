var gulp = require('gulp');
var cleanCSS= require('gulp-clean-css');
var sass= require('gulp-sass');
var fileinclude = require('gulp-file-include');
var browserSync = require('browser-sync').create();
var reload= browserSync.reload;//browser-sync要設定一個變數為reload的行為
var imagemin = require('gulp-imagemin');
var jshint = require('gulp-jshint');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var php=require('gulp-connect-php');


//打包
//=================================================================


//將路徑以變數物件的方式寫入
var web={
    html:[
        'dev/*.html',
        'dev/**/*.html',
        'dev/**/**/*.html'
    ],
    sass:[
        'dev/sass/*.scss',
        'dev/sass/**/*.scss'
    ],
    css:[
        'dest/css/*.css',
        'dest/css/**/*.css'
    ],
    js:[ 
        'dev/js/*.js',
        'dev/js/**/*.js'
    ],
    php:[ 
        'dev/php/*.php',
        'dev/php/**/*.php'
    ],
    font:[
        'dev/font/*.*',
        'dev/font/**/*.*'
    ],
    img:[
        'dev/img/*.*',
        'dev/img/**/*.*'
    ]
};


gulp.task('concat', function(){
    gulp.src(web.js).pipe(gulp.dest('./dest/js'));
    gulp.src(web.php).pipe(gulp.dest('./dest/php'));
    gulp.src(web.font).pipe(gulp.dest('./dest/font'));
    gulp.src(web.img).pipe(gulp.dest('./dest/img'));
});


gulp.task('js',function () {
    return gulp.src(web.js)
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(gulp.dest('./dest/js'))
});

gulp.task('fileinclude', function() {
    gulp.src(web.html)
        .pipe(fileinclude({
        prefix: '@@',
        basepath: '@file'
        }))
        .pipe(gulp.dest('./dest'));  
    });


gulp.task('sass', function(){
    return gulp.src(web.sass)
    .pipe(sourcemaps.init())    //sourcemap -- 判斷css是從哪支sass轉譯                 
    .pipe(sass().on('error', sass.logError))  
    .pipe(sourcemaps.write())   //sourcemap -- 判斷css是從哪支sass轉譯 
    .pipe(gulp.dest('./dest/css'))
    .pipe(browserSync.stream({match:'**/*.css'}));           
});

gulp.task('css', function() {
    return gulp.src('dest/css/**/*.css')
      .pipe(browserSync.stream({match:'**/*.css'}));
   });


//    gulp.task('styles', function () {
//     return gulp.src(web.sass)
//       .pipe(sourcemaps.init())
//       .pipe(sass().on('error', sass.logError)) 
//       .pipe(sourcemaps.write())
//       .pipe(gulp.dest('./dest/css'))
//       .pipe(browserSync.stream({ match: web.css }));
//   });



//壓縮圖片
gulp.task('image-min',function(){
    gulp.src('dev/img/*.*')
    .pipe(imagemin())
    .pipe(gulp.dest('dest/img/mini'))
});
//因為壓縮圖片很吃資源，通常不會放在監看流程裡
//要上線前再壓縮即可


    gulp.task('php', function(){
        php.server({base:'./', port:80, keepalive:true});
    });


    gulp.task('browserSync', function() {
        browserSync.init({
            proxy:"localhost:80",
            baseDir: "./",
            index: "login.html",
            open:true,
            notify:false
        });
        gulp.start('sass');
        gulp.start('watch');
    });


gulp.task('watch', function () {
    gulp.watch(web.sass, ['sass']);
    gulp.watch(web.css, ['css']).on('change',reload);
    gulp.watch(web.js,['js']).on('change',reload);
    gulp.watch(web.html,['fileinclude']).on('change',reload);
    gulp.watch([web.js,web.php,web.font,web.img],['concat']).on('change',reload);
});


//將task命名為default
//終端機呼叫時不用gulp default
//直接打gulp就可以了
gulp.task('default',['sass','css','browserSync'],function(){
    gulp.start('watch');
});
