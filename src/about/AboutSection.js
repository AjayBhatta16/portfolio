import React from 'react'
import BodyNav from '../BodyNav.js'

export default function AboutSection() {
  return (
    <>
    <BodyNav section='about'/>
    <section id="about">
      <h1>About Me</h1>
      <p>My name is Ajay Bhattacharyya. I am a software engineer from Rochester, New York, specializing in full-stack development and applied AI systems.</p>
      <p>I graduated from SUNY Brockport in 2024 with Bachelor's degrees in Computer Science and Math, and minors in Business Administration and Computer Information Systems.</p>
      <a href="resume.pdf" target="_blank"><button>My Resume</button></a>
    </section>
    </>
  )
}
