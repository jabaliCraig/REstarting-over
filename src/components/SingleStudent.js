//import magic from outta space
import React, { useState } from 'react';
import { useParams, Link } from "react-router-dom";
//import garbage from Craig
import UpdateStudent from './UpdateStudent';
import Button from './Button';

//our component will...
const SingleStudent = ({ list, onDelete, onEdit }) => {
  //...declare THIS student as THE student, based on the url
	const student = list.filter(student => student.id === Number(useParams().id))[0];

	//...set local state to a Boolean determinging whether or not the UPDATE form appears
	const [showEdit, setShowEdit] = useState(false);

	//...then the JSX should render:
	return (
		<div>
			{/* a button that will toggle the add menu */}
			<Button 
				text={showEdit ? 'Hide Edit Menu' : "Edit this student's information"}
				onClick={()=> setShowEdit(!showEdit)} 
				textColor={showEdit ? 'silver' : 'black'}
				backColor={showEdit ? 'black' : 'silver'}
			/>
			{/* the update menu IF the state is set to true */}
			{showEdit && 
				<UpdateStudent
					student={student}
					onDelete={onDelete}
					onEdit={onEdit}
				/>}
			{/* some pre-CSS spacing that I'll hopefully remember to take away later */}
			<div className='pre-CSS-spacer'>
				<p></p>
			</div>	
			{/* all the details of this students*/}
			<div className='student-card'>
				<div className='card-top'>
					<img src={student.imageUrl} alt='A lovely image of our student'/>
					<h1>{student.firstName} {student.lastName}</h1>
				</div>
				<div className='info'>
					Email: <span style={{fontWeight: 'bold'}}>{student.email}</span>
					
				</div>
				<div className='pre-CSS-spacer'>
					<p></p>
				</div>	
				<div className='card-banner'>
					<span>Campus: {student.campusId===null ? 
						'Please enroll this student at a campus to see their campus information.' :
						<Link to={`/campuses/${student.campusId}`}>
							{student.campus.name}
						</Link>
						}				
					</span>
					<span> </span>GPA: {student.gpa}
				</div>
				{/*#LIFEGOALS: also add a delete button here so that someone can delete a student while looking at THAT student instead of having to go back through the whole list of ALL students */}
			</div>
		</div>
	)
}

export default SingleStudent
