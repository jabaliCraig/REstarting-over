import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const SingleStudent = ({ list }) => {
	// console.log('The list is:');
	// console.log(list);

	// const { id } = useParams();
  // const index = Number(id)-1;

	// console.log('This student is:');
	// console.log(list[index]);

	const student = list.filter(student => student.id === Number(useParams().id))[0];


	return (
		<div className='student-card'>
			<div className='card-top'>
				<img src={student.imageUrl} alt='A lovely image of our student'/>
				<h1>{student.firstName} {student.lastName}</h1>
			</div>
			<div className='card-banner'>
				<span>Campus: {student.campusId===null ? 
				  'Please enroll this student at a campus to see their campus information.' :
					<Link to={`/campuses/${student.campusId}`}>
						{student.campus.name}
					</Link>
					}				
				</span>
				<span>GPA: {student.gpa}</span>
			</div>
			<div className='info'>
				{student.email}
			</div>
		</div>
	)
}

export default SingleStudent
