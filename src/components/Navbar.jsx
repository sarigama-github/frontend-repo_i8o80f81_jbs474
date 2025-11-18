import React from 'react'

function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-30 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600" />
            <span className="text-slate-900 font-semibold text-lg tracking-tight">UniConnect</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#features" className="text-slate-600 hover:text-slate-900 transition">Features</a>
            <a href="#how" className="text-slate-600 hover:text-slate-900 transition">How it works</a>
            <a href="#pricing" className="text-slate-600 hover:text-slate-900 transition">Pricing</a>
            <a href="#faq" className="text-slate-600 hover:text-slate-900 transition">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex px-4 py-2 rounded-md text-slate-700 hover:text-slate-900 border border-slate-200 hover:border-slate-300 transition">Sign in</button>
            <button className="px-4 py-2 rounded-md text-white font-semibold bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 hover:opacity-90 transition shadow-lg/30">Get Started</button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
