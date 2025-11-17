import React from 'react'
import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-[#0b0b14]">
      {/* Gradient aura */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-48 -left-40 h-96 w-96 rounded-full bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 blur-3xl opacity-20" />
        <div className="absolute -bottom-40 -right-32 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600 blur-3xl opacity-20" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="inline-flex items-center gap-2 text-xs font-medium text-white/80 bg-white/5 border border-white/10 rounded-full px-3 py-1">
            <span className="h-2 w-2 rounded-full bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600" />
            All-in-one marketplace for talent, stays & local services
          </p>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Hire. Book. Get it done.
          </h1>
          <p className="mt-5 text-base sm:text-lg text-white/70 max-w-xl">
            One place that blends the best of Upwork & Fiverr for global freelancers, Airbnb for unique stays, and UrbanClap/Thumbtack for trusted local pros. Discover, hire, and book seamlessly.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#features" className="px-5 py-3 rounded-lg text-white font-semibold bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 hover:opacity-90 transition shadow-lg shadow-indigo-900/30">
              Explore Features
            </a>
            <a href="#" className="px-5 py-3 rounded-lg text-white/90 hover:text-white border border-white/20 hover:border-white/40 transition">
              Watch Demo
            </a>
          </div>

          {/* Quick highlights */}
          <div className="mt-10 grid grid-cols-2 gap-4 text-white/80">
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 hover:border-white/20 transition">
              <p className="text-2xl font-bold">150k+</p>
              <p className="text-xs">Verified freelancers</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 hover:border-white/20 transition">
              <p className="text-2xl font-bold">70k+</p>
              <p className="text-xs">Unique stays worldwide</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 hover:border-white/20 transition">
              <p className="text-2xl font-bold">40+</p>
              <p className="text-xs">Local service categories</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 hover:border-white/20 transition">
              <p className="text-2xl font-bold">4.9</p>
              <p className="text-xs">Avg. customer rating</p>
            </div>
          </div>
        </div>

        {/* Spline 3D */}
        <div className="relative h-[420px] sm:h-[540px] lg:h-[640px] rounded-2xl overflow-hidden ring-1 ring-white/10">
          <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </section>
  )
}

export default Hero
