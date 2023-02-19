//import magic from outta space
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import other stuff
import Button from './Button';

//our component will...
const UpdateCampus = ({ campus, onEdit, onDelete }) => {
	//...make this for later
	const navigate = useNavigate();
	//...set local state variables for each part of the form to match the campus's pre-edit info
	const [name, setName] = useState(campus.name);
	const [address, setAddress] = useState(campus.address);
	const [description, setDescription] = useState(campus.description);
	const [imageUrl, setImageUrl] = useState(campus.imageUrl);
  //define a function for submitting that takes in the event object as a parameter; this function will...
	const onSubmit = (e)=> {
		//...prevent the submit from loading a new page
		e.preventDefault();
		//...create a new object including the updates stored in state
		const upCampus = { name, address, description, imageUrl }
		//...run the onAdd function with the new campus object passed in
		onEdit(upCampus);
		//...and reset the form
		setName('');
		setAddress('');
		setDescription('');
		setImageUrl('');
	}

	//...then JSX should return the form with a 'form-control' section for each input field and a submit button
	return (
		<div className='menu' >
			<Button 
				text='Delete this campus from ACME'
				textColor='ghostwhite'
				backColor='firebrick'
				onClick={(e)=> {
					onDelete(campus.id);
					navigate('/campuses')
				}}
			/>
			<form className='add-form' onSubmit={onSubmit}>
				<div className='form-control'>
					<p>
						<label>
							<span style={{fontWeight: 'bold'}}>Current Campus Name:</span> 
							<small>{campus.name}</small>
						</label>
					</p>
					<input 
						type='text' 
						placeholder='update name to?' 
						value={name} 
						onChange={(e)=> setName(e.target.value)} 
					/>
				</div>
				<div className='form-control'>
						<p>
							<label>
								<span style={{fontWeight: 'bold'}}>Current Campus Address: </span>
								<small>{campus.address}</small>
							</label>
						</p>
						<input 
							type='text' 
							placeholder='update address to?' 
							value={address} 
							onChange={(e)=> setAddress(e.target.value)} 
						/>
				</div>
				<div className='form-control'>
					<p>
						<label>
							<span style={{fontWeight: 'bold'}}>Current Campus Description: </span>
							<small>{campus.description}</small>
						</label>
					</p>
					<input 
						type='text' 
						placeholder='update description to?' 
						value={description} 
						onChange={(e)=> setDescription(e.target.value)} 
					/>
				</div>
				<div className='form-control'>
						<p>
							<label>
								<span style={{fontWeight: 'bold'}}>Current Campus Image URL: </span>
								<small>{campus.imageUrl}</small>
							</label>
						</p>
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
		</div>
	)
}

export default UpdateCampus
