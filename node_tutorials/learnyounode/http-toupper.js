var http = require ('http');
var map = require ('through2-map');

var port = +process.argv[2];

var server = http.createServer( (req, res) => {
	// read req pipe to map transform pipe to res.
	req.pipe( map(function (chunk) {
		return chunk.toString().toUpperCase()
		})).pipe(res)
});
server.listen(port);


