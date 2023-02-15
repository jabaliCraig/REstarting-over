import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SingleStudent = ({ studentList }) => {
	const { id } = useParams();
	const ref = Number(id)-1;

	return (
		<div className='student-card'>
			<div className='card-top'>
				<img src={studentList[ref].imageUrl} alt='A lovely image of our student'/>
				<h1>{studentList[ref].firstName} {studentList[ref].lastName}</h1>
			</div>
			<div className='card-banner'>
				<span>Campus: {studentList[ref].campusId ? `${studentList[ref].campusId}` : 'Please enroll this student at a campus to see their campus information.'}</span><span>GPA: {studentList[ref].gpa}</span>
			</div>
			<div className='info'>
				{studentList[ref].email}
			</div>
		</div>
	)
}

export default SingleStudent
