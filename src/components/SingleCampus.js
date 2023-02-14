import React from 'react';
import CampusEnrollment from './CampusEnrollment';

const SingleCampus = ({ campus }) => {
	return (
		<div className='campus'>
			<div className='campus-top'>
				<img src={campus.imageUrl} />
				<h1>{campus.name}</h1>
			</div>
			<div className='campus-banner'>
			  <span>{campus.address}</span><span>Enrollment: [insert number here]</span>
			</div>
			<div className='info'>
				{campus.description}
			</div>
			{/*<CampusEnrollment />*/}
		</div>
	)
}

export default SingleCampus