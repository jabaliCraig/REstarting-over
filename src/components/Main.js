import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Students from './Students';
import Campuses from './Campuses';
import SingleCampus from './SingleCampus';
import SingleStudent from './SingleStudent';
import axios from 'axios';

const dummyC = [
    {
        id: 1,
        name: 'Hogwarts™ Castle',
        address: '71043 LEGO Set Blvd.',
        description: "Make the magic come alive at the LEGO® Harry Potter™ 71043 Hogwarts™ Castle! This highly detailed LEGO Harry Potter collectible has over 6,000 pieces and offers a rewarding build experience. It comes packed with highlights from the Harry Potter series, where you will discover towers, turrets, chambers, classrooms, creatures, the Whomping Willow™ and Hagrid´s hut, plus many more iconic features. And with 4 minifigures, 27 microfigures featuring students, professors and statues, plus 5 Dementors, this advanced building set makes the perfect Harry Potter gift.",
        imageUrl: 'https://img.brickowl.com/files/image_cache/large/lego-hogwarts-castle-set-71043-15.jpg',
    },
    {
        id: 2,
        name: 'Death Star™',
        address: '75159 LEGO Hwy.',
        description: "Reenact amazing scenes from the Star Wars saga with the Empire’s ultimate planet-zapping weapon—the Death Star! With over 4,000 pieces, this fantastic model has a galaxy of intricate and authentic environments, including a superlaser control room, Imperial conference chamber, hangar bay with moving launch rack and Lord Vader’s TIE Advanced with space for Vader inside, Emperor Palpatine’s throne room, Droid maintenance room, detention block, trash compactor, tractor beam, cargo area, turbo laser with spring-loaded shooters and seats for the 2 Death Star Gunners, and 2 movable turbo laser towers. This fantastic set also includes 23 iconic minifigures and 2 Droids to ensure hours of Star Wars battle fun.",
        imageUrl: 'https://img.brickowl.com/files/image_cache/large/lego-death-star-set-75159-15.jpg',
    }
];
const dummyS = [
    {
        id: 1,
				firstName: 'Godric',
        lastName: 'Gryffindor',
        email: 'lion@hogwarts.og',
        imageUrl: 'https://img.brickowl.com/files/image_cache/medium/lego-godric-gryffindor-minifigure-28.jpg',
        gpa: 3.2,
        campusId: 1,
    },
    {
        id: 2,
				firstName: 'Helga',
        lastName: 'Hufflepuff',
        email: 'badger@hogwarts.og',
        imageUrl: 'https://img.brickowl.com/files/image_cache/medium/lego-helga-hufflepuff-minifigure-25.jpg',
        gpa: 3.7,
        campusId: 1,
      },
      {
        id: 3,
				firstName: 'C-',
        lastName: '3PO',
        email: 'c-3po@droid.protocol',
        imageUrl: 'https://img.brickowl.com/files/image_cache/medium/lego-c-3po-protocol-droid-with-leg-wire-decoration-minifigure-25.jpg',
        gpa: 5.0,
        campusId: 2,
      },
      {
        id: 4,
				firstName: 'Darth',
        lastName: 'Vader',
        email: 'vader@sith.lord',
        imageUrl: 'https://img.brickowl.com/files/image_cache/medium/lego-darth-vader-minifigure-784731-25.jpg',
        gpa: 0,
        campusId: 2,
      }
];
/* 
    This is you entry point for your routes
*/
const Main = () => {
	const [campusList, setCampusList] = useState([]);
	const [studentList, setStudentList] = useState([]);

	useEffect(()=> {
		const fetchStudents = async()=> {
		  const studentAxiosRes = await axios.get('/api/students');
			console.log('The studentAxiosRes array is', studentAxiosRes.data);
			setStudentList(studentAxiosRes.data);
		}
		const fetchCampuses = async()=> {
			const campusAxiosRes = await axios.get('/api/Campuses');
			console.log('The campusAxiosRes array is', campusAxiosRes.data);
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
  //find an error someplace
	// console.log('troubleshoot log here');
  //JSX should return the whole app with routes and links and everything! ...🤞🏻
	return (
		<Router>
			<div className='app-container'>
				{/*The navbar comes above the routes because it should be on top of the page, no matter which page is showing*/}
				<Nav />
				<Routes>
					<Route path='/campuses' element={<Campuses list={campusList} addCampus={addCampus} />} />
					<Route path='/students' element={<Students list={studentList} addStudent={addStudent} />} />
					<Route path='/campuses/:id' element={<SingleCampus campus={campusList[1]}/>} />
					<Route path='/students/:id' element={<SingleStudent student={studentList[1]}/>} />
				</Routes>
			</div>
		</Router>
	);
};

export default Main;