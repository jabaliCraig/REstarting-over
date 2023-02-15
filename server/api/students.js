const router = require('express').Router();

const db = require('../db/db');
const Student = require('../db/models/Student');
//routes for...
//get requests needing ALL students
router.get('/', async(req, res, next)=> {
	try{
		const studentList = await Student.findAll();
		res.send(studentList);
	}
	catch(err){
		next(e);
	}
});
//get requests needing ONE student
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
//
router.post('/students', async (req, res, next) => {
  try {
    res.status(201).send(await Student.create(req.body));
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

// DELETE /api/todos/:id
router.delete('/:id', async (req, res, next) => {
  try {
    const todo = await Todo.findByPk(req.params.id);
    await todo.destroy();
    res.send(todo);
  } catch (error) {
    next(error);
  }
});

module.exports = router