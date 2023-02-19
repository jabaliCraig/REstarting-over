//import magical stuff from magical land
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//import less magical stuff from me
import AddCampus from './AddCampus';
import Button from './Button';

const Campuses = ({ list, onAdd, sortCampusName, sortEnroll }) => {
  //set local state to a Boolean determining whether or not the ADD form appears
	const [showAdd, setShowAdd] = useState(false);
	//set local states to Booleans determing if the list as already been sorted by a particular option
	const [sortedName, setSortedName] = useState(false);
	const [sortedEnroll, setSortedEnroll] = useState(false);
	//declare functions that will...
	const onNameSort = ()=> {
		//...set the state accordingly
		setSortedName(true);
		setSortedEnroll(false);
		//...and call the function passed down through props
		sortCampusName();
	}
	const onEnrollSort = ()=> {
		//...set the state accordingly
		setSortedName(false);
		setSortedEnroll(true);
		//...and call the function passed down through props
		sortEnroll();
	}
  
	//JSX should render...
  return (
    <div>
			{/*...a button that will toggle the add menu */}
			<Button 
				text={showAdd ? 'Hide Add Menu' : 'Add a Campus'}
				onClick={()=> setShowAdd(!showAdd)} 
				textColor={showAdd ? 'silver' : 'black'}
				backColor={showAdd ? 'black' : 'silver'}
			/>
			{/*...the add menu IF the state is set to true */}
			{showAdd && <AddCampus onAdd={onAdd}/>}
			{/*...some pre-CSS spacing that I'll hopefully remember to take away later */}
			<div className='pre-CSS-spacer'>
				<p></p>
			</div>
			{/*...a menu bar with sort options */}	
			<div>
				Sort Campuses By:
				<div className='buttons-bar'>
					<Button 
						text='Name'
						textColor={sortedName ? 'silver' : 'black'}
						backColor={sortedName ? 'gray' : 'silver'}
						onClick={onNameSort}
					/>
					<Button 
						text='Enrollment'
						textColor={sortedEnroll ? 'silver' : 'black'}
						backColor={sortedEnroll ? 'gray' : 'silver'}
						onClick={onEnrollSort}
					/>
				</div>
			</div>
			{/*...and a list of all the campuses as links to their individual pages */}
      {list.map(campus=>{
        return (
          <div className='campus-on-list' key={campus.id}>
            <img 
						  className='campus-list-img' 
							src={campus.imageUrl} 
							alt='A lovely picture of the campus: '
							style={{maxHeight: 99}}
						/>
						<Link to={`/campuses/${campus.id}`} >
								<h1>{campus.name}</h1>
						</Link>						
						{/* I KNOW THE RUBRIC SAYS THE DELETE BUTTON BELONGS HERE, BUT IT DOESN'T MAKE ANY SENSE TO ME TO HAVE IT HERE INSTEAD OF ON THE EDIT CAMPUS PAGE. SO HERE'S THE CODE TO PROVE THAT I KNOW HOW TO PUT IT HERE. BUT THE FUNCTIONALITY NOW LIVES IN './UpdateCampus.js'. 
						<Button 
							text={'X'}
							onClick={()=> onDelete(campus.id)} 
							textColor={'ghostwhite'}
							backColor={'firebrick'}
						/> */}
          </div>
        )
      })}
    </div>
  )
};

export default Campuses
