import React from 'react'

export default function BodyNav(props) {
  let isAbout = (props.section == 'about')
  let isContact = (props.section == 'contact')
  let isProj = (props.section == 'projects')
  return (
    <nav className='body-nav'>
      <a href="#" className={isAbout ? 'active' : ''} data-section='about'>About Me</a>
      <a href="#" className={isProj ? 'active' : ''} data-section='projects'>My Projects</a>
      <a href="#" className={isContact ? 'active' : ''} data-section='contact'>Contact Info</a>
    </nav>
  )
}