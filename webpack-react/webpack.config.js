var webpack = require('webpack'),
	path = require('path'),
	fs = require('fs'),
	BUILD_DIR = path.join(__dirname,'build',"javascripts","entries"),
	SRC_DIR = path.join(__dirname,'src');

var DEBUG = process.env.NODE_ENV;
console.log('DEBUG: ' + DEBUG);

var babelPresets = {presets: ['react', 'es2015']};

module.exports = {
	entry: getEntries(),

	output:{
		path:BUILD_DIR,
		filename:"[name].[hash].bundle.js",
		publicPath:"/monitor/",
	},

	module:{
		loaders:[
			{
				//loaders:['react-hot','babel']
				test:/\.jsx?$/,
				exclude:/node_modules/,
				loaders:['react-hot','babel?'+JSON.stringify(babelPresets)],
				//loaders: isDevelopment ? ['react-hot', 'babel'] : ['babel'],//for jsx->js
				// query:{
				// 	presets:['react','es2015']
				// }
			},
			{
				test:/\.scss$/,
				loader:"style!css!sass" //run from right to left
			}

		]
	},

	resolve:{
		//配置别名，例如ui: dir+"/js/ui" 以后可以直接用ui代替后者
		alias:{
			reset:path.join(__dirname,"src","stylesheets","reset.css")
		}
	},

	devtool:'eval-source-map',

	plugins:[
		new webpack.DefinePlugin({
			"process.env":{
				NODE_ENV:JSON.stringify("production")//默认情况下用的开发版本的react,会比较慢
			}
		}),
	  	new webpack.HotModuleReplacementPlugin(),
	  	new webpack.NoErrorsPlugin()

		//页面A,B通用的抽出来
		//new CommonsChunkPlugin('somewhat.js')
	]
}

function getEntries(){
	var routeDir = path.join(SRC_DIR,"javascripts","routes");
	var routeNames = routeDir?fs.readdirSync(routeDir):[];

	var nameMaps = {};
	routeNames.forEach(function(routeName){
		var filename = routeName.match(/(.+)\.js$/)[1];
		if(filename){
			var devEntryPath = [
                'webpack-dev-server/client?http://127.0.0.1:3001', // WebpackDevServer host and port
                'webpack/hot/only-dev-server',
                path.join(routeDir,filename)
            ];
            nameMaps[filename] = devEntryPath;

		}
	});
	return nameMaps;
}