var gulp = require('gulp');
var gutil = require("gulp-util");
var webpack = require("webpack");

gulp.task('watch', function () {
    return gulp.watch('src/**/*.js', ["default"])
});

gulp.task("default", function(callback) {
    // run webpack
    webpack({
        context: __dirname + "/src",
	    entry: "./app.js",
	    output: {
	        path: __dirname + "/dist",
	        filename: "main.js"
	    },
	    module: {
		    loaders: [
		        {
		          test: /.jsx?$/,
		          exclude: /(node_modules|bower_components)/,
		          loader: 'babel'
		        }
		      ]
		  }
    }, function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
        callback();
    });
});
