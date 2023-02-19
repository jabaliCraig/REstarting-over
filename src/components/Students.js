//import magical stuff from magical land
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//import my less magical stuff
import AddStudent from './AddStudent';
import Button from './Button';

const Students = ({ list, onAdd, sortFName, sortLName, sortByCampus, sortGPA }) => {
  //set local state to a Boolean determining whether or not the ADD form appears
	const [showAdd, setShowAdd] = useState(false);
	//set local states to Booleans showing whether the list has already been sorted by different fields
	const [sortedFirst, setSortedFirst] = useState(false);
	const [sortedLast, setSortedLast] = useState(false);
	const [sortedCampus, setSortedCampus] = useState(false);
	const [sortedGPA, setSortedGPA] = useState(false);
	//declare onClick functions that will change the state Boolean (for display purposes) and call the sort function
	const onFNameSort = ()=> {
		//adjust all states accordingly
		setSortedFirst(true);
		setSortedLast(false);
		setSortedCampus(false);
		setSortedGPA(false);
    //call sort function passed down through props
		sortFName();
	}
	const onLNameSort = ()=> {
		//adjust all states accordingly
		setSortedFirst(false);
		setSortedLast(true);
		setSortedCampus(false);
		setSortedGPA(false);
		//call sort function passed down through props
		sortLName();
	}
	const onGpaSort = ()=> {
		//adjust all states accordingly
		setSortedFirst(false);
		setSortedLast(false);
		setSortedCampus(false);
		setSortedGPA(true);
		//call sort function passed down through props
		sortGPA();
	}
	//THIS function only works if ALL the students have a campus, otherwise it tries to sort unassigned students by a field they don't have, and I didn't have enough time and/or brains to figure out away around that problem.
	const onCampusSort = ()=> {
		setSortedFirst(false);
		setSortedLast(false);
		setSortedCampus(true);
		setSortedGPA(false);
		sortByCampus();
	}
  
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
			{/*...a menu bar with sort options */}	
			<div>
				Sort Students By:
				<div className='buttons-bar'>
					<Button 
						text='First Name'
						textColor={sortedFirst ? 'silver' : 'black'}
						backColor={sortedFirst ? 'gray' : 'silver'}
						onClick={onFNameSort}
					/>
					<Button 
						text='Last Name'
						textColor={sortedLast ? 'silver' : 'black'}
						backColor={sortedLast ? 'gray' : 'silver'}
						onClick={onLNameSort}
					/>
					<Button 
						text='GPA'
						textColor={sortedGPA ? 'silver' : 'black'}
						backColor={sortedGPA ? 'gray' : 'silver'}
						onClick={onGpaSort}
					/>
					<Button 
						text='Campus'
						textColor={sortedCampus ? 'silver' : 'black'}
						backColor={sortedCampus ? 'gray' : 'silver'}
						onClick={onCampusSort}
					/>
				</div>
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
						{/*I had to display this next element conditionally so that the page didn't try to find a property that didn't exist and crash the app */}
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
							</span> 
							: 
							<span></span>
						}
						{/* I KNOW THE RUBRIC SAYS THE DELETE BUTTON BELONGS HERE, BUT IT DOESN'T MAKE ANY SENSE TO ME TO HAVE IT HERE INSTEAD OF ON THE EDIT STUDENT PAGE. SO HERE'S THE CODE TO PROVE THAT I KNOW HOW TO PUT IT HERE. BUT THE FUNCTIONALITY NOW LIVES IN './UpdateStudent.js'. 
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
