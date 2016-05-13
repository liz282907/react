var webpack = require('webpack'),
	WebpackDevServer = require('webpack-dev-server'),
	config = require('./webpack.config.js'),
	// fs = require("fs"),
	path = require("path"),
	// rewrite = require("express-urlrewrite"),
	express = require("express");

//mock
// import {categoryList} from "./config/serverConfig.js";
// var serverConfig = require("./config/serverConfig.js");


var server = new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(3001,'localhost',function(err,result){
	if(err) console.log(err);
	console.log("webpack listening at port 3001");
});
var app = express();

// var viewsDir = path.join(__dirname,"src","views");

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

app.get("/monitor/index/categoryList",function(req,res){
	var data = {"categories":[
					{
						"id":01,
						"name":"出租车监控",
						"img":"../../../images/taxi.png"
						},
					{
						"id":02,
						"name":"专车监控",
						"img":"../../../images/zhuanche.png"
						},
					{
						"id":03,
						"name":"顺风车监控",
						"img":"../../../images/shunfengche.png"
						},
					{
						"id":04,
						"name":"快车监控",
						"img":"../../../images/kuaiche.png"
						},
					{
						"id":05,
						"name":"代驾监控",
						"img":"../../../images/designate.png"
						},
					{
						"id":06,
						"name":"客服监控",
						"img":"../../../images/service.png"
						},
					{
						"id":07,
						"name":"公交监控",
						"img":"../../../images/bus.png"
						},
					{
						"id":08,
						"name":"Phoenix支付专区",
						"img":"../../../images/taxi.png"
						},
					]
				};



	res.json(data);
	// res.sendFile(__dirname+"/mock/page1.json");
});

app.get("/monitor/index/monitorList",function(req,res){
	var data = {"monitorList":[
					{
						"name":"出租车监控",
						"url":""
						},
					{
						"name":"专车监控",
						"url":""
						},
					{
						"name":"快车监控",
						"url":""
						}
					]
				};



	res.json(data);
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