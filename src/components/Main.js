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
	//...have some sort functions to display the data in a particular way (#LIFEGOALS: get this function to sort the opposite way if it's been called once before)...I TRIED to do it, but failed.
	//(for campuses)
	const sortCampusName = ()=> setCampusList(campusList.sort((a, b)=> a.name.localeCompare(b.name)));
	const sortEnroll = ()=> setCampusList(campusList.sort((a, b)=> b.students.length - a.students.length));
	//(for students)
	const sortFName = ()=> setStudentList(studentList.sort((a, b)=> a.firstName.localeCompare(b.firstName)));
	const sortLName = ()=> setStudentList(studentList.sort((a, b)=> a.lastName.localeCompare(b.lastName)));
	const sortByCampus = ()=> setStudentList(studentList.sort((a, b)=> a.campus.name.localeCompare(b.campus.name)));
	const sortGPA = ()=> setStudentList(studentList.sort((a, b)=> b.gpa - a.gpa));

  //...declare a bunch of 🌟CRUD🌟!
  //🌟C🌟reate:
	const addCampus = async(campus)=> {
		try{
			//Here's the BRAIN-BUSTER:
			let newCampus = await axios.post('/api/campuses', campus)
			/*...or something like that. The problem is that I can't get this to update the database, no matter what I try.🧠💥💨
			BUT if it had updated the database, then obviously, I would run these next:		
			fetchAndSetCampuses();
			fetchAndSetStudents();
			Since it doesn't, I'll just use wizard magic to make it look like the object was added. That way, when you click on it, the entire app will crash.👍🏻*/
			setCampusList([...campusList, campus]);
		}
		catch(err){
			console.log(err);
		}
	}
	const addStudent = async(student)=> {
		// ⬆️SEE NOTES ON `addCampus` ABOVE⬆️
		try{
			const newStudent = await axios.post('/api/students', student);
			// fetchAndSetCampuses();
			// fetchAndSetStudents();
			setStudentList([...studentList, student])
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
	const editCampus = async (campus)=> {
		console.log('Could not successfully get any PUT functionality');		
		try{
			await axios.put(`/api/campuses/${campus.id}`, campus);
			}
			catch(err){
				console.log(err)
			}
			fetchAndSetCampuses();
			fetchAndSetStudents();
	}
	const editStudent = async (student)=> {
		console.log('Could not successfully get any PUT functionality');	
		try{
		await axios.put(`/api/students/${student.id}`, student);
		}
		catch(err){
			console.log(err)
		}
		fetchAndSetCampuses();
		fetchAndSetStudents();
	}
	//disenroll student from campus
	const disenroll = async (student)=> {
		console.log('Could not successfully get any PUT functionality');
		try{
			await axios.put(`/api/students/${student.id}`, student);
		}
		catch(err){
				console.log(err)
		}	
		fetchAndSetCampuses();
		fetchAndSetStudents();
	}

	//🌟D🌟elete:
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
							sortCampusName={sortCampusName}
							sortEnroll={sortEnroll}
						/>} 
					/>
					<Route 
					  path='/students' 
						element={<Students 
						  list={studentList} 
							onAdd={addStudent} 
							sortFName={sortFName}
							sortLName={sortLName}
							sortByCampus={sortByCampus}
							sortGPA={sortGPA}
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
