import React from 'react';
import { useParams } from "react-router-dom";
import CampusEnrollment from './CampusEnrollment';

const SingleCampus = ({ campusList }) => {
	const { id } = useParams();
	const ref = Number(id)-1;
  console.log(campusList, ref, campusList[ref])
	return (
		<div className='campus'>
			<div className='campus-top'>
				<img src={campusList[ref].imageUrl} />
				<h1>{campusList[ref].name}</h1>
			</div>
			<div className='campus-banner'>
			  <span>{campusList[ref].address}</span><span>Enrollment: [insert number here]</span>
			</div>
			<div className='info'>
				{campusList[ref].description}
			</div>
			{/*<CampusEnrollment />*/}
		</div>
	)
}

export default SingleCampus