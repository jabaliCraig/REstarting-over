import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
	return (
		<div className='navbar'>
			<Link to='/students'>Students</Link>
			<div className='pre-CSS-spacer'>    </div>
			<Link to='/campuses'>Campuses</Link>			
		</div>
	)
}

export default Nav
