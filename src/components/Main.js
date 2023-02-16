import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import Nav from './Nav';
import Students from './Students';
import Campuses from './Campuses';
import SingleCampus from './SingleCampus';
import SingleStudent from './SingleStudent';
import axios from 'axios';


const Main = () => {
	// const [campusList, setCampusList] = useState([]);

	// useEffect(()=> {
	// 	const fetchCampuses = async()=> {
	// 		const campusAxiosRes = await axios.get('/api/Campuses');
	// 		setCampusList(campusAxiosRes.data);
	// 	}
	// 	fetchCampuses();
	// }, [])
	
  //functions will be declared here to:
	// //add a campus
	// const addCampus = (campus)=> {
	// 	console.log('A campus has been added: ', campus)
	// }

	// //edit a campus
	// const editCampus = (EVENT)=> {
	// 	console.log('An edit EVENT has been requested: ', campus);
	// 	//stuff happens
	// 	console.log('to: ', EVENT)
	// }

	// //delete a campus
	// const deleteCampus =  (EVENT)=> {
	// 	console.log('A delete EVENT has been requested: ', campus);
	// 	//
	// 	//stuff happens
	// }

  ////find an error someplace//console.log('troubleshoot log here');
  //JSX should return the whole app with routes and links and everything! ...🤞🏻
	return (
		<Router>
			<div className='app-container'>
				{/*The navbar comes above the routes because it should be on top of the page, no matter which page is showing*/}
				<Nav />
				<Routes>
					{/* <Route 
					  path='/campuses' 
						element={<Campuses 
						  list={campusList} 
							addCampus={addCampus} 
							editCampus={editCampus}
							deleteCampus={deleteCampus}
						/>} 
					/> */}
					<Route 
					  path='/campuses/*' 
						element={<Campuses />} 
					/>
					<Route 
					  path='/students/*' 
						element={<Students />} 
					/>
					{/* <Route 
					  path='/campuses/:id' 
						element={<SingleCampus 
						  campusList={campusList}
						/>} 
					/> */}
				</Routes>
			</div>
		</Router>
	);
};

export default Main;