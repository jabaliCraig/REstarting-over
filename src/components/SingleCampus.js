import React from 'react';
import { useParams } from "react-router-dom";
import CampusEnrollment from './CampusEnrollment';

const SingleCampus = ({ campusList }) => {
	const { id } = useParams();
	const ref = Number(id)-1;
  // console.log(campusList, ref, campusList[ref])//for testing purposes ONLY
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