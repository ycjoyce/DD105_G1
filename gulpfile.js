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
var connectPhp=require('gulp-connect-php');


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


gulp.task('server',function(){
    var options={
    base:'./dest', /*从打包目录访问*/
    open:true, /*自动打开浏览器*/
    bin:'C:/php-7.4.2-nts-Win32-vc15-x64/php.exe',/*自本地php.exe路径地址*/
    ini:'C:/php-7.4.2-nts-Win32-vc15-x64/php.ini',/*自本地php.ini路径地址*/
    port:8080, /*自端口*/
    };
    connectPhp.server(options);/*启动服务*/
    });

//將task命名為default
//終端機呼叫時不用gulp default
//直接打gulp就可以了
gulp.task('default',function(){
    browserSync.init({
        server:{
            baseDir: "./dest/",
            index: "login.html",
            proxy:'127.0.0.1:8080',
            open: 'external',
        }
    });
    gulp.watch(web.js,['js']).on('change',reload);
    gulp.watch(web.html,['fileinclude']).on('change',reload);
    gulp.watch(web.sass,['sass']).on('change',reload);
    gulp.watch([web.js,web.php,web.font,web.img],['concat']).on('change',reload);
});