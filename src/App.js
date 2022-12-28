import React from 'react'
import HeadSection from './head/HeadSection.js'
import AboutSection from './about/AboutSection.js' 
import ContactSection from './contact/ContactSection.js'
import ProjectsSection from './projects/ProjectsSection.js'

export default function App(props) {
  switch(props.section) {
    case 'head':
      return <HeadSection/>
    case 'about':
      return <AboutSection/>
    case 'contact':
      return <ContactSection/>
    case 'projects':
      return <ProjectsSection/>
  }
}