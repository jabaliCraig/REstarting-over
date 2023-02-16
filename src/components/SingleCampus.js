//import magical stuff from magical land
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
//import my less magical stuff
import CampusEnrollment from './CampusEnrollment';

const SingleCampus = ({ list }) => {
	console.log('The list is:');
	console.log(list);

	const params = useParams();
	const index = Number(params.id)-1;

	console.log('This campus is:');
	console.log(list[index]);


	return (
		<div className='campus'>
			<div className='campus-top'>
				<img src={list[index].imageUrl} />
				<h1>{list[index].name}</h1>
			</div>
			<div className='campus-banner'>
			  <span>{list[index].address}</span><span>Enrollment: {list[index].students.length}</span>
			</div>
			<div className='info'>
				{list[index].description}
			</div>
			<CampusEnrollment campus={list[index]} students={list[index].students}/>
		</div>
	)
}

export default SingleCampus