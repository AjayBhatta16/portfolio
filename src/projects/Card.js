import React from 'react'

export default function Card(props) {
  return (
    <div className='card'>
      <img src={props.data.imgLink} alt={props.data.title}/>
      <br/>
      <h3 className='card-title'>{props.data.title}</h3>
      <p>{props.data.description}</p><br/>
      <div className='row'>
	<small><a href={props.data.mainLink} target='_blank'>Demo</a></small>
        <small><a href={props.data.srcLink} target='_blank'>Source Code</a></small>
      </div>
    </div>
  )
}
