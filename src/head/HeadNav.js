import React from 'react'
import { Link } from 'react-router-dom'

export default function HeadNav() {
  return (
    <nav>
      <Link to="/about" data-section='about'>About Me</Link>
      <Link to="/projects" data-section='projects'>My Projects</Link>
      <Link to="/contact" data-section='contact'>Contact Info</Link>
    </nav>
  )
}