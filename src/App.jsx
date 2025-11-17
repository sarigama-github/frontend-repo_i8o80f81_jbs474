import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Showcase from './components/Showcase'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0b0b14] text-white">
      <Navbar />
      <Hero />
      <Features />
      <Showcase />
      <Footer />
    </div>
  )
}

export default App
