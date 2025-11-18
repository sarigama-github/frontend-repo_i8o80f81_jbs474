import React from 'react'
import { Search, Calendar, Shield } from 'lucide-react'

const steps = [
  {
    step: 'Step 1',
    title: 'Search or post what you need',
    desc:
      'Tell us the outcome you want. We match you with top freelancers, nearby pros, or the perfect stay.',
    icon: Search,
    img:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop',
  },
  {
    step: 'Step 2',
    title: 'Compare, chat, and schedule',
    desc:
      'Review profiles and ratings, align on scope and dates, then confirm in one click.',
    icon: Calendar,
    img:
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop',
  },
  {
    step: 'Step 3',
    title: 'Track progress and pay safely',
    desc:
      'Milestones, escrow, and insured bookings keep every project and trip protected.',
    icon: Shield,
    img:
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop',
  },
]

function Showcase() {
  return (
    <section className="relative bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* How it works */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            How it works
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            From finding the right pro or place to booking and paying securely — everything is streamlined.
          </p>
        </div>

        <div className="mt-10 grid lg:grid-cols-3 gap-6">
          {steps.map((s, i) => {
            const Icon = s.icon
            return (
              <div
                key={i}
                className="group relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-md transition"
              >
                {/* Background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105 opacity-80"
                  style={{ backgroundImage: `url(${s.img})` }}
                />
                {/* Gradient overlays for readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/40 to-white" />

                {/* Content */}
                <div className="relative p-6">
                  <div className="flex items-start gap-3">
                    <div className="h-11 w-11 rounded-xl flex items-center justify-center bg-white text-slate-900 border border-slate-200 shadow-sm">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-700">{s.step}</p>
                      <h3 className="text-xl font-semibold text-slate-900 mt-1">{s.title}</h3>
                      <p className="text-slate-700 text-sm mt-2 max-w-md">{s.desc}</p>
                    </div>
                  </div>

                  <div className="mt-5">
                    <button className="text-sm font-medium text-indigo-600 hover:text-indigo-700">Learn more →</button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Trust bar */}
        <div className="mt-12 grid sm:grid-cols-3 gap-4">
          {[
            { label: 'Customer satisfaction', value: '4.9/5' },
            { label: 'Bookings protected', value: '100% escrow' },
            { label: 'Verified professionals', value: '40k+' },
          ].map((m, i) => (
            <div key={i} className="rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm">
              <p className="text-sm text-slate-600">{m.label}</p>
              <p className="mt-1 text-xl font-semibold text-slate-900">{m.value}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
            One account. Endless possibilities.
          </h3>
          <p className="text-slate-600 mt-3 max-w-2xl mx-auto">
            Whether you need a logo, a weekend getaway, or a plumber tomorrow morning — it all starts here.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <button className="px-5 py-3 rounded-lg text-white font-semibold bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 hover:opacity-90 transition shadow-lg/30">Get Started Free</button>
            <button className="px-5 py-3 rounded-lg text-slate-700 hover:text-slate-900 border border-slate-200 hover:border-slate-300 transition">Talk to sales</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Showcase
