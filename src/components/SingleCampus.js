//import magic from outta space
import React, { useState } from 'react';
import { useParams } from "react-router-dom";
//import garbage from Craig
import CampusEnrollment from './CampusEnrollment';
import UpdateCampus from './UpdateCampus';
import Button from './Button';

//our component will...
const SingleCampus = ({ list, onDelete, onEdit, onRemove }) => {
  //...declare THIS campus as THE campus, based on the url
	const campus = list.filter(campus => campus.id === Number(useParams().id))[0];
	//...set local state to a Boolean determining whether or not the UPDATE form appears
	const [showEdit, setShowEdit] = useState(false);
  
	//...then the JSX should render:
	return (
		<div>
			{/* a button that will toggle the add menu */}
			<Button 
				text={showEdit ? 'Hide Edit Menu' : 'Edit this campus'}
				onClick={()=> setShowEdit(!showEdit)} 
				textColor={showEdit ? 'silver' : 'black'}
				backColor={showEdit ? 'black' : 'silver'}
			/>
			{/* the update menu IF the state is set to true */}
			{showEdit && 
				<UpdateCampus
					campus={campus}
					onDelete={onDelete}
					onEdit={onEdit}
				/>
			}
			{/* some pre-CSS spacing that I'll hopefully remember to take away later */}
			<div className='pre-CSS-spacer'>
				<p></p>
			</div>	
			{/* all the details of this campuses*/}
			<div className='campus'>
				<div className='campus-top'>
					<img src={campus.imageUrl} />
					<h1>{campus.name}</h1>
				</div>
				<p>
					Address: 
					<span style={{fontWeight: 'bold'}}>
						{campus.address}
					</span>
				</p>
				<p>
					Enrollment: 
					<span style={{fontWeight: 'bold'}}>
						{campus.students.length}
					</span>
				</p>
				<div className='info'>
					{campus.description}
				</div>
				{/* AND all the students enrolled in this campus!*/}
				<CampusEnrollment 
					campus={campus}
					onRemove={onRemove}
				/>
			</div>
		</div>
	)
}

export default SingleCampus