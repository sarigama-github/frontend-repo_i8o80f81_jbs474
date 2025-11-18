import React, { useMemo, useState } from 'react'
import { Code, PenTool, Megaphone, Camera, Cpu, Database, BarChart3, FileText, Globe, Shield, Wrench, Home, Plug, Paintbrush, Bug, Truck, BookOpen, Scissors, Mic, Headphones } from 'lucide-react'

// Representative imagery for each category (royalty-free Unsplash pics)
const freelance = [
  { name: 'Web Development', icon: Code, img: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1400&auto=format&fit=crop' },
  { name: 'UI/UX Design', icon: PenTool, img: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?q=80&w=1400&auto=format&fit=crop' },
  { name: 'Digital Marketing', icon: Megaphone, img: 'https://images.unsplash.com/photo-1556610964-7f4aa95d2d19?q=80&w=1400&auto=format&fit=crop' },
  { name: 'Photography & Video', icon: Camera, img: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1400&auto=format&fit=crop' },
  { name: 'AI & ML', icon: Cpu, img: 'https://images.unsplash.com/photo-1555252586-9f6254f1d1c5?q=80&w=1400&auto=format&fit=crop' },
  { name: 'Data Science', icon: Database, img: 'https://images.unsplash.com/photo-1551281044-8b39f76a3e59?q=80&w=1400&auto=format&fit=crop' },
  { name: 'Analytics & BI', icon: BarChart3, img: 'https://images.unsplash.com/photo-1543286386-2e659306cd6c?q=80&w=1400&auto=format&fit=crop' },
  { name: 'Content Writing', icon: FileText, img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1400&auto=format&fit=crop' },
  { name: 'SEO & SEM', icon: Globe, img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1400&auto=format&fit=crop' },
  { name: 'Cybersecurity', icon: Shield, img: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=1400&auto=format&fit=crop' },
]

const local = [
  { name: 'Home Repairs', icon: Wrench, img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1400&auto=format&fit=crop' },
  { name: 'House Cleaning', icon: Home, img: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1400&auto=format&fit=crop' },
  { name: 'Electricians', icon: Plug, img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1400&auto=format&fit=crop' },
  { name: 'Painting', icon: Paintbrush, img: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1400&auto=format&fit=crop' },
  { name: 'Pest Control', icon: Bug, img: 'https://images.unsplash.com/photo-1573496529574-be85d6a60704?q=80&w=1400&auto=format&fit=crop' },
  { name: 'Movers & Packers', icon: Truck, img: 'https://images.unsplash.com/photo-1582582621951-cbca1f6e4e7d?q=80&w=1400&auto=format&fit=crop' },
  { name: 'Tutors', icon: BookOpen, img: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1400&auto=format&fit=crop' },
  { name: 'Salon at Home', icon: Scissors, img: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1400&auto=format&fit=crop' },
  { name: 'Voice & Audio', icon: Mic, img: 'https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?q=80&w=1400&auto=format&fit=crop' },
  { name: 'Music Lessons', icon: Headphones, img: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?q=80&w=1400&auto=format&fit=crop' },
]

function Pill({ label }) {
  return (
    <span className="text-[10px] uppercase tracking-wide px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
      {label}
    </span>
  )
}

function Card({ item, badge }) {
  const Icon = item.icon
  return (
    <div className="group relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-md transition">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105 opacity-80"
        style={{ backgroundImage: `url(${item.img})` }}
      />
      {/* Gradient overlays for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/40 to-white" />

      {/* Content */}
      <div className="relative p-4 sm:p-5 flex items-center gap-3">
        <div className="h-11 w-11 rounded-xl flex items-center justify-center bg-white text-slate-900 border border-slate-200 shadow-sm">
          <Icon className="h-5 w-5" />
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-slate-900 truncate">{item.name}</p>
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

  // Build animated strip assets using first few images from each list
  const stripImages = [
    ...freelance.slice(0, 6).map(s => s.img),
    ...local.slice(0, 6).map(s => s.img),
  ]

  return (
    <section className="relative bg-white py-20">
      <style>{`
        @keyframes marqueeX {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      {/* Top divider */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="mx-auto max-w-6xl h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            All services in one place
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            Browse popular categories from global freelancing and trusted local professionals — unified in a single marketplace.
          </p>
        </div>

        {/* Animated image ribbon showcasing services */}
        <div className="relative mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white pointer-events-none" />
          <div className="flex gap-3 p-3" style={{ width: '200%' }}>
            {[0,1].map((dup) => (
              <div key={dup} className="flex gap-3" style={{ animation: 'marqueeX 25s linear infinite' }}>
                {stripImages.map((src, idx) => (
                  <div key={`${dup}-${idx}`} className="h-20 sm:h-24 w-36 sm:w-44 rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
                    <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: `url(${src})` }} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-8 flex items-center justify-center">
          <div className="inline-flex rounded-xl border border-slate-200 bg-slate-100 p-1">
            {tabs.map(t => {
              const active = t === filter
              return (
                <button
                  key={t}
                  onClick={() => setFilter(t)}
                  className={`px-3 sm:px-4 py-2 text-sm rounded-lg transition ${
                    active
                      ? 'bg-white text-slate-900 shadow-sm border border-slate-200'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-white/60'
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
        <div className="mt-10 text-center text-slate-600 text-sm">
          Looking for something specific? Use search or tell us what you need — we’ll match you instantly.
        </div>
      </div>
    </section>
  )
}
