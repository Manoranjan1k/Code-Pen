
import styles from './App.module.css'
import {Navbar} from './components/Navbar'
import {Hero} from './components/Hero/Hero'
import {About} from './components/About/About'
import {Experience} from './components/Experience/Experience'
import { Projects } from './components/Projects/Projects'
import {Contact} from './components/Contact/Contact'
import {ContactForm} from './components/ContactForm/ContactForm'


function App() {
 
  return (
    <div className={styles.App}>
      <Navbar/>
      <Hero/>
      <About/>
      <Experience/>
      <Projects/>
      <ContactForm/>
      <Contact/>
    </div>
  )
}

export default App
