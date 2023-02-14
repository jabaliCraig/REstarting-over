import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AddCampus from './AddCampus';
import Button from './Button';

const Campuses = ({ list, addCampus }) => {
  //set local state to a Boolean determining whether or not the ADD form appears
	const [showAdd, setShowAdd] = useState(false);
  //JSX should render...
  return (
    <div>
			{/*...a button that will toggle the add menu */}
			<Button 
				textColor={showAdd ? 'silver' : 'black'}
				backColor={showAdd ? 'black' : 'silver'}
				text={showAdd ? 'Hide Add Menu' : 'Add a Campus'}
				onClick={()=> setShowAdd(!showAdd)} />
			{/*...the add menu IF the state is set to true */}
			{showAdd && <AddCampus onAdd={addCampus}/>}
			{/*...some pre-CSS spacing that I'll hopefully remember to take away later */}
			<div className='pre-CSS-spacer'>
				<p></p>
			</div>	
			{/*...and a list of all the campuses as links to their individual pages */}
      {list.map(campus=>{
        return (
          <div className='campus-on-list' key={campus.id}>
            <img className='campus-list-img' src={campus.imageUrl} alt='A lovely picture of the campus: '></img>
						<Link to={`/campuses/${campus.id}`}>{campus.name}</Link>
          </div>
        )
      })}
    </div>
  )
};

export default Campuses