import React from 'react'
import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-white pt-16">
      {/* Soft colored glows for light theme */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-48 -left-40 h-96 w-96 rounded-full bg-gradient-to-br from-blue-500/20 via-purple-500/15 to-indigo-500/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-32 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-indigo-500/20 via-purple-500/15 to-blue-500/20 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="inline-flex items-center gap-2 text-xs font-medium text-slate-700 bg-slate-100 border border-slate-200 rounded-full px-3 py-1">
            <span className="h-2 w-2 rounded-full bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600" />
            All-in-one marketplace for talent, stays & local services
          </p>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-slate-900">
            Hire. Book. Get it done.
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-xl">
            One place that blends the best of Upwork & Fiverr for global freelancers, Airbnb for unique stays, and UrbanClap/Thumbtack for trusted local pros. Discover, hire, and book seamlessly.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#features" className="px-5 py-3 rounded-lg text-white font-semibold bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 hover:opacity-90 transition shadow-lg/30">
              Explore Features
            </a>
            <a href="#" className="px-5 py-3 rounded-lg text-slate-700 hover:text-slate-900 border border-slate-200 hover:border-slate-300 transition">
              Watch Demo
            </a>
          </div>

          {/* Quick highlights */}
          <div className="mt-10 grid grid-cols-2 gap-4 text-slate-800">
            <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
              <p className="text-2xl font-bold">150k+</p>
              <p className="text-xs text-slate-600">Verified freelancers</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
              <p className="text-2xl font-bold">70k+</p>
              <p className="text-xs text-slate-600">Unique stays worldwide</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
              <p className="text-2xl font-bold">40+</p>
              <p className="text-xs text-slate-600">Local service categories</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
              <p className="text-2xl font-bold">4.9</p>
              <p className="text-xs text-slate-600">Avg. customer rating</p>
            </div>
          </div>
        </div>

        {/* Spline 3D */}
        <div className="relative h-[420px] sm:h-[540px] lg:h-[640px] rounded-2xl overflow-hidden ring-1 ring-slate-200 bg-white shadow-sm">
          <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </section>
  )
}

export default Hero
