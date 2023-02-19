//magic stuff
const express = require('express');
const path = require('path');
const cors = require('cors');
const volleyball = require('volleyball');
const app = express();
//my stuff
app.use('/api/campuses', require('./api/campuses'));
app.use('/api/students', require('./api/students'));
// body parsing middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// static middleware
app.use(express.static(path.join(__dirname, '..','public')))
//more magic???
app.use(cors())
app.use(volleyball)
//at this point, I don't honestly remember what I've added and what came with the project
app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});
// error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error')
})

module.exports = app;

