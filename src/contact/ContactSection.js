import React from 'react'
import BodyNav from '../BodyNav.js'

export default function ContactSection() {
  return (
    <>
    <BodyNav section='contact'/>
    <section id="contact">
      <h1>Contact Info</h1>
      <p>Email: <a href="mailto:ajay.bhattacharyya.16@gmail.com" target="_blank">ajay.bhattacharyya.16@gmail.com</a></p>
      <p>Phone: <a href="tel:+1-585-851-4522" target="_blank">(585)851-4522</a></p>
      <p>Social Media: <a href="https://github.com/AjayBhatta16" target="_blank"><i class="fab fa-github"></i></a><a href="https://www.linkedin.com/in/ajaybhatta49/" target="_blank"><i class="fab fa-linkedin-in"></i></a></p>
    </section>
    </>
  )
}
