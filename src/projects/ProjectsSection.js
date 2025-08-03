import React, { useState, useEffect } from 'react'
import Card from './Card.js'
import BodyNav from '../BodyNav.js'
import { getProjects } from './projects.api.js'

export default function ProjectsSection() {
  const [cards, setCards] = useState([])

  useEffect(() => {
	getProjects().then(setCards);
  }, [])

  return (
    <>
    <BodyNav section='projects'/>
    <section id='projects'>
      <h1>My Projects</h1>
      <div className='flexbox'>
         {
		 	cards.map(card => 
				<Card key={card.id} data={card} />
			)
		 }
      </div>
    </section>
    </>
  )
}
