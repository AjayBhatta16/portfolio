import BodyNav from '../BodyNav.js'
import { useStaticJSON } from '../hooks/useStaticJSON.js'
import ContactBubble from './components/ContactBubble.js'

export default function ContactSection() {
  const contactLinks = useStaticJSON('/contact-list.json');

  return (
    <>
    <BodyNav section='contact'/>
    <section id="contact">
      <h1>Contact Info</h1>
      <div className='flexbox'>
        {
          contactLinks.map(link =>
            <ContactBubble key={link.name} data={link}/>
          )
        }
      </div>
    </section>
    </>
  )
}
