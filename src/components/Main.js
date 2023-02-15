import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Students from './Students';
import Campuses from './Campuses';
import SingleCampus from './SingleCampus';
import SingleStudent from './SingleStudent';
import axios from 'axios';

/* 
    This is you entry point for your routes
*/
const Main = () => {
	const [campusList, setCampusList] = useState([]);
	const [studentList, setStudentList] = useState([]);

	useEffect(()=> {
		const fetchStudents = async()=> {
		  const studentAxiosRes = await axios.get('/api/students');
			setStudentList(studentAxiosRes.data);
		}
		const fetchCampuses = async()=> {
			const campusAxiosRes = await axios.get('/api/Campuses');
			setCampusList(campusAxiosRes.data);
		}
		fetchCampuses();
		fetchStudents();
	}, [])
	
  //functions will be declared here to:
	//add a campus
	const addCampus = (campus)=> {
		console.log('A campus has been added: ', campus)
	}
  //add a student
	const addStudent = (student)=> {
		console.log('A student has been added: ', student)
	}
	//edit a campus
	const editCampus = (campus)=> {
		console.log('A campus has been edited: ', campus);
		//stuff happens
		console.log('to: ', campus)
	}
  //edit a student
	const editStudent = (student)=> {
		console.log('A student has been edited from: ', student);
		//stuff happens
		console.log('to: ', student)
	}
	//delete a campus
	const deleteCampus = (campus)=> {
		console.log('A campus has been deleteed: ', campus);
		//stuff happens
	}
  //delete a student
	const deleteStudent = (student)=> {
		console.log('A student has been deleteed from: ', student);
		//stuff happens
	}
  ////find an error someplace//console.log('troubleshoot log here');
  //JSX should return the whole app with routes and links and everything! ...🤞🏻
	return (
		<Router>
			<div className='app-container'>
				{/*The navbar comes above the routes because it should be on top of the page, no matter which page is showing*/}
				<Nav />
				<Routes>
					<Route 
					  path='/campuses' 
						element={<Campuses 
						  list={campusList} 
							addCampus={addCampus} 
							editCampus={editCampus}
							deleteCampus={deleteCampus}
						/>} 
					/>
					<Route 
					  path='/students' 
						element={<Students 
						  list={studentList} 
							addStudent={addStudent} 
							editStudent={editStudent}
							deleteStudent={deleteStudent} 
						/>} 
					/>
					<Route 
					  path='/campuses/:id' 
						element={<SingleCampus 
						  campusList={campusList}
						/>} 
					/>
					<Route 
					  path='/students/:id' 
						element={<SingleStudent 
						  studentList={studentList}
						/>} 
					/>
				</Routes>
			</div>
		</Router>
	);
};

export default Main;