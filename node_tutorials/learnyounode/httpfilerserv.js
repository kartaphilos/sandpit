var http = require ('http');
var fs = require ('fs');

var port = +process.argv[2];
var page = process.argv[3];

var server = http.createServer( (req, res) => {
	fs.createReadStream(page).pipe(res);
});
server.listen(port);


