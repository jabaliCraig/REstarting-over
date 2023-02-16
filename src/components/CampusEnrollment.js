import React from 'react';
import { Link } from 'react-router-dom';
import Students from './Students';

const CampusEnrollment = ({ campus, students }) => {
	console.log('This campus is');
	console.log(campus);
	console.log('The students is');
	console.log(students);
	return (
		<div>
			{students.length===0 ?
			  `Please enroll students at ${campus.name} to see their information here.` :
				<div className='students-list' >	
					{students.map((student)=> {
						return(
							<ul>
								<li key={student.id}>
									<Link to={`/students/${student.id}`}>
										{student.firstName} {student.lastName}
									</Link>
								</li>
							</ul>
						)
					})}
				</div>
			}
		</div>
	)
}

export default CampusEnrollment
