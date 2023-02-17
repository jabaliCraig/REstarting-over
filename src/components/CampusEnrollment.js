import React from 'react';
import { Link } from 'react-router-dom';
//import Craig from Craig
import Students from './Students';
import Button from './Button';

const CampusEnrollment = ({ campus, students, onRemove }) => {
	// console.log('This campus is');
	// console.log(campus);
	// console.log('The students are');
	// console.log(students);
	return (
		<div>
			{students.length===0 ?
			  `Please enroll students at ${campus.name} to see their information here.` :
				<div className='students-list' >	
						<ul>
					{students.map((student)=> {
						return(
								<li key={student.id}>
									<Link to={`/students/${student.id}`}>
										{student.firstName} {student.lastName}
									</Link>
									<span> </span>
									<Button 
									  text='AWAY WITH YOU!'
										onClick={()=> onRemove(student.id)}
									/>
								</li>
						)
					})}
					</ul>
				</div>
			}
		</div>
	)
}

export default CampusEnrollment
