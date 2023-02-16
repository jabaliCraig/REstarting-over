const router = require('express').Router();
const { db, Campus, Student } = require('../db')
// const db = require('../db/db');
// const Campus = require('../db/models/Campus');

router.get('/', async(req, res, next) => {
  try{
    const campusList = await Campus.myFindAll();
		res.send(campusList);
  }
  catch(e){
    next(e);
  }
});

router.get('/:id', async(req, res, next) => {
  try{
    const thisCampus = await Campus.findOne({
			where: {
				id: req.params.id,
			},
			include: Student
		});
		console.log(thisCampus);
		res.send(thisCampus);
  }
  catch(e){
    next(e);
  }
});

module.exports = router