//import magic from Magic Land
const router = require('express').Router();
//import trash from Craig
const { Campus, Student } = require('../db')

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
		res.send(thisCampus);
  }
  catch(e){
    next(e);
  }
});

//
router.post('/', async (req, res, next) => {
  try {
		const newStudent = await Student.create(req.body);
    res.status(201).send(newStudent);
  } catch (error) {
    next(error);
  }
});

// PUT /api/todos/:id
router.put('/:id', async (req, res, next) => {
  try {
    const todo = await Todo.findByPk(req.params.id);
    res.send(await todo.update(req.body));
  } catch (error) {
    next(error);
  }
});

// DELETE /api/students/:id
router.delete('/:id', async (req, res, next) => {
	const { id } = req.params;
	if(isNaN(Number(id))){
		res.sendStatus(400);
		return
	}
	//Felicia is the student to be deleted.  Bye, Felicia!
	const Felicia = await Student.findByPk(id);
  try {
    await Felicia.destroy();
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});
module.exports = router