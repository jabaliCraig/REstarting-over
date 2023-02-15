import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AddStudent from './AddStudent';
import Button from './Button';

const Students = () => {
	const [studentList, setStudentList] = useState([]);

	useEffect(()=> {
		const fetchStudents = async()=> {
		  const studentAxiosRes = await axios.get('/api/students');
			setStudentList(studentAxiosRes.data);
		}
		fetchStudents();
	}, []);
	//functions will be declared here to:
	//add a student
	const addStudent = (student)=> {
		axios.post('/students', student)//this is one of the many places I might need to play with the syntax...`/studentSINGULAR` instead of `/students`, `{ student }` instead of `student`... who knows what else...
		.then(function (response) {
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		});
		setStudentList([...studentList, student])
	}
	//edit a student
	const editStudent = (student)=> {
		console.log('A student has been edited from: ', student);
		//stuff happens
		console.log('to: ', student)
	}
  //delete a student
	const deleteStudent = (student)=> {
		console.log('A student has been deleted from: ', student);
		//stuff happens
	}
  //set local state to a Boolean determining whether or not the ADD form appears
	const [showAdd, setShowAdd] = useState(false);
  //JSX should render...
  return (
    <div>
			{/*...a button that will toggle the add menu */}
			<Button 
			  textColor={showAdd ? 'silver' : 'black'}
				backColor={showAdd ? 'black' : 'silver'}
				text={showAdd ? 'Hide Add Menu' : 'Add a Student'}
				onClick={()=> setShowAdd(!showAdd)} />
			{/*...the add menu IF the state is set to true */}
			{showAdd && <AddStudent onAdd={addStudent}/>}
			{/*...some pre-CSS spacing that I'll hopefully remember to take away later */}
			<div className='pre-CSS-spacer'>
				<p></p>
			</div>	
			{/*...and a list of all the students as links to their individual pages */}
      {studentList.map(student=>{
        return (
          <div 
					  className='student-on-list' 
						key={student.id}
					>
						<Link 
						  to={`/students/${student.id}`}
					  >
							{student.firstName} {student.lastName}
						</Link>
						<Button 
							text={'Update Student'}
							onClick={editStudent} 
							textColor={'black'}
							backColor={'silver'}
						/>
						<Button 
							text={'X'}
							onClick={deleteStudent} 
							textColor={'ghostwhite'}
							backColor={'firebrick'}
						/>
          </div>
				)
      })}
    </div>
  )
};

export default Students