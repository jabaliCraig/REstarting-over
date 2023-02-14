const router = require('express').Router();
////When Campus and db are exported via `module.exports =...`
// const db = require('../db/db');//This line does NOT crash the app... but browser shows `ReferenceError: Campus is not defined`
// import Campus from '../db/models/Campus';//this LINE crashes the app --- SyntaxError: Cannot use import statement outside a module
// const Campus = require('../db/models/Campus');//THIS line crashes the app --- Error: Cannot find module './db'
// const Campus = require('./db/models/Campus');//THIS line crashes the app --- Error: Cannot find module './db/models/Campus'
// const { Campus } = require('../db/models/Campus');//THIS line crashes the app --- Error: Cannot find module './db'
//this BLOCK crashes the app --- Error: Cannot find module '../db'
// const {
//   models: { Campus },
// } = require('../db');

//I proceed to move Campus.js directly into /server/db directory and...
// const db = require('../db/db');//This line does NOT crash the app... but browser shows `ReferenceError: Campus is not defined`
// const Campus = require('../db/models/Campus');//THIS line crashes the app --- Error: Cannot find module '../db/models/Campus'
// const Campus = require('../db/Campus');//and THIS WORKS... BUT (because I refuse to be happy), I'm going to put it back inside server/db/models...

//I proceed to move Campus.js directly into /server/db directory and...
const db = require('../db/db');//This line does NOT crash the app... but browser shows `ReferenceError: Campus is not defined`
// const Campus = require('../db/models/Campus');//THIS line crashes the app --- Error: Cannot find module '../db/models/Campus'
const Campus = require('../db/Campus');//and THIS WORKS... BUT (because I refuse to be happy), I'm going to put it back inside server/db/models...

// Add your routes here:

router.get('/', async(req, res, next) => {
  try{
    const campusList = await Campus.findAll();
		console.log(campusList);
		res.send(campusList);
  }
  catch(e){
    next(e);
  }
})

// router.get('/teachers', async(req, res, next) => {
//   try{
//     res.send(await User.findTeachersAndMentees());
//   }
//   catch(e){
//     next(e);
//   }
// })

// router.delete('/:id', async(req, res, next) =>{
//   // console.log("I have NO idea what I'm doing here...")
//   if(!User.findByPk(req.params.id)) {
//     res.sendStatus(404);
//   } else
//   if(isNaN(req.params.id)) {
//     res.sendStatus(400);
//   }else {
//     try{
//       const user = await User.findByPk(req.params.id);
//       await user.destroy();
//       // console.log('in the try after the await fired')
//       res.sendStatus(204);
//       // console.log('in the try after the res.sendStatus fired')
//       res.redirect('/');
//       // console.log('in the try after the res.redirect fired')
//       res.end();
//     }
//     catch(e){
//       // console.log('in the catch before the next fired')
//       next(e);
//       // console.log('in the catch after the next fired')
//     }
//   }
// })

// router.post('/', async(req, res, next)=> {
//   //if({the name is already taken})
//     // res.sendStatus(401);
//   try{
//     res.sendStatus(201);
//   }
//   catch(e){
//     next(e);
//   }
// })

// router.put('/:id', async(req, res, next)=> {
//   try{
//     res.sendStatus(200);
//   }
//   catch(e){
//     next(e);
//   }
// })

module.exports = router;