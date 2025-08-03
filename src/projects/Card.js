import React from 'react'

export default function Card(props) {
  return (
    <div className='card'>
      <img src={props.data.appLogoURI} alt={props.data.title}/>
      <br/>
      <h3 className='card-title'>{props.data.title}</h3>
      <p>{props.data.description}</p><br/>
      <button>Learn More</button>
    </div>
  )
}
