import React from 'react'
import { Search, Calendar, Shield } from 'lucide-react'

function Showcase() {
  return (
    <section className="relative bg-[#0b0b14] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* How it works */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            How it works
          </h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">
            From finding the right pro or place to booking and paying securely — everything is streamlined.
          </p>
        </div>

        <div className="mt-10 grid lg:grid-cols-3 gap-6">
          {/* Step 1 */}
          <div className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-white/20 transition">
            <div className="p-6 flex items-start gap-3">
              <div className="h-11 w-11 rounded-xl flex items-center justify-center bg-white/10 text-white backdrop-blur-sm border border-white/10">
                <Search className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-white/70">Step 1</p>
                <h3 className="text-xl font-semibold text-white mt-1">Search or post what you need</h3>
                <p className="text-white/70 text-sm mt-2">Tell us the outcome you want. We match you with top freelancers, nearby pros, or the perfect stay.</p>
              </div>
            </div>
            <div className="px-6 pb-6">
              <div className="h-40 rounded-xl bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 opacity-80 group-hover:opacity-100 transition" />
            </div>
          </div>

          {/* Step 2 */}
          <div className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-white/20 transition">
            <div className="p-6 flex items-start gap-3">
              <div className="h-11 w-11 rounded-xl flex items-center justify-center bg-white/10 text-white backdrop-blur-sm border border-white/10">
                <Calendar className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-white/70">Step 2</p>
                <h3 className="text-xl font-semibold text-white mt-1">Compare, chat, and schedule</h3>
                <p className="text-white/70 text-sm mt-2">Review profiles and ratings, align on scope and dates, then confirm in one click.</p>
              </div>
            </div>
            <div className="px-6 pb-6">
              <div className="h-40 rounded-xl bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600 opacity-80 group-hover:opacity-100 transition" />
            </div>
          </div>

          {/* Step 3 */}
          <div className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-white/20 transition">
            <div className="p-6 flex items-start gap-3">
              <div className="h-11 w-11 rounded-xl flex items-center justify-center bg-white/10 text-white backdrop-blur-sm border border-white/10">
                <Shield className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-white/70">Step 3</p>
                <h3 className="text-xl font-semibold text-white mt-1">Track progress and pay safely</h3>
                <p className="text-white/70 text-sm mt-2">Milestones, escrow, and insured bookings keep every project and trip protected.</p>
              </div>
            </div>
            <div className="px-6 pb-6">
              <div className="h-40 rounded-xl bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 opacity-80 group-hover:opacity-100 transition" />
            </div>
          </div>
        </div>

        {/* Trust bar */}
        <div className="mt-12 grid sm:grid-cols-3 gap-4">
          {[
            { label: 'Customer satisfaction', value: '4.9/5' },
            { label: 'Bookings protected', value: '100% escrow' },
            { label: 'Verified professionals', value: '40k+' },
          ].map((m, i) => (
            <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
              <p className="text-sm text-white/70">{m.label}</p>
              <p className="mt-1 text-xl font-semibold text-white">{m.value}</p>
            </div>
          ))}
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
