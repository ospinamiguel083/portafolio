import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Education from './components/Education.jsx'
import Skills from './components/Skills.jsx'
import CurrentlyLearning from './components/CurrentlyLearning.jsx'
import Projects from './components/Projects.jsx'
import GithubRepos from './components/GithubRepos.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import ThemeToggle from './components/ThemeToggle.jsx'
import Reveal from './components/Reveal.jsx'

export default function App() {
  return (
    <div className="min-h-screen">
      <ThemeToggle />
      <Hero />
      <Reveal><About /></Reveal>
      <Reveal><Education /></Reveal>
      <Reveal><Skills /></Reveal>
      <Reveal><CurrentlyLearning /></Reveal>
      <Reveal><Projects /></Reveal>
      <Reveal><GithubRepos /></Reveal>
      <Reveal><Contact /></Reveal>
      <Footer />
    </div>
  )
}
