//import magic from Magic Land
const router = require('express').Router();
//import trash from Craig
const { Campus, Student } = require('../db')

//TIME TO CRUD!!!
//🌟C🌟reate:
router.post('/', async (req, res, next) => {
	try {
		const newCampus = await Campus.create({
			where: {
				name: req.body.name,
				address: req.body.address,
				description: req.body.description,
				imageUrl: req.body.imageUrl
			}
		});
		res.status(201).send(newCampus);
	} catch (error) {
		next(error);
	}
});

//🌟R🌟ead:
//(collectively)
router.get('/', async(req, res, next) => {
  try{
    const campusList = await Campus.myFindAll();//`myFindAll` is defined in ../db/index.js
		res.send(campusList);
  }
  catch(e){
    next(e);
  }
});
//(individually)
router.get('/:id', async(req, res, next) => {
  try{
    const thisCampus = await Campus.findOne({
			where: {
				id: req.params.id,
			},
			include: Student
		});
		res.send(thisCampus);
  }
  catch(e){
    next(e);
  }
});

//🌟U🌟pdate:
router.put('/edit/:id', async (req, res, next) => {
	try {
		const campus = await Campus.findByPk(req.params.id);
		res.send(await campus.update(req.body));
	} catch (error) {
		next(error);
	}
});

//🌟D🌟emolish:
router.delete('/:id', async (req, res, next) => {
	const { id } = req.params;
	if(isNaN(Number(id))){
		res.sendStatus(400);
		return
	}
	//assign Felicia as the campus to be deleted.  Bye, Felicia!
	const Felicia = await Campus.findByPk(id);
	try {
		await Felicia.destroy();
		res.sendStatus(204);
	} catch (error) {
		next(error);
	}
});

module.exports = router