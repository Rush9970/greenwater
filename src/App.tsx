import { useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Metrics from './components/Metrics'
import Pillars from './components/Pillars'
import Timeline from './components/Timeline'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Team from './components/Team'
import './App.css'

function App() {
  useEffect(() => {
    // Scroll reveal animation
    const reveals = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.12 }
    )
    reveals.forEach((el) => observer.observe(el))

    // Hero elements animate in on load
    setTimeout(() => {
      const heroElements = document.querySelectorAll('.hero-left > *')
      heroElements.forEach((el, i) => {
        const element = el as HTMLElement
        element.style.opacity = '0'
        element.style.transform = 'translateY(24px)'
        element.style.transition = `opacity 0.7s ease ${i * 0.15}s, transform 0.7s ease ${i * 0.15}s`
        setTimeout(() => {
          element.style.opacity = '1'
          element.style.transform = 'translateY(0)'
        }, 100)
      })
    }, 100)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <Nav />
      <Hero />
      <Marquee />
      <Metrics />
      <Pillars />
      <Timeline />
      <CTA />
      <Team />
      <Footer />
      
    </>
  )
}

export default App
