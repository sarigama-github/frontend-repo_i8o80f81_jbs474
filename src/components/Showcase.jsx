import React from 'react'

function Showcase() {
  return (
    <section className="relative bg-[#0b0b14] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Upwork/Fiverr */}
          <div className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-white/20 transition">
            <div className="p-6">
              <p className="text-xs text-white/70">Freelancing</p>
              <h3 className="text-2xl font-semibold text-white mt-1">Hire top freelancers</h3>
              <p className="text-white/70 text-sm mt-2">Post a job, get proposals, chat, and hire with protected payments and milestones.</p>
            </div>
            <div className="px-6 pb-6">
              <div className="h-40 rounded-xl bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 opacity-80 group-hover:opacity-100 transition" />
            </div>
          </div>

          {/* Airbnb */}
          <div className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-white/20 transition">
            <div className="p-6">
              <p className="text-xs text-white/70">Stays</p>
              <h3 className="text-2xl font-semibold text-white mt-1">Book unique stays</h3>
              <p className="text-white/70 text-sm mt-2">Search verified homes and experiences with transparent pricing and reviews.</p>
            </div>
            <div className="px-6 pb-6">
              <div className="h-40 rounded-xl bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600 opacity-80 group-hover:opacity-100 transition" />
            </div>
          </div>

          {/* UrbanClap/Thumbtack */}
          <div className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-white/20 transition">
            <div className="p-6">
              <p className="text-xs text-white/70">Local Services</p>
              <h3 className="text-2xl font-semibold text-white mt-1">Get trusted pros</h3>
              <p className="text-white/70 text-sm mt-2">Instantly connect with nearby professionals with upfront quotes and ratings.</p>
            </div>
            <div className="px-6 pb-6">
              <div className="h-40 rounded-xl bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 opacity-80 group-hover:opacity-100 transition" />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            One account. Endless possibilities.
          </h3>
          <p className="text-white/70 mt-3 max-w-2xl mx-auto">
            Whether you need a logo, a weekend getaway, or a plumber tomorrow morning — it all starts here.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <button className="px-5 py-3 rounded-lg text-white font-semibold bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 hover:opacity-90 transition shadow-lg shadow-indigo-900/30">Get Started Free</button>
            <button className="px-5 py-3 rounded-lg text-white/90 hover:text-white border border-white/20 hover:border-white/40 transition">Talk to sales</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Showcase
