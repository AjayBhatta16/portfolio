import React, { useState, useEffect } from 'react'
import Card from './Card.js'
import ProjectInfoDialog from './ProjectInfoDialog.js'
import BodyNav from '../BodyNav.js'
import { getProjects } from './projects.api.js'

export default function ProjectsSection() {
  const [cards, setCards] = useState([])
  const [openModal, setOpenModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
	getProjects().then(setCards);
  }, [])

  const handleLearnMoreClicked = (card) => {
	setSelectedProject(card);
	setOpenModal(true);
  }

  return (
    <>
		<BodyNav section='projects'/>
		<section id='projects'>
			<h1>My Projects</h1>
			<div className='flexbox'>
				{
					cards.map(card => 
						<Card 
							key={card.id} 
							data={card} 
							onLearnMoreClicked={() => handleLearnMoreClicked(card)}
						/>
					)
				}
			</div>
		</section>
		<ProjectInfoDialog
			openModal={openModal}
			closeModal={() => setOpenModal(false)}
			data={selectedProject ?? {}}
		/>
    </>
  )
}
