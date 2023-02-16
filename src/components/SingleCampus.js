import React from 'react';
import { useParams } from "react-router-dom";
import CampusEnrollment from './CampusEnrollment';

const SingleCampus = ({ campusList }) => {
	console.log('The list is:');
	console.log(campusList);

	
	const { id } = useParams();
	const ref = Number(id)-1;

	console.log('This campus is:');
	console.log(campusList[ref]);


	return (
		<div className='campus'>
			<div className='campus-top'>
				<img src={campusList[ref].imageUrl} />
				<h1>{campusList[ref].name}</h1>
			</div>
			<div className='campus-banner'>
			  <span>{campusList[ref].address}</span><span>Enrollment: {campusList[ref].students.length}</span>
			</div>
			<div className='info'>
				{campusList[ref].description}
			</div>
			<CampusEnrollment campus={campusList[ref]} students={campusList[ref].students}/>
		</div>
	)
}

export default SingleCampus