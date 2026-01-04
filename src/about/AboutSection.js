import BodyNav from '../BodyNav.js'
import ResumeButton from './components/ResumeButton.js'
import AboutMeContents from './components/AboutMeContents.js'
import SkillCarousel from './components/SkillCarousel.js'
import { useStaticJSON } from '../hooks/useStaticJSON.js';

export default function AboutSection() {
  const skills = useStaticJSON('/skill-list.json');

  return (
    <>
      <BodyNav section='about'/>
      <section id="about">
        <h1>About Me</h1>
        <AboutMeContents />
        <h4 className="carousel-header">What I Do</h4>
        <SkillCarousel skills={skills} />
        <ResumeButton />
      </section>
    </>
  )
}
