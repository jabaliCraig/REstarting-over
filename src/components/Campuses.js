import React from 'react'

const Campuses = ({ list }) => {
  return (
    <div>
      {list.map(campus=>{
        return (
          <div className='campus-on-list' key={campus.id}>
            <img className='campus-list-img' src={campus.imageUrl} alt='A lovely picture of the campus: '></img><span>{campus.name}</span>
          </div>
        )
      })}
    </div>
  )
}

export default Campuses
