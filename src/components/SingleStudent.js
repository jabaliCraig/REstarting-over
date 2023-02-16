import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SingleStudent = ({ list }) => {
	const params = useParams();
	const index = Number(params.id)-1;

	return (
		<div className='student-card'>
			<div className='card-top'>
				<img src={list[index].imageUrl} alt='A lovely image of our student'/>
				<h1>{list[index].firstName} {list[index].lastName}</h1>
			</div>
			<div className='card-banner'>
				<span>Campus: {list[index].campusId ? `${list[index].campusId}` : 'Please enroll this student at a campus to see their campus information.'}</span><span>GPA: {list[index].gpa}</span>
			</div>
			<div className='info'>
				{list[index].email}
			</div>
		</div>
	)
}

export default SingleStudent
