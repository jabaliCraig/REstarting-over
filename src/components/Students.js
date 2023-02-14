import React from 'react';
import { Link } from 'react-router-dom';

const Students = ({ list }) => {
  return (
    <div>
      {list.map(student=>{
        return (
          <div className='student-on-list' key={student.id}>
						<Link to={`/students/${student.id}`}>{student.firstName} {student.lastName}</Link>
          </div>
				)
      })}
    </div>
  )
}

export default Students
