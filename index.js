const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");

const createCsvWriter = require("csv-writer").createObjectCsvWriter;

const csvWriter = createCsvWriter({
  path: "out.csv",
  header: [
    { id: "mail", title: "Mail" },
    { id: "points", title: "Points" },
  ],
});

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/public", express.static(__dirname + "/public"));

const jsonParser = bodyParser.json();

app.get("/download", jsonParser, (req, res) => {
  res.sendFile(__dirname + "/out.csv");
});

app.post("/getData", jsonParser, function (req, res) {
  surveyResults = `${req.body.Points} ${req.body.Mail}`;
  console.log(surveyResults);
  let results;
  results = [];
  results.push({ points: req.body.Points, mail: req.body.Mail });

  csvWriter
    .writeRecords(results)
    .then(() => console.log("The CSV file was written successfully"));
  res.send({ status: "OK" });
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/html/index.html");
});

console.log("Сервер запущен...");
app.listen(3000);
