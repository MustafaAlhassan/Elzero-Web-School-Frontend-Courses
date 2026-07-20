var gulp = require("gulp");
var concat = require("gulp-concat");
const sass = require("gulp-sass")(require("sass"));
const pug = require("gulp-pug");
var watch = require("gulp-watch");
var livereload = require("gulp-livereload");
var sourcemaps = require("gulp-sourcemaps");
var uglify = require("gulp-uglify");
var notify = require("gulp-notify");

// Html Task
gulp.task("html", function () {
  return gulp
    .src("project/index.pug")
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest("dist"))
    .pipe(notify("HTML Gulp Done!"))
    .pipe(livereload());
});

// CSS Task
gulp.task("css", function () {
  return gulp
    .src("project/css/main.scss")
    .pipe(sass())
    .pipe(concat("main.css"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist/css"))
    .pipe(livereload());
});

// JS Task
gulp.task("js", function () {
  return gulp
    .src(["project/js/*.js", "!project/js/two.js.js"])
    .pipe(concat("main.js"))
    .pipe(uglify())
    .pipe(gulp.dest("dist/js"))
    .pipe(livereload());
});

// Watch Task
gulp.task("watch", function () {
  require("./server");
  livereload.listen();
  gulp.watch("project/index.pug", gulp.series("html"));
  gulp.watch("project/css/**/*.scss", gulp.series("css"));
  gulp.watch("project/js/*.js", gulp.series("js"));
});
