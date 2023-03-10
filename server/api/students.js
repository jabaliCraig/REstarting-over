//import magic from Magic Land
const router = require('express').Router();
//import trash from Craig
const { Campus, Student } = require('../db')

//TIME TO CRUD!!!
//🌟C🌟reate:
router.post('/', async (req, res) => {
	let { firstName, lastName, email, gpa, imageUrl } = req.body;
  Student.create({
		email,
    firstName,
		gpa,
		imageUrl,
		lastName,
    })
		  .then(student => res.redirect('/students'))
			.catch(err => res.render('error', {error:err.message}))
});

//🌟R🌟ead:
//(collectively)
router.get('/', async(req, res, next)=> {
	try{
		const studentList = await Student.myFindAll();//`myFindAll` is defined in ../db/index.js
		res.send(studentList);
	}
	catch(err){
		next(e);
	}
});
//(individually)
router.get('/:id', async(req, res, next) => {
  try{
    const thisStudent = await Student.findOne({
			where: {
				id: req.params.id,
			},
			include: Campus
		});
		res.send(thisStudent);
  }
  catch(e){
    next(e);
  }
});


//🌟U🌟pdate:
// PUT /api/todos/:id
router.put('/:id', async (req, res, next) => {
  try {
    const upStudent = await Student.findByPk(req.params.id);
    res.send(await upStudent.update(req.body));
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
	//assign Felicia as the student to be deleted.  Bye, Felicia!
	const Felicia = await Student.findByPk(id);
  try {
    await Felicia.destroy();
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

module.exports = router