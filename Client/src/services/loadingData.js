var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:3000/mydb";

MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    console.log("database created!");
    db.close();
})