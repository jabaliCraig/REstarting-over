//import magic from outta space
import React, { useState } from 'react';

//our component will...
const UpdateCampus = ({ campus, onEdit }) => {
	//set local state variables for each part of the form
	const [name, setName] = useState('');
	const [address, setAddress] = useState('');
	const [description, setDescription] = useState('');
	const [imageUrl, setImageUrl] = useState('');



					{/*#LIFEGOALS: also add a delete button here so that someone can delete a campus while looking at THAT campus instead of having to go back through the whole list of ALL campuses */}



  //define a function for submitting that takes in the event object as a parameter; this function will...
	const onSubmit = (e)=> {
		//...prevent the submit from loading a new page
		e.preventDefault();
		//...create a new object from input fields (stored from the form as state variables)






		/////////////////THIS/////////////////////////////////////
		const newCampus = { name, address, description, imageUrl }
		///////needs to check each field to see if the new one is a blank string
///////and if it IS, use the old value, not the black string...






		//...run the onAdd function with the new campus object passed in
		onEdit(newCampus);

		////IDEALLY///////
		//this should just send them back to the CampusES page #lifeGoals
		//////////////////////////////////////////////////////

		//...and reset the form
		setName('');
		setAddress('');
		setDescription('');
		setImageUrl('');
	}

	//...then JSX should return the form with a 'form-control' section for each input field and a submit button
	return (
		<form className='add-form' onSubmit={onSubmit}>
			<div className='form-control'>
				<p><label><span style={{fontWeight: 'bold'}}>Current Campus Name:</span> <small>{campus.name}</small></label></p>
				<input 
					type='text' 
					placeholder='update name to?' 
					value={name} 
					onChange={(e)=> setName(e.target.value)} 
				/>
			</div>

			<div className='form-control'>
					<p><label><span style={{fontWeight: 'bold'}}>Current Campus Address: </span><small>{campus.address}</small></label></p>
					<input 
						type='text' 
						placeholder='update address to?' 
						value={address} 
						onChange={(e)=> setAddress(e.target.value)} 
					/>

			</div>

			<div className='form-control'>
				<p><label><span style={{fontWeight: 'bold'}}>Current Campus Description: </span><small>{campus.description}</small></label></p>
				<input 
					type='text' 
					placeholder='update description to?' 
					value={description} 
					onChange={(e)=> setDescription(e.target.value)} 
				/>
			</div>
				
			<div className='form-control'>
					<p><label><span style={{fontWeight: 'bold'}}>Current Campus Image URL: </span><small>{campus.imageUrl}</small></label></p>
					<input 
						type='text' 
						placeholder='update image URL to?' 
						value={imageUrl} 
						onChange={(e)=> setImageUrl(e.target.value)} 
					/>
			</div>

			<div className='pre-CSS-spacer'>
						<p></p>
			</div>	

			<input type='submit' value='Save' />
		</form>
	)
}

export default UpdateCampus
