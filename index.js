var express = require('express');
var app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/public', express.static(__dirname + '/public'));


app.post("/getData", function (req, res) {


});

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/html/index.html');
});

console.log("Сервер запущен...")
app.listen(80);
