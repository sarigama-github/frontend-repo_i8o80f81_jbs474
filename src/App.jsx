import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Services from './components/Services'
import Logistics from './components/Logistics'
import Showcase from './components/Showcase'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen app-bg text-white">
      <Navbar />
      <Hero />
      <Features />
      <Services />
      <Logistics />
      <Showcase />
      <Footer />
    </div>
  )
}

export default App
