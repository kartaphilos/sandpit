var fs = require('fs');

var lines = fs.readFile(process.argv[2], 'utf8', function (err, data) {
	if (err) { console.log("error on file read"); }
	else {
		var l = data.split('\n').length-1;
		console.log(l);
		return l;
	}
});	

