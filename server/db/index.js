const db = require('./db');
const Campus = require('./models/Campus');
const Student = require('./models/Student');

Campus.hasMany(Student);
Student.belongsTo(Campus);

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

Campus.getEnrollment = async(id)=> {
	// const campus = await Campus.findAll({
	// 	where: {
	// 		id: id,
	// 	},
	// 	include: Student
	// })
	// console.log(campus)
	//look through the students and return the number of STUDENTS whose campusId match the given campus... I feel like this is probably an instance method??? or maybe find ALL the enrollments and decide which ones to publish? inefficient, sure -- but inefficiently possible is better than efficiently impossible ---OR--- have an id parameter????? and then findByPk WITH an include, then return students.length???
}

Campus.findVacant = async()=> {
	//look through the students and return any CAMPUS whose id does not show up in the students
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

Student.findUnassigned = async()=> {
	const students = await Student.findAll({
		where:{
			campusId: null,
		}
	});
	// console.log(students[0].firstName)
	return students
}

// Student.findUnassigned()
// Student.myFindAll()
// Campus.myFindAll()
Campus.getEnrollment(1)
			
module.exports = {
	db,
	Campus,
	Student
}