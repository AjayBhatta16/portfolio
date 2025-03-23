import React from 'react'
import HeadSection from './head/HeadSection.js'
import AboutSection from './about/AboutSection.js' 
import ContactSection from './contact/ContactSection.js'
import ProjectsSection from './projects/ProjectsSection.js'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <><Outlet/></> }>
          <Route index element={ <HeadSection/> }/>
          <Route path='about' element={ <AboutSection/> }/>
          <Route path='contact' element={ <ContactSection/> }/>
          <Route path='projects' element={ <ProjectsSection/> }/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}