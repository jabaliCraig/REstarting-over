import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AddStudent from './AddStudent';
import Button from './Button';

const Students = ({ list, addStudent, editStudent, deleteStudent }) => {
  //set local state to a Boolean determining whether or not the ADD form appears
	const [showAdd, setShowAdd] = useState(false);
  //JSX should render...
  return (
    <div>
			{/*...a button that will toggle the add menu */}
			<Button 
			  textColor={showAdd ? 'silver' : 'black'}
				backColor={showAdd ? 'black' : 'silver'}
				text={showAdd ? 'Hide Add Menu' : 'Add a Student'}
				onClick={()=> setShowAdd(!showAdd)} />
			{/*...the add menu IF the state is set to true */}
			{showAdd && <AddStudent onAdd={addStudent}/>}
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
						<Link 
						  to={`/students/${student.id}`}
					  >
							{student.firstName} {student.lastName}
						</Link>
						<Button 
							text={'Update Student'}
							onClick={editStudent} 
							textColor={'black'}
							backColor={'silver'}
						/>
						<Button 
							text={'X'}
							onClick={deleteStudent} 
							textColor={'ghostwhite'}
							backColor={'firebrick'}
						/>
          </div>
				)
      })}
    </div>
  )
};

export default Students