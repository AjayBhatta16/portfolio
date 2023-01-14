import React from 'react'
import Card from './Card.js'
import BodyNav from '../BodyNav.js'

let cards = [
	{
		id: 1,
		imgLink: "images/minesweeper.png",
		mainLink: "https://cooljavascriptthings.firebaseapp.com/minesweeper",
		srcLink: "https://github.com/AjayBhatta16/minesweeper",
		title: "Minesweeper",
		description: "A minesweeper game built using basic HTML, CSS, and JavaScript."
	},
	{
		id: 2,
		imgLink: "images/bank.png",
		mainLink: "https://mikeoxlongbanking.firebaseapp.com",
		srcLink: "https://github.com/AjayBhatta16/fake-bank",
		title: "Online Bank",
		description: "An online banking website built using React, Bootstrap, and ExpressJS."
	},
	{
		id: 3,
		imgLink: "images/grabify.png",
		mainLink: "https://grabify-clone.ajaybhatta49.repl.co",
		srcLink: "https://github.com/AjayBhatta16/grabify-clone",
		title: "IP Logger",
		description: "An IP logging tool similar to Grabify, built using ExpressJS, EJS Templating, and Bootstrap.",
	},
 	{
   		id: 4,
   		imgLink:"images/filedrop.png",
   		mainLink:"https://filedrop.ajaybhatta49.repl.co",
		srcLink: "https://github.com/AjayBhatta16/filedrop",
   		title:'FileDrop',
   		description:'A file-sharing web app built using Angular JS, Bootstrap, Flask, and MongoDB.'
 	}
]

export default function ProjectsSection() {
  let cardComponents = cards.map(card => <Card key={card.id} data={card} />)
  return (
    <>
    <BodyNav section='projects'/>
    <section id='projects'>
      <h1>My Projects</h1>
      <div className='flexbox'>
         {cardComponents}
      </div>
    </section>
    </>
  )
}
