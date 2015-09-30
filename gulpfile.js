var gulp = require('gulp');
var gutil = require("gulp-util");
var webpack = require("webpack");

gulp.task('watch', ["default"],  function () {
    return gulp.watch('./src/**/*.jsx', ["default"])
});

gulp.task("default", function(callback) {
    // run webpack
    webpack({
        context: __dirname,
	    entry: {
	    	main: "./src/app.jsx",
	    	vendor: "./src/vendor.jsx"
	    },
	    output: {
	        path: __dirname + "/dist",
	        filename: "main.js"
	    },
	    plugins: [
	    	new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.js"),
	    	new webpack.optimize.UglifyJsPlugin()
	    ],
	    devtool: process.env.NODE_ENV ? false: "source-maps",
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
        gutil.log("[webpack]", stats.toString());
        callback();
    });
});
