import React from 'react';

const Button = ({ text, textColor, backColor, onClick }) => {
	return (
		<button className='btn' style={{color: textColor, backgroundColor: backColor}} onClick={onClick}>
			{text}
		</button>
	)
};

export default Button
