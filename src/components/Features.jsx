import React from 'react'

const cards = [
  {
    tag: 'Freelance Talent',
    title: 'Find & hire experts on-demand',
    desc: 'Browse vetted freelancers for design, development, marketing, writing and more with secure contracts and escrow.',
    points: ['AI-powered matching', 'Milestones & escrow', 'Verified reviews', '1-click contracts'],
  },
  {
    tag: 'Stays & Experiences',
    title: 'Book unique homes and adventures',
    desc: 'Discover curated stays, from city lofts to beach villas, plus local experiences hosted by passionate creators.',
    points: ['Instant booking', 'Host verification', 'Flexible cancellation', '24/7 support'],
  },
  {
    tag: 'Local Services',
    title: 'Trusted pros for everyday needs',
    desc: 'Electricians, tutors, fitness coaches, photographers and more — reviewed, insured, and nearby.',
    points: ['Background checks', 'Upfront pricing', 'Same-day service', 'Satisfaction guarantee'],
  },
]

function Features() {
  return (
    <section id="features" className="relative bg-[#0b0b14] py-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="mx-auto max-w-6xl h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Everything in one marketplace
          </h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">
            The power of three platforms combined with a seamless booking and hiring flow.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <div
              key={i}
              className="group relative rounded-2xl p-6 bg-white/5 border border-white/10 hover:border-white/20 transition overflow-hidden"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 opacity-0 group-hover:opacity-20 blur-2xl transition pointer-events-none" />
              <p className="text-xs font-medium text-white/70">{c.tag}</p>
              <h3 className="mt-2 text-xl font-semibold text-white">{c.title}</h3>
              <p className="mt-2 text-sm text-white/70">{c.desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                {c.points.map((p, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600" />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-5">
                <button className="text-sm font-medium text-white/90 hover:text-white">Learn more →</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
