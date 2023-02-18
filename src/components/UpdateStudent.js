//import magic from outta space
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

//our component will...
const UpdateStudent = ({ student, onEdit, onDelete }) => {
	//...make this for later:
	const navigate = useNavigate();
	//...set local state variables for each part of the form
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [gpa, setGPA] = useState('');
	const [imageUrl, setImageUrl] = useState('');
	//define a function for submitting that takes in the event object as a parameter; this function will...
	const onSubmit = (e)=> {
		//...prevent the submit from loading a new page
		e.preventDefault();
		//...check each field to see if it has been updated and, if not, use the old value
		if ( !firstName || firstName === '') setFirstName(student.firstName);
		if ( !lastName || lastName === '') setLastName(student.lastName);
		if ( !email || email === '') setEmail(student.email);
		if ( !gpa || gpa === '') setGPA(student.firstName);
		if ( !imageUrl || imageUrl === '') setImageUrl(student.firstName);
		//...create a new object including the updates stored in state
		const upStudent = { firstName, lastName, email, gpa, imageUrl }
						console.log('before running onEdit(), the upStudent object is:');
						console.log(upStudent)
		//...run the onAdd function with the new student object passed in
		onEdit(upStudent);
		//...and reset the form
		setFirstName('');
		setLastName('');
		setEmail('');
		setGPA('');
		setImageUrl('');
	}

	//...then JSX should return the form with a 'form-control' section for each input field and a submit button
	return (
		<div className='menu'>
			<Button 
				text='Delete this student from ACME'
				textColor='ghostwhite'
				backColor='firebrick'
				onClick={(e)=> {
					onDelete(student.id);
					navigate('/students')
				}}
			/>
			<form className='add-form' onSubmit={onSubmit}>
				<div className='form-control'>
					<p><label><span style={{fontWeight: 'bold'}}>Current Student First Name:</span> <small>{student.firstName}</small></label></p>
					<input 
						type='text' 
						placeholder='update first name to?' 
						value={firstName} 
						onChange={(e)=> setFirstName(e.target.value)} 
					/>
				</div>

				<div className='form-control'>
					<p><label><span style={{fontWeight: 'bold'}}>Current Student Last Name:</span> <small>{student.lastName}</small></label></p>
					<input 
						type='text' 
						placeholder='update last name to?' 
						value={lastName} 
						onChange={(e)=> setLastName(e.target.value)} 
					/>
				</div>

				<div className='form-control'>
						<p><label><span style={{fontWeight: 'bold'}}>Current Student Email Address: </span><small>{student.email}</small></label></p>
						<input 
							type='text' 
							placeholder='update email address to?' 
							value={email} 
							onChange={(e)=> setEmail(e.target.value)} 
						/>

				</div>

				<div className='form-control'>
					<p><label><span style={{fontWeight: 'bold'}}>Current Student GPA: </span><small>{student.gpa}</small></label></p>
					<input 
						type='text' 
						placeholder='update GPA to?' 
						value={gpa} 
						onChange={(e)=> setGPA(e.target.value)} 
					/>
				</div>
					
				<div className='form-control'>
						<p><label><span style={{fontWeight: 'bold'}}>Current Student Image URL: </span><small>{student.imageUrl}</small></label></p>
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

export default UpdateStudent
