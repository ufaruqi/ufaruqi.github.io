"use strict";

const express = require("express");
const app = express();

// define endpoint for exercise 1 here

app.get("/math/circle/:r", (req, res) => {
  const dynamicVal = req.params.r;

  const area = Number((Math.PI * dynamicVal * dynamicVal).toFixed(2));
  const circumference = Number((Math.PI * 2 * dynamicVal).toFixed(2));

  res.json({ area: area, circumference: circumference });
});

// define endpoint for exercise 2 here


app.get("/hello/name", (req, res) => {
 


  let firstVal = req.query.first;
  let lastVal = req.query.last;

  // print error message
  if (firstVal === undefined && lastVal === undefined) {
    // return status of 400 with an error message
    res.status(400).json({ error: "Missing Required GET parameters: first, last" });
    return;
  }

  // error message for first parameter
  if (firstVal === undefined) {
    res.status(400).json({ error: "Missing Required GET parameters: first" });
    return;
  }

  // error message for second parameter
  if (lastVal === undefined) {
    res.status(400).json({ error: "Missing Required GET parameters: last" });
    return;
  }

  // print Hello firstName lastName
  res.send(`Hello ${firstVal} ${lastVal}`);
});

const PORT = process.env.PORT || 8000;
app.listen(PORT);