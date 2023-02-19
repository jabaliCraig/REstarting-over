const express = require('express');
const path = require('path');
const cors = require('cors');
const volleyball = require('volleyball');
const app = express();

app.use('/api/campuses', require('./api/campuses'));
app.use('/api/students', require('./api/students'));//This line of code crashes the app... so🤔...how do we be SNEAKY????

// body parsing middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// static middleware
app.use(express.static(path.join(__dirname, '..','public')))

app.use(cors())
app.use(volleyball)

app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.post("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

// error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error')
})

module.exports = app;

