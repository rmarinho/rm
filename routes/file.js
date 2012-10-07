/*
 * GET files listing.
 */
var __dirname ='/media',
    socketServer = require('../sockets');

exports.list = function(req, res){
	console.log('find files');
	var files = [];
	var directorys = [];
	res.render('list', {title:'our stuff', files: directorys});

	var finder = require('findit').find(__dirname);

	//This listens for directories found
	finder.on('directory', function (dir) {
		directorys.push(dir);
		socketServer.SendMessage(dir);
		//console.log('Directory: ' + dir + '/');
	});

	//This listens for files found
	finder.on('file', function (file) {
		files.push(file);
		//	console.log('File: ' + file);
	});
	
	finder.on("end", function() {
  
	});
};
