const router = require('express').Router();

const db = require('../db/db');
const Student = require('../db/models/Student');

router.get('/', async(req, res, next)=> {
	try{
		const studentList = await Student.findAll();
		res.send(studentList);
	}
	catch(err){
		next(e);
	}
});

router.get('/:id', async(req, res, next) => {
  try{
    const thisStudent = await Student.findByPk(req.params.id);
		console.log(thisStudent);
		res.send(thisStudent);
  }
  catch(e){
    next(e);
  }
});

module.exports = router