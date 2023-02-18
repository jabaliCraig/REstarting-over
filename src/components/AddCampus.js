import React, { useState } from 'react';

const AddCampus = ({ onAdd }) => {
	//set local state variables for each part of the form
	const [name, setName] = useState('');
	const [address, setAddress] = useState('');
	const [description, setDescription] = useState('');
	const [imageUrl, setImageUrl] = useState('');
  //define a function for submitting that takes in the event object as a parameter; this function will...
	const onSubmit = (e)=> {
		//...prevent the submit from loading a new page
		e.preventDefault();
		//...verify that all *required* fields are filled out
		if(!name || !address) {
			alert('You must complete all required fields: Campus Name and Campus Address');
			return
		}
		//...create a new object from input fields (stored from the form as state variables)
		onAdd({ name, address, description, imageUrl });
		//...and reset the form
		setName('');
		setAddress('');
		setDescription('');
		setImageUrl('');
	}
	//JSX should return the form with a 'form-control' section for each input field and a submit button
	return (
		<form className='add-form' action='/campuses/add' method='POST' onSubmit={onSubmit}>
			<div className='form-control'>
				<label>Campus Name</label>
				<input type='text' placeholder='**REQUIRED**' value={name} onChange={(e)=> setName(e.target.value)} />
			</div>

			<div className='form-control'>
				<label>Campus Address</label>
				<input type='text' placeholder='**REQUIRED**' value={address} onChange={(e)=> setAddress(e.target.value)} />
			</div>

			<div className='form-control'>
				<label>Campus Description</label>
				<input type='text' placeholder='(optional)' value={description} onChange={(e)=> setDescription(e.target.value)} />
			</div>

			<div className='form-control'>
				<label>Campus Image URL</label>
				<input type='text' placeholder='(optional)' value={imageUrl} onChange={(e)=> setImageUrl(e.target.value)} />
			</div>

			<input type='submit' value='Save' />
		</form>
	)
}

export default AddCampus