import React, { useState } from 'react';

const AddCampus = ({ onAdd }) => {
	const [name, setName] = useState('');
	const [address, setAddress] = useState('');
	const [description, setDescription] = useState('');
	const [imageUrl, setImageUrl] = useState('');

	const onSubmit = (e)=> {
		e.preventDefault();

		if(!name || !address) {
			alert('You must complete all required fields: Campus Name and Campus Address');
			return
		}
		onAdd({ name, address, description, imageUrl });
		setName('');
		setAddress('');
		setDescription('');
		setImageUrl('');
	}

	return (
		<form className='add-form' onSubmit={onSubmit}>
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
				<label>Campus Image</label>
				<input type='text' placeholder='(optional)' value={imageUrl} onChange={(e)=> setImageUrl(e.target.value)} />
			</div>

			<input type='submit' value='Save' />

			<div className='pre-CSS-spacer'>
				<p></p>
			</div>	
		</form>
	)
}

export default AddCampus
