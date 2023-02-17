import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import Nav from './Nav';
import Students from './Students';
import Campuses from './Campuses';
import SingleCampus from './SingleCampus';
import SingleStudent from './SingleStudent';
import axios from 'axios';

//our main component will...
const Main = () => {
	//...prepare state for both campus and student lists
	const [campusList, setCampusList] = useState([]);
	const [studentList, setStudentList] = useState([]);
	//...set the state to the database data upon first loading page
	useEffect(()=> {
		const fetchCampuses = async()=> {
			const campusAxiosRes = await axios.get('/api/campuses');
			setCampusList(campusAxiosRes.data);
		}		
		const fetchStudents = async()=> {
			const studentAxiosRes = await axios.get('/api/students');
			setStudentList(studentAxiosRes.data);
		}
		fetchCampuses();
		fetchStudents();
	}, [])
	
  //functions will be declared here to:
	//add a campus
	const addCampus = async(campus)=> {
		// console.log('The addStudent function is running, and the student to be added is');
		console.log(campus);
		try{
			const newStudent = await axios.post('/campuses', campus);//...or something
			setCampusList([...campusList, campus]);
			// console.log('A student has been added: ', newStudent.config.data);
		}
		catch(err){
			console.log(err);
		}
	}
	//add a student
	const addStudent = async(student)=> {
		console.log('The addStudent function is running, and the student to be added is');
		console.log(student);
		try{
			await axios.post('/api/students', student);//...or something
			setStudentList([...studentList, student]);
			// console.log('A student has been added: ', newStudent.config.data);
		}
		catch(err){
			console.log(err);
		}
	}

	//edit a campus
	const editCampus = (EVENT)=> {
		console.log('An edit EVENT has been requested: ', EVENT);
		//stuff happens
		console.log('to: ', EVENT)
	}
	//edit a student
	const editStudent = (EVENT)=> {
		console.log('An edit EVENT has been requested: ', EVENT);
		//stuff happens
		console.log('to: ', EVENT)
	}





	//delete a campus
	const deleteCampus = async(id)=> {
		console.log('We shall attempt to delete the campuse whose id is:');
		console.log(id);
		await axios.delete(`/api/campuses/${id}`);
		console.log('A campus has been deleted.');
		setCampusList(campusList.filter(campus=> campus.id !== id));
	}

	//delete a student
	const deleteStudent = async(id)=> {
		await axios.delete(`/api/students/${id}`)
		console.log('A student has been deleted.');
		setStudentList(studentList.filter(student=> student.id !== id));
	}





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
							onDelete={deleteCampus}
						/>} 
					/>
					<Route 
					  path='/students' 
						element={<Students 
						  list={studentList} 
							onAdd={addStudent} 
							editStudent={editStudent}
							onDelete={deleteStudent}
						/>} 
					/>
					<Route 
					  path='/campuses/:id' 
						element={<SingleCampus 
						  list={campusList}
						/>} 
					/>
					<Route 
					  path='/students/:id' 
						element={<SingleStudent 
						  list={studentList}
						/>} 
					/>
				</Routes>
			</div>
		</Router>
	);
};

export default Main;

/*
//PASTE DUMP
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
			<Routes>
			  <Route 
				  path='/:id' 
					element={<SingleStudent list={studentList}/>} 
				/>
			</Routes>	
			<div className='pre-CSS-spacer'>
				<p></p>
			</div>
			<h3>All students enrolled in ACME schools:</h3>	
*/