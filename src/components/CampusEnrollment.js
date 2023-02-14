import React from 'react';
import Students from './Students';

const CampusEnrollment = ({ students }) => {
	return (
		<div>
			{students.length ? <Students list={students} /> : `Please enroll students at ${campus.name} to see their information here.`}
		</div>
	)
}

export default CampusEnrollment
