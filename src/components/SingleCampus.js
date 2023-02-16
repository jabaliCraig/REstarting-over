import React from 'react';
import { useParams } from "react-router-dom";
import CampusEnrollment from './CampusEnrollment';

const SingleCampus = ({ list }) => {
  // console.log(list)
	// console.log(list.filter(campus => campus.id === Number(useParams().id))[0])

	const campus = list.filter(campus => campus.id === Number(useParams().id))[0];


	return (
		<div className='campus'>Hi there!
			<div className='campus-top'>
				<img src={campus.imageUrl} />
				<h1>{campus.name}</h1>
			</div>
			<div className='campus-banner'>
			  <span>{campus.address}</span><span>Enrollment: {campus.students.length}</span>
			</div>
			<div className='info'>
				{campus.description}
			</div>
			<CampusEnrollment campus={campus} students={campus.students}/>
		</div>
	)
}

export default SingleCampus