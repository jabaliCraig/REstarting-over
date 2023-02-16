import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const SingleStudent = ({ list }) => {
	console.log('The list is:');
	console.log(list);

	const params = useParams();
	const index = Number(params.id)-1;

	console.log('This student is:');
	console.log(list[index]);

	return (
		<div className='student-card'>
			<div className='card-top'>
				<img src={list[index].imageUrl} alt='A lovely image of our student'/>
				<h1>{list[index].firstName} {list[index].lastName}</h1>
			</div>
			<div className='card-banner'>
				<span>Campus: {list[index].campusId===null ? 
				  'Please enroll this student at a campus to see their campus information.' :
					<Link to={`/campuses/${list[index].campusId}`}>
						{list[index].campus.name}
					</Link>
					}				
				</span>
				<span>GPA: {list[index].gpa}</span>
			</div>
			<div className='info'>
				{list[index].email}
			</div>
		</div>
	)
}

export default SingleStudent
