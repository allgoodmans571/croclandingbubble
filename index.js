const express = require('express');
const app = express();
const bodyParser = require('body-parser');



app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/public', express.static(__dirname + '/public'));


app.post("/getData", function (req, res) {
  surveyResults = `${req.body.Points} ${req.body.Mail}`;
  console.log(surveyResults);
  res.send({ status: 'OK'});
});

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/html/index.html');
});

console.log("Сервер запущен...")
app.listen(8080);
