//import magical stuff from magical land
import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
//import my less magical stuff
import SingleCampus from './SingleCampus';
import AddCampus from './AddCampus';
import Button from './Button';
// const db = require('../../server/db/db');//this line crashes the app

const Campuses = () => {
	//set the state to determine which students will be displayed
	const [campusList, setCampusList] = useState([]);
  //fetch all campuses from the database and set them as the state
	const fetchCampuses = async()=> {
		const campusAxiosRes = await axios.get('/api/campuses');
		setCampusList(campusAxiosRes.data);
	}
  //run fetchCampuses immediately upon loading
	useEffect(()=> {
		fetchCampuses();
	}, []);
	//have other functions to:
	//add a campus
	const addCampus = async (campus)=> {console.log('addCampus function is running.  Whoopie....')}
	//edit a campus
	const editCampus = (event)=> {
		console.log('An editing EVENT has been requested: ', event);
		//stuff happens
		console.log('to: ', event)
	}
  //delete a campus
	const deleteCampus = (event)=> {
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
				text={showAdd ? 'Hide Add Menu' : 'Add a Campus'}
				onClick={()=> setShowAdd(!showAdd)} 
				textColor={showAdd ? 'silver' : 'black'}
				backColor={showAdd ? 'black' : 'silver'}
			/>
			{/*...the add menu IF the state is set to true */}
			{showAdd && <AddCampus onAdd={addCampus}/>}
			{/*...some pre-CSS spacing that I'll hopefully remember to take away later */}
			<div className='pre-CSS-spacer'>
				<p></p>
			</div>
			<Routes>
				<Route
					path='/:id'
					element={<SingleCampus list={campusList} />}
				/>	
			</Routes>	
			<div className='pre-CSS-spacer'>
				<p></p>
			</div>
			<h3>All ACME school campuses:</h3>
			<div className='pre-CSS-spacer'>
				<p></p>
			</div>		
			{/*...and a list of all the campuses as links to their individual pages */}
      {campusList.map(campus=>{
        return (
          <div 
						className='campus-on-list' 
						key={campus.id}
					>
            <img 
						  className='campus-list-img' 
							src={campus.imageUrl} 
							alt='A lovely picture of the campus: '
							style={{maxHeight: 99}}
						>
						</img>
						<Link to={`/campuses/${campus.id}`} >
								<h1>{campus.name}</h1>
						</Link>
						<Button 
							text={'Update Campus'}
							onClick={editCampus} 
							textColor={'black'}
							backColor={'silver'}
						/>
						<Button 
							text={'X'}
							onClick={deleteCampus} 
							textColor={'ghostwhite'}
							backColor={'firebrick'}
						/>
          </div>
        )
      })}
    </div>
  )
};

export default Campuses