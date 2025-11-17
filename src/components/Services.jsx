import React, { useMemo, useState } from 'react'
import { Code, PenTool, Megaphone, Camera, Cpu, Database, BarChart3, FileText, Globe, Shield, Wrench, Home, Plug, Paintbrush, Bug, Truck, BookOpen, Scissors, Mic, Headphones } from 'lucide-react'

const freelance = [
  { name: 'Web Development', icon: Code },
  { name: 'UI/UX Design', icon: PenTool },
  { name: 'Digital Marketing', icon: Megaphone },
  { name: 'Photography & Video', icon: Camera },
  { name: 'AI & ML', icon: Cpu },
  { name: 'Data Science', icon: Database },
  { name: 'Analytics & BI', icon: BarChart3 },
  { name: 'Content Writing', icon: FileText },
  { name: 'SEO & SEM', icon: Globe },
  { name: 'Cybersecurity', icon: Shield },
]

const local = [
  { name: 'Home Repairs', icon: Wrench },
  { name: 'House Cleaning', icon: Home },
  { name: 'Electricians', icon: Plug },
  { name: 'Painting', icon: Paintbrush },
  { name: 'Pest Control', icon: Bug },
  { name: 'Movers & Packers', icon: Truck },
  { name: 'Tutors', icon: BookOpen },
  { name: 'Salon at Home', icon: Scissors },
  { name: 'Voice & Audio', icon: Mic },
  { name: 'Music Lessons', icon: Headphones },
]

function Pill({ label }) {
  return (
    <span className="text-[10px] uppercase tracking-wide px-2 py-0.5 rounded-full bg-white/10 text-white/70 border border-white/10">
      {label}
    </span>
  )
}

function Card({ item, badge }) {
  const Icon = item.icon
  return (
    <div className="group relative rounded-2xl p-4 sm:p-5 bg-white/5 border border-white/10 hover:border-white/20 transition overflow-hidden">
      <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 opacity-0 group-hover:opacity-15 blur-2xl transition pointer-events-none" />
      <div className="flex items-center gap-3">
        <div className="h-11 w-11 rounded-xl flex items-center justify-center bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-indigo-600/20 text-white">
          <Icon className="h-5 w-5" />
        </div>
        <div className="min-w-0">
          <p className="text-sm font-medium text-white truncate">{item.name}</p>
          <div className="mt-1"><Pill label={badge} /></div>
        </div>
      </div>
    </div>
  )
}

export default function Services() {
  const [filter, setFilter] = useState('All')

  const items = useMemo(() => {
    if (filter === 'Freelance') return freelance.map(i => ({ ...i, badge: 'Upwork · Fiverr' }))
    if (filter === 'Local') return local.map(i => ({ ...i, badge: 'UrbanClap · Thumbtack' }))
    return [
      ...freelance.map(i => ({ ...i, badge: 'Upwork · Fiverr' })),
      ...local.map(i => ({ ...i, badge: 'UrbanClap · Thumbtack' })),
    ]
  }, [filter])

  const tabs = ['All', 'Freelance', 'Local']

  return (
    <section className="relative bg-[#0b0b14] py-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="mx-auto max-w-6xl h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            All services in one place
          </h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">
            Browse popular categories from global freelancing and trusted local professionals — unified in a single marketplace.
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-8 flex items-center justify-center">
          <div className="inline-flex rounded-xl border border-white/10 bg-white/5 p-1">
            {tabs.map(t => {
              const active = t === filter
              return (
                <button
                  key={t}
                  onClick={() => setFilter(t)}
                  className={`px-3 sm:px-4 py-2 text-sm rounded-lg transition ${
                    active
                      ? 'bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 text-white shadow-lg shadow-indigo-900/30'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {t}
                </button>
              )
            })}
          </div>
        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-4 sm:gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          {items.map((item, idx) => (
            <Card key={idx} item={item} badge={item.badge} />
          ))}
        </div>

        {/* Note */}
        <div className="mt-10 text-center text-white/60 text-sm">
          Looking for something specific? Use search or tell us what you need — we’ll match you instantly.
        </div>
      </div>
    </section>
  )
}
