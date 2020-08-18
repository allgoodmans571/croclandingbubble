const express = require('express');
const app = express();
const sqlite3 = require("sqlite3").verbose();
const bodyParser = require('body-parser');


function dbOpen() {
  db = new sqlite3.Database(':memory:', (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to the in-memory SQlite database.');
  });
  return db;
}

function dbClosing() {
  db.close((err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Close the database connection.');
  });
}




app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/public', express.static(__dirname + '/public'));


app.post("/getData", function (req, res) {
  results = request.body.results();

});

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/html/index.html');
});

console.log("Сервер запущен...")
app.listen(80);
