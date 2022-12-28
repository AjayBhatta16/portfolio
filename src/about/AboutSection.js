import React from 'react'
import BodyNav from '../BodyNav.js'

export default function AboutSection() {
  return (
    <>
    <BodyNav section='about'/>
    <section id="about">
      <h1>About Me</h1>
      <p>My name is Ajay Bhattacharyya. I am a software engineer and aspiring tech entrepreneur from Rochester, New York. I am currently a college junior double majoring in Computer Science and Math with a concentration in Software Development and minors in Business Administration and Computer Information Systems.</p>
      <a href="resume.pdf" target="_blank"><button>My Resume</button></a>
    </section>
    </>
  )
}
