//import magic from The Great Beyond
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import axios from 'axios';
//import garbage from Craig
import Nav from './Nav';
import Campuses from './Campuses';
import Students from './Students';
import SingleCampus from './SingleCampus';
import SingleStudent from './SingleStudent';
import Landing from './Landing';

//our main component will...
const Main = () => {
	//...prepare state for both campus and student lists
	const [campusList, setCampusList] = useState([]);
	const [studentList, setStudentList] = useState([]);
	//...set the state to the database data upon first loading page
	useEffect(()=> {
		fetchAndSetCampuses();
		fetchAndSetStudents();
	}, [])
	
  //Time for a bunch of CRUD!
  //🌟C🌟reate:
	const addCampus = async(campus)=> {
		try{
			//Here's the BRAIN-BUSTER:
			const newCampus = await axios.post('/campuses', campus);//...or something... The problem is that if I console log newCampus, it's just a bunch of mush. I can see the data when I console log `newCampus.config.data`, but it's in a form I don't know how do get to. And it definitely doesn't update the database.🧠💥💨
			setCampusList([...campusList, campus]);
		}
		catch(err){
			console.log(err);
		}
	}
	const addStudent = async(student)=> {
		// SEE NOTES ON `addCampus` ABOVE
		try{
			const newStudent = await axios.post('/students', student);
			setStudentList([...studentList, student]);
		}
		catch(err){
			console.log(err);
		}
	}

	//🌟R🌟ead:
	const fetchAndSetCampuses = async()=> {
		const campusAxiosRes = await axios.get('/api/campuses');
		setCampusList(campusAxiosRes.data);
	}
	const fetchAndSetStudents = async()=> {
		const studentAxiosRes = await axios.get('/api/students');
		setStudentList(studentAxiosRes.data);
	}
	
  //🌟U🌟pdate:
	const editCampus = (id)=> {
		console.log('You would like to edit the event to be: ', id);
		console.log('TOO BAD, SUCKA!!!!!')
	}
	const editStudent = (input)=> {
		console.log('You would like to edit the event to be ', input);
		console.log('TOO BAD, SUCKA!!!!!')
	}
	//disenroll student from campus
	const disenroll = (id)=> {
		console.log('Pretend we did something so that the student with this id is no longer at this campus:', id)
	}

	//🌟D🌟emolerize!:
	const deleteCampus = async(id)=> {
		await axios.delete(`/api/campuses/${id}`);
		console.log('A campus has been deleted.');
		fetchAndSetCampuses();
		fetchAndSetStudents();
	}
	const deleteStudent = async(id)=> {
		await axios.delete(`/api/students/${id}`)
		console.log('A student has been deleted.');
		fetchAndSetCampuses();
		fetchAndSetStudents();
	}

  //JSX should return the whole app with routes and links and everything! ...🤞🏻
	return (
		<Router>
			<div className='app-container'>
				<Nav />
				{/*The navbar comes above the routes because it should be on top of the page, no matter which page is showing*/}
				<Routes>
					<Route 
					  path='/' 
						element={<Landing />} 
					/>
					<Route 
					  path='/campuses' 
						element={<Campuses 
						  list={campusList} 
							onAdd={addCampus} 
							onDelete={deleteCampus}
						/>} 
					/>
					<Route 
					  path='/students' 
						element={<Students 
						  list={studentList} 
							onAdd={addStudent} 
							// onDelete={deleteStudent} > SEE NOTE IN 'SingleStudent.js'
						/>} 
					/>
					<Route 
					  path='/campuses/:id' 
						element={<SingleCampus 
						  list={campusList}
							onDelete={deleteCampus}
							onEdit={editCampus}
							onRemove={disenroll}
						/>} 
					/>
					<Route 
					  path='/students/:id' 
						element={<SingleStudent 
						  list={studentList}
							onDelete={deleteStudent}
							onEdit={editStudent}
						/>} 
					/>
				</Routes>
			</div>
		</Router>
	);
};

export default Main;
