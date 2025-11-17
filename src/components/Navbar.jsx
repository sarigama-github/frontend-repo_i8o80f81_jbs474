import React from 'react'

function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-30 backdrop-blur-md/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600" />
            <span className="text-white/90 font-semibold text-lg tracking-tight">UniConnect</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#features" className="text-white/70 hover:text-white transition">Features</a>
            <a href="#how" className="text-white/70 hover:text-white transition">How it works</a>
            <a href="#pricing" className="text-white/70 hover:text-white transition">Pricing</a>
            <a href="#faq" className="text-white/70 hover:text-white transition">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex px-4 py-2 rounded-md text-white/90 hover:text-white border border-white/20 hover:border-white/40 transition">Sign in</button>
            <button className="px-4 py-2 rounded-md text-white font-semibold bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 hover:opacity-90 transition shadow-lg shadow-indigo-900/30">Get Started</button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
