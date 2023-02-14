import React from 'react';
import { Link } from 'react-router-dom';

const Campuses = ({ list }) => {
  return (
    <div>
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
}

export default Campuses
