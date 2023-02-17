//import magic from outta space
import React, { useState } from 'react';
import { redirect } from 'react-router-dom';
import Button from './Button';

//our component will...
const UpdateStudent = ({ student, onEdit, onDelete }) => {
	//set local state variables for each part of the form
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [gpa, setGPA] = useState('');
	const [imageUrl, setImageUrl] = useState('');


	
					{/*#LIFEGOALS: also add a delete button here so that someone can delete a student while looking at THAT student instead of having to go back through the whole list of ALL students */}



  //define a function for submitting that takes in the event object as a parameter; this function will...
	const onSubmit = (e)=> {
		//...prevent the submit from loading a new page
		e.preventDefault();
		//...create a new object from input fields (stored from the form as state variables)







		/////////////////////////////////////////////THIS////////////////
		const newStudent = { firstName, lastName, email, gpa, imageUrl }
////////needs to check each field to see if the new one is a blank string
//////////and if it IS, use the old value, not the black string...







		//...run the onAdd function with the new student object passed in
		onEdit(newStudent);

		////IDEALLY///////
		//this should just send them back to the studentS page #lifeGoals
		//////////////////////////////////////////////////////

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
				onClick={()=> {
					onDelete(student.id);
				  //HOW DO I DO THIS PART??? redirect('/students');
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
