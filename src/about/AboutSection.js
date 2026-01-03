import React from 'react'
import BodyNav from '../BodyNav.js'

export default function AboutSection() {
  return (
    <>
    <BodyNav section='about'/>
    <section id="about">
      <h1>About Me</h1>
      <p>Hi, my name is Ajay Bhattacharyya. I am a Software Engineer at Excellus BCBS, based out of Rochester, NY. I have Bachelor's degrees in Computer Science and Mathematics from SUNY Brockport, where my AI research was featured in Human-Computer Interaction International (HCII).</p>
      <p>I am passionate about designing and developing full-stack web applications and applied AI systems, and I have 4 years of experience implementing solutions for companies in the health insurance, cybersecurity, and supply chain management industries.</p>
      <p>In addition to my work in the industry, I also maintain several open source projects. Be sure to check out the Projects page to learn more!</p>
      <a href="https://portfolio-assets-2.storage.googleapis.com/resume.pdf" target="_blank"><button>My Resume</button></a>
    </section>
    </>
  )
}
