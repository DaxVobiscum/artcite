var gulp = require("gulp");
var path = require("path");
var shell = require("gulp-shell");
var webpack = require("webpack-stream");

gulp.task("js", () => {
    
    return gulp.src("src/index.js")
        .pipe(webpack( require("./webpack.config.js"), require("webpack") ))
        .pipe(gulp.dest("build/app/"));
});

gulp.task("js-update", [ "js" ], () => {
    
    return gulp.src("./build/app/*.*")
        .pipe(gulp.dest(path.resolve(__dirname, "client", "app")));
});

gulp.task("jsdev", [ "js-update" ], () => {
    
    gulp.watch("./src/**/*.html", { interval: 500 }, [ "js-update" ]);
    gulp.watch("./src/**/*.ts", { interval: 500 }, [ "js-update" ]);
});

gulp.task("redis-start", shell.task("redis-server", {
    cwd: "redis-4.0.1/src/"
}));

gulp.task("redis-cli", shell.task("redis-cli", {
    cwd: "redis-4.0.1/src/"
}));