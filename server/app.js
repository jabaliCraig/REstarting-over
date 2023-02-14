const express = require('express');
const path = require('path');
const cors = require('cors');
const volleyball = require('volleyball');
const app = express();

app.use('/api/campuses', require('./api/campuses'));

// static middleware
app.use(express.static(path.join(__dirname, '..','public')))

app.use(cors())
app.use(volleyball)

app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// async(req, res, next)=> {
// 	try{
// 		const campusList = await Campus.findAll();
// 		console.log(campusList);
// 	}
// 	catch(err){
// 		next(err);
// 	}
// 	finally{
// 		console.log("We've finallied.")
// 	}
// }

module.exports = app;

