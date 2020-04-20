var gulp = require('gulp');
var cleanCSS= require('gulp-clean-css');
var sass= require('gulp-sass');
var fileinclude = require('gulp-file-include');
var browserSync = require('browser-sync');
var reload= browserSync.reload;//browser-sync要設定一個變數為reload的行為
var imagemin = require('gulp-imagemin');
var jshint = require('gulp-jshint');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
//========== bobo
// var connectPHP =require('gulp-connect-php');
//==========

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
    js:[ 
        'dev/js/*.js',
        'dev/js/**/*.js'
    ],
    php:[ 
        'dev/php/*.php',
        'dev/php/**/*.php',
        'dev/*.php',
    ],
    font:[
        'dev/font/*.*',
        'dev/font/**/*.*'
    ],
    img:[
        'dev/img/*.*',
        'dev/img/**/*.*'
    ],
    css:[
        'dest/css/*.css',
    ]
};

// ======================== PHP
// var options = {
//     base: './dest',
//     debug:true,
//     bin:'C:/php-7.4.2-nts-Win32-vc15-x64/php.exe',
//     ini:'C:/php-7.4.2-nts-Win32-vc15-x64/php.ini',
//     port:8080,
// }

//=========================

gulp.task('concat', function(){
    gulp.src(web.js).pipe(gulp.dest('./dest/js'));
    gulp.src(web.php).pipe(gulp.dest('./dest/php'));
    gulp.src(web.font).pipe(gulp.dest('./dest/font'));
    gulp.src(web.img).pipe(gulp.dest('./dest/img'));
});


gulp.task('js',function () {
    return gulp.src(web.js)
        // .pipe(babel({
        //     presets: ['env']
        // }))
        // .pipe(jshint())
        // .pipe(jshint.reporter('default'))
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
    gulp.src(web.sass)
    .pipe(sourcemaps.init())    //sourcemap -- 判斷css是從哪支sass轉譯                 
    .pipe(sass().on('error', sass.logError))  
    .pipe(sourcemaps.write())   //sourcemap -- 判斷css是從哪支sass轉譯 
    .pipe(gulp.dest('./dest/css'));           
});


//壓縮圖片
gulp.task('image-min',function(){
    gulp.src('dev/img/*.*')
    .pipe(imagemin())
    .pipe(gulp.dest('dest/img/mini'))
});
//因為壓縮圖片很吃資源，通常不會放在監看流程裡
//要上線前再壓縮即可


//將task命名為default
//終端機呼叫時不用gulp default
//直接打gulp就可以了
gulp.task('default',function(){
    //======bobo
    // browserSync.init({
    //     server:{
    //         baseDir: "./dest/",
    //         proxy:'localhost:8080',
    //         port:3000,
    //         watch:true,
    //         index: "main.html",
    //     }
    // });    
    // connectPHP.server(options)
    //======bobo
    gulp.watch(web.js,['js']).on('change',reload);
    gulp.watch(web.html,['fileinclude']).on('change',reload);
    gulp.watch(web.sass,['sass']).on('change',reload);
    gulp.watch(web.css).on('change',reload);
    gulp.watch([web.js,web.php,web.font,web.img],['concat']).on('change',reload);
    //====== BOBO
    // gulp.watch(web.php,['concatphp']).on('change',reload);
    //======
});


/*以下是關於我們的監看任務 */
gulp.task('aboutus',function(){
    browserSync.init({
        server:{
            baseDir: "./dest/",
            index: "aboutus.html"
        }
    });
    gulp.watch(web.html,['fileinclude']).on('change',reload);
    gulp.watch(web.sass,['sass']).on('change',reload);
    gulp.watch(web.js,['lint']).on('change',reload);
    gulp.watch([web.js,web.font,web.img],['concat']).on('change',reload);
});

/*以下是後台的監看任務 */
gulp.task('adminManage',function(){
    browserSync.init({
        server:{
            baseDir: "./dest/",
            index: "adminManage.html"
        }
    });
    gulp.watch(web.html,['fileinclude']).on('change',reload);
    gulp.watch(web.sass,['sass']).on('change',reload);
    gulp.watch(web.js,['lint']).on('change',reload);
    gulp.watch([web.js,web.font,web.img],['concat']).on('change',reload);
});


/*以下是後台登入的監看任務 */
gulp.task('adminlogin',function(){
    browserSync.init({
        server:{
            baseDir: "./dest/",
            index: "backend-login.html"
        }
    });
    gulp.watch(web.html,['fileinclude']).on('change',reload);
    gulp.watch(web.sass,['sass']).on('change',reload);
    gulp.watch(web.js,['lint']).on('change',reload);
    gulp.watch([web.js,web.font,web.img],['concat']).on('change',reload);
});

gulp.task('leadingPage',function(){
    browserSync.init({
        server:{
            baseDir: "./dest/",
            index: "leadingPage.html"
        }
    });
    gulp.watch(web.html,['fileinclude']).on('change',reload);
    gulp.watch(web.sass,['sass']).on('change',reload);
    gulp.watch(web.js,['lint']).on('change',reload);
    gulp.watch([web.js,web.font,web.img],['concat']).on('change',reload);
});