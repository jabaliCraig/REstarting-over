import React from 'react'

const Students = ({ list }) => {
  return (
    <div>
      {list.map(student=>{
        return (
          <div className='student-on-list' key={student.id}>
            <span>{student.firstName} {student.lastName}</span>
          </div>
        )
      })}
    </div>
  )
}

export default Students
