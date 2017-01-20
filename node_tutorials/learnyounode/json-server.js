var express = require ('express');
var bodyParser = require("body-parser");

var app = express();
//var port = 3000;
var port = +process.argv[2];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
	res.send("hello\n");
});

app.get("/api/parsetime", (req, res) => {
	//res.writeHead(200, { 'Content-Type': 'application/json' })
	console.log("query = ", req.query.iso);
	var isodate = new Date(req.query.iso);
	console.log("isodate: ", isodate);
	var jsontime = [];
	jsontime.push( { hour: isodate.getHours() } );
	jsontime.push( { minute: isodate.getMinutes() } );
	jsontime.push( { second: isodate.getSeconds() } );
	console.log("jsontime: ", jsontime);
	res.json(JSON.stringify( jsontime ));
});
app.get("/api/unixtime", function (req, res) {
        var jsontime = [];
	var isodate = new Date(req.query.iso);
	jsontime.push( { unixtime: isodate.getTime() } );
	//res.writeHead(200, { 'Content-Type': 'application/json' })
	res.json(JSON.stringify( jsontime ));
});

var server = app.listen(port, () => {
                console.log("Listening on port %s...", server.address().port);
        });

