var http = require('http');
var bl = require('bl');

var res = [];
var count = 0;

function printResults () {
  console.log("printing results");
  for (var i = 0; i < 3; i++)
    console.log(res[i])
}

for ( i=0; i<3; i++ ) {
	http.get(process.argv[i+2], (response) => {
		response.pipe(bl(function (err, data) {
		      if (err)
        		return console.error(err)
      		res[i] = data.toString()
		count++;
		console.log("responses returned: ", count);
		if (count == 3) printResults()
		}))
		response.on("error", console.error);
	}).on('error', console.error);
}

