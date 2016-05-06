var webpack = require('webpack'),
	WebpackDevServer = require('webpack-dev-server'),
	config = require('./webpack.config.js'),
	fs = require("fs"),
	path = require("path"),
	rewrite = require("express-urlrewrite"),
	express = require("express");

var server = new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(3001,'localhost',function(err,result){
	if(err) console.log(err);
	console.log("webpack listening at port 3001");
});
var app = express();

var viewsDir = path.join(__dirname,"src","views");

/*
fs.readdirSync(path.join(__dirname,"src","views")).forEach(function(file,index){
	server.use(rewrite("/monitor/index/*",viewsDir+"/page1.html"))
		.use(rewrite("/monitor/category/*",viewsDir+"/page2.html"));
});
*/
app.get("/monitor/index",function(req,res){
	res.sendFile(__dirname+"/src/views/"+"page1.html");
});
app.get("/monitor/category/*",function(req,res){
	res.sendFile(__dirname+"/src/views/"+"page2.html");
});

app.use(express.static(__dirname))
		.listen(9090, 'localhost', function (err, result) {
			  if (err) console.log(err);
			  console.log('Listening at localhost:9090');
});

/*
server.use(rewrite("/monitor/index/*",viewsDir+"/page1.html"))
		.use(rewrite("/monitor/category/*",viewsDir+"/page2.html"));
server.use(express.static(__dirname));
		.listen(9090, 'localhost', function (err, result) {
  if (err) console.log(err);
  console.log('Listening at localhost:9090');
});

*/