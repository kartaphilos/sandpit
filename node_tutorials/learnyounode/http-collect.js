var http = require('http');

var url = process.argv[2];

http.get(url, (response) => {
	response.setEncoding('utf8');
	let raw = '';
	response.on("data", (chunk) => raw += chunk );
	response.on("end", () => {
		console.log(raw.length);
		console.log(raw);
	});

	response.on("error", console.error);

}).on('error', console.error);

