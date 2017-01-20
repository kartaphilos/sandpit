var fs = require('fs');
var path = require('path');

file = process.argv[2];
ext = process.argv[3];

var lines = fs.readdir(file, function (err, list) {
	if (err) { console.log("error on directory read"); }
	else {
		for (i = 0; i<list.length; i++) {
			if (path.extname(list[i]) === '.' + ext) console.log(list[i]);
		}
	}
});	

