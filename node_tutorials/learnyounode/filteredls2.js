var filter = require('./mod_filter.js');

var dir = process.argv[2];
var ext = process.argv[3];

filter (dir, ext, function (err, data) {
	if (err) console.error(err);
	else {
		for (i in data) console.log(data[i]);
	}
});

