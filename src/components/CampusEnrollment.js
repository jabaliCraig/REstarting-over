//import from outta space
import React from 'react';
import { Link } from 'react-router-dom';
//import from Craig
import Students from './Students';
import Button from './Button';

const CampusEnrollment = ({ campus, onRemove }) => {
	return (
		<div>
			{campus.students.length===0 ?
			  <span style={{fontWeight: 'bold'}}> Please enroll students at ${campus.name} to see their information here. </span> 
			  :
				<div className='students-list' >	
					<ul>
						{campus.students.map((student)=> {
							return(
								<li key={student.id}>
									<Link to={`/students/${student.id}`}>
										{student.firstName} {student.lastName}
									</Link>
									<span> </span>
									<Button 
										text='Disenroll student from this campus'
										onClick={()=> onRemove(student.id)}
										textColor='firebrick'
										backColor='ghostwhite'
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
