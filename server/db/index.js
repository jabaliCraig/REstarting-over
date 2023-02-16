const db = require('./db');
const Campus = require('./models/Campus');
const Student = require('./models/Student');

Campus.hasMany(Student);
Student.belongsTo(Campus);


Student.findUnassigned = async()=> {
	const students = await Student.findAll({
		where:{
			campusId: null,
		}
	});
	// console.log(students[0].firstName)
	return students
}

Campus.myFindAll = async()=> {
  const campuses = await Campus.findAll({
		include: Student
	})
	// for(let i = 0; i < campuses.length; i++){
	// 	for(let j = 0; j < campuses[i].students.length; j++){
	//     console.log(campuses[i].name, campuses[i].students[j].firstName);
	// 	}
	// }
	// console.log(campuses)
	return campuses;
}

Student.myFindAll = async()=> {
  const students = await Student.findAll({
		include: Campus
	})
	// for(let i = 0; i < students.length; i++){
	//   console.log(students[i].firstName, students[i].campus.name);
	// }
	return students;
}

// Student.findUnassigned()
// Student.myFindAll()
// Campus.myFindAll()

module.exports = {
	db,
	Campus,
	Student
}