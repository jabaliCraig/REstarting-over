import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
	return (
		<div className='navbar'>
			<Link to='/students'>Students</Link>
			<span className='spacer'> </span>
			<Link to='/campuses'>Campuses</Link>
			<div className='pre-CSS-spacer'>
				<p></p>
			</div>			
		</div>
	)
}

export default Nav
