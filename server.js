var http = require("http");
var fs = require("fs");
var url = require("url");
var server =http.caeateServer(function(req, res) {
	console.log(req.url);
	var urlObj = url.parse(req.url);
	console.log(urlObj)
	var pathname = urlObj.pathname;
	fs.readFile("." + pathname, function(err,data) {
		if (err) {
			res.end("读取文件失败")；
			return;
		}
		res.end(data);
	}
})
	server.listen(3000);
	