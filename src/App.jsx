import NavBar from './components/NavBar.jsx'
import Hero from './sections/Hero.jsx'
import LogoSection from './components/LogoSection.jsx'
import FeaturesCards from './sections/FeaturesCards.jsx'
import ExperienceSection from './sections/ExperienceSection.jsx'
import TechStack from './sections/TechStack.jsx'
import Testimonials from './sections/Testimonials.jsx'
import Contact from './sections/Contact.jsx'
import Footer from './sections/Footer.jsx'
const App = () => {
  return (
   <>
   <NavBar/>
   <Hero />
   <LogoSection />
   <FeaturesCards />
   <ExperienceSection/>
   <TechStack/>
   <Testimonials/>
   <Contact/>
   <Footer/>
   </>
  )
}

export default App
