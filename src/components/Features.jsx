import React from 'react'

const cards = [
  {
    tag: 'Freelance Talent',
    title: 'Find & hire experts on-demand',
    desc: 'Browse vetted freelancers for design, development, marketing, writing and more with secure contracts and escrow.',
    points: ['AI-powered matching', 'Milestones & escrow', 'Verified reviews', '1-click contracts'],
    img: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1400&auto=format&fit=crop',
  },
  {
    tag: 'Stays & Experiences',
    title: 'Book unique homes and adventures',
    desc: 'Discover curated stays, from city lofts to beach villas, plus local experiences hosted by passionate creators.',
    points: ['Instant booking', 'Host verification', 'Flexible cancellation', '24/7 support'],
    img: 'https://images.unsplash.com/photo-1505691723518-36a5ac3b2d52?q=80&w=1400&auto=format&fit=crop',
  },
  {
    tag: 'Local Services',
    title: 'Trusted pros for everyday needs',
    desc: 'Electricians, tutors, fitness coaches, photographers and more — reviewed, insured, and nearby.',
    points: ['Background checks', 'Upfront pricing', 'Same-day service', 'Satisfaction guarantee'],
    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1400&auto=format&fit=crop',
  },
]

function Features() {
  return (
    <section id="features" className="relative bg-white py-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="mx-auto max-w-6xl h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Everything in one marketplace
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            The power of three platforms combined with a seamless booking and hiring flow.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <div
              key={i}
              className="group relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-md transition"
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105 opacity-70"
                style={{ backgroundImage: `url(${c.img})` }}
              />
              {/* Overlays for readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/40 to-white" />

              {/* Content */}
              <div className="relative p-6">
                <p className="text-xs font-medium text-slate-700 backdrop-blur-[1px]">{c.tag}</p>
                <h3 className="mt-2 text-xl font-semibold text-slate-900">{c.title}</h3>
                <p className="mt-2 text-sm text-slate-700 max-w-md">{c.desc}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-800">
                  {c.points.map((p, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600" />
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-5">
                  <button className="text-sm font-medium text-indigo-600 hover:text-indigo-700">Learn more →</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
