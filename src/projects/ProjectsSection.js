import React from 'react'
import Card from './Card.js'
import BodyNav from '../BodyNav.js'

let cards = [
	{
		id: 1,
		imgLink: "images/socialguard.png",
		mainLink: "https://socialguard-4efb8.firebaseapp.com/",
		srcLink: "https://github.com/AjayBhatta16/social-media-scam-detector",
		title: "Social Guard",
		description: "An AI-Driven web application for identifying fraudulent accounts on social media platforms, built using ReactJS and Flask."
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
		mainLink: "https://linkwire.cc",
		srcLink: "https://github.com/AjayBhatta16/grabify-clone",
		title: "LinkWire",
		description: "An IP logging and traffic analysis platform similar to Grabify, built using Bootstrap, ExpressJS, and GCP Firestore",
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
