import React from 'react'

function TeamIndiaAPlus(props) {
  return (
       
      <div className='playersDiv'>
          <img className='playersImage' src={props.imageURL} alt='altName'></img>
          <h2>Name : {props.name}</h2>
          <h3>Grade : {props.grade}</h3>
          <h3>Role : {props.role}</h3>
          <h3>Age : {props.age}</h3>
          <h3>Style : {props.style}</h3>  
      </div>
  )
}

export default TeamIndiaAPlus
