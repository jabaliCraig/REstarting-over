const db = require('./db');
const Campus = require('./models/Campus');
const Student = require('./models/Student');

Campus.hasMany(Student);
Student.belongsTo(Campus);

Campus.myFindAll = async()=> {
	const campuses = await Campus.findAll({
		include: Student
	})
	return campuses;
}

// Campus.findVacant = async()=> {
// 	//look through the students and return any CAMPUS whose id does not show up in the students
// }

Student.myFindAll = async()=> {
	const students = await Student.findAll({
	  include: Campus
	})
	return students;
}

Student.findUnassigned = async()=> {
	const students = await Student.findAll({
		where:{
			campusId: null,
		}
	});
	return students
}
			
module.exports = {
	db,
	Campus,
	Student
}