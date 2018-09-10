var express = require('express');
var app = express();
var url = require('url');

app.use(express.static('public')); //fixed subdirectory

app.get('/', function (req, res) {
   res.send('Hello World');
})
app.get('/test', function (req, res) {
      console.log(__dirname);
      console.log(req);
      res.send("root path:" + __dirname + "....... testing ...");
})
app.get('/postBC', function (req, res) {
	var q = url.parse(req.url,true);
	//console.log(q.host);
	//console.log(q.pathname);
	var options = q.query;
	//console.log(options.table);
	//console.log(options.id);
	var table=options.table;
	var id=options.id;
	
	res.send("URL: " + req.url  + "   Path: " + q.pathname);

	if (table=="product") {
	    // read product table record with the given id
	    // extract metadata from the data record
	    // format and encrypt the data record with a pub key, keep the private key
	    // hash the encrypted data record (immutable)
	    // store the encrypted dataset to a database (e.g. use dataset id as the key)
	    // form URL for the encrypted dataset
	    // post dataset id, decription key (private key), hash, datasetype ("product"), 
	    // URL, and metaData
	    res.send("post product \"" + id + "\" info to blockchain");
	}
	if (table=="producttype") { 
	    res.send("post product type \"" + id + "\" info to blockchain");
	}
	if (table=="production") {
	    res.send("post production \"" + id + "\" info to blockchain");
	}
})

app.get('/getBC', function (req, res) {
    var pathname = url.parse(req.url).pathname;
    console.log(__dirname);
    res.send("URL: " + req.url  + "   Path: " + pathname);
})


var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})