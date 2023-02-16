//import magical stuff from magical land
import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
//import my less magical stuff
import SingleStudent from './SingleStudent';
import AddStudent from './AddStudent';
import Button from './Button';
// const db = require('../../server/db/db');//this line crashes the app

const Students = () => {
	//set the state to determine which students will be displayed
	const [studentList, setStudentList] = useState([]);
  //fetch all students from the database and set them as the state
	const fetchStudents = async()=> {
		const studentAxiosRes = await axios.get('/api/students');
		setStudentList(studentAxiosRes.data);
	}
  //run fetchStudents immediately upon loading
	useEffect(()=> {
		fetchStudents();
	}, []);
	//have other functions to:
	//add a student
	const addStudent = async (student)=> {console.log('addStudent function is running.  Whoopie....')}
	//edit a student
	const editStudent = (event)=> {
		console.log('An editing EVENT has been requested: ', event);
		//stuff happens
		console.log('to: ', event)
	}
  //delete a student
	const deleteStudent = (event)=> {
		console.log('A deleting EVENT has been requested: ', event);
		//stuff happens
	}
  //set local state to a Boolean determining whether or not the ADD form appears
	const [showAdd, setShowAdd] = useState(false);
  //JSX should render...
  return (
    <div>
			{/*...a button that will toggle the add menu */}
			<Button 
				text={showAdd ? 'Hide Add Menu' : 'Add a Student'}
				onClick={()=> setShowAdd(!showAdd)}
			  textColor={showAdd ? 'silver' : 'black'}
				backColor={showAdd ? 'black' : 'silver'}
			/>
			{/*...the add menu IF the state is set to true */}
			{showAdd && <AddStudent onAdd={addStudent}/>}
			{/*...some pre-CSS spacing that I'll hopefully remember to take away later */}
			<div className='pre-CSS-spacer'>
				<p></p>
			</div>
			<Routes>
			  <Route 
				  path='/:id' 
					element={<SingleStudent list={studentList} />} 
				/>
			</Routes>	
			<div className='pre-CSS-spacer'>
				<p></p>
			</div>
			<h3>All students enrolled in ACME schools:</h3>	
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
						<Link to={`/students/${student.id}`} >
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