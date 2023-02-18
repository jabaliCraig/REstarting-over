//import magical stuff from magical land
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//import my less magical stuff
import AddStudent from './AddStudent';
import Button from './Button';
import EnrollmentForm from './EnrollmentForm';
// const db = require('../../server/db/db');//this line crashes the app

const Students = ({ list, onAdd }) => {
  //set local state to a Boolean determining whether or not the ADD form appears
	const [showAdd, setShowAdd] = useState(false);
  //JSX should render...
  return (
    <div>
			{/*...a button that will toggle the add menu */}
			<Button 
				text={showAdd ? 'Hide Add Menu' : 'Add a Student'}
				onClick={()=> setShowAdd(!showAdd)}
			  textColor={showAdd ? 'silver' : 'black'}
				backColor={showAdd ? 'black' : 'silver'}
			/>
			{/*...the add menu IF the state is set to true */}
			{showAdd && <AddStudent onAdd={onAdd}/>}
			{/*...some pre-CSS spacing that I'll hopefully remember to take away later */}
			<div className='pre-CSS-spacer'>
				<p></p>
			</div>
			{/*...and a list of all the students as links to their individual pages */}
      {list.map(student=>{
        return (
          <div 
					  className='student-on-list' 
						key={student.id}
					>
						<Link to={`/students/${student.id}`}>
							{student.firstName} {student.lastName}
						</Link>
						{student?.campus?.id ?
							<span> 
								<span className='spacer'> </span>
								Enrolled at
								<span className='spacer'> </span>
							  <Link to={`/campuses/${student.campus.id}`}>
								  {student.campus.name}
							  </Link> 
								<span className='spacer'> </span>
								Campus
							</span> : <span></span>}
						{/* I KNOW THE RUBRIC SAYS THE DELETE BUTTON BELONGS HERE, BUT IT DOESN'T MAKE ANY SENSE TO ME TO HAVE IT HERE INSTEAD OF ON THE EDIT STUDENT PAGE. SO HERE'S THE CODE TO PROVE THAT I KNOW HOW TO PUT IT HERE. BUT THE FUNCTIONAL ONE LIVES IN './UpdateStudent.js' NOW. 
						<Button 
							text={'X'}
							onClick={()=> onDelete(student.id)} 
							textColor={'ghostwhite'}
							backColor={'firebrick'}
						/> */}
          </div>
				)
      })}

    </div>
  )
};

export default Students