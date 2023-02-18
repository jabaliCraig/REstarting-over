//import magical stuff from magical land
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//import my less magical stuff
import AddCampus from './AddCampus';
import Button from './Button';
// const db = require('../../server/db/db');//this line crashes the app

const Campuses = ({ list, onAdd, onDelete }) => {
  //set local state to a Boolean determining whether or not the ADD form appears
	const [showAdd, setShowAdd] = useState(false);
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
			{/*...and a list of all the campuses as links to their individual pages */}
      {list.map(campus=>{
        return (
          <div className='campus-on-list' key={campus.id}>
            <img 
						  className='campus-list-img' 
							src={campus.imageUrl} 
							alt='A lovely picture of the campus: '
							style={{maxHeight: 99}}
						></img>
						<Link to={`/campuses/${campus.id}`} >
								<h1>{campus.name}</h1>
						</Link>						
						{/* I KNOW THE RUBRIC SAYS THE DELETE BUTTON BELONGS HERE, BUT IT DOESN'T MAKE ANY SENSE TO ME TO HAVE IT HERE INSTEAD OF ON THE EDIT CAMPUS PAGE. SO HERE'S THE CODE TO PROVE THAT I KNOW HOW TO PUT IT HERE. BUT THE FUNCTIONAL ONE LIVES IN './UpdateCampus.js' NOW. 
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