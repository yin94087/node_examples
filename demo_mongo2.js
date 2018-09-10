var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
	if (err) throw err;
	var dbo = db.db("newDB");

  dbo.collection("customers").find().toArray(function(err, result) {
	  if (err) throw err;
	  console.log(result);
	  //	  db.close();
      });

  var query = { address: "Park Lane 38" };


  dbo.collection("customers").find(query).toArray( function(err, result) {
          if (err) throw err;

	  console.log("----query command: ", query);
          console.log("=====",JSON.stringify(result));

	  //          db.close();
      });

  db.close();

    });

