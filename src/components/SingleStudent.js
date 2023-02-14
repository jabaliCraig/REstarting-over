import React from 'react'

const SingleStudent = ({ student }) => {
	return (
		<div className='student-card'>
			<div className='card-top'>
				<img src={student.imageUrl} alt='A lovely image of our student'/>
				<h1>{student.firstName} {student.lastName}</h1>
			</div>
			<div className='card-banner'>
				<span>Campus: {student.campusId}</span><span>GPA: {student.gpa}</span>
			</div>
			<div className='info'>
				{student.email}
			</div>
		</div>
	)
}

export default SingleStudent
