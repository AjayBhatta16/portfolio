import React from 'react'
import { Link } from 'react-router-dom'

export default function BodyNav(props) {
  let isAbout = (props.section == 'about')
  let isContact = (props.section == 'contact')
  let isProj = (props.section == 'projects')

  return (
    <nav className='body-nav'>
      <Link to="/about" className={isAbout ? 'active' : ''} data-section='about'>About Me</Link>
      <Link to="/projects" className={isProj ? 'active' : ''} data-section='projects'>My Projects</Link>
      <Link to="/contact" className={isContact ? 'active' : ''} data-section='contact'>Contact Info</Link>
    </nav>
  )
}