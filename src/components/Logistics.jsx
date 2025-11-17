import React from 'react'
import { Truck, Package, Map, Clock, Shield } from 'lucide-react'

const logisticsCards = [
  {
    title: 'Real-time tracking',
    desc: 'Live GPS updates with ETA and delivery milestones you can share with clients.',
    icon: Map,
    img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Same-day delivery',
    desc: 'Instant couriers in major cities and scheduled slots for predictable arrivals.',
    icon: Clock,
    img: 'https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Secure & insured',
    desc: 'End-to-end photo proof, ID verification, and insurance options for valuables.',
    icon: Shield,
    img: 'https://images.unsplash.com/photo-1585386959984-a41552231656?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Warehousing & fulfillment',
    desc: 'Store, pick-pack, and ship with smart routing across multi-city hubs.',
    icon: Package,
    img: 'https://images.unsplash.com/photo-1565610128293-58a0acb9bba0?q=80&w=1600&auto=format&fit=crop',
  },
]

export default function Logistics() {
  return (
    <section className="relative bg-[#0b0b14] py-20">
      {/* Subtle divider */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="mx-auto max-w-6xl h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 text-xs font-medium text-white/80 bg-white/5 border border-white/10 rounded-full px-3 py-1">
            <span className="h-2 w-2 rounded-full bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600" />
            Logistics & Fulfillment
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Move anything, anywhere — reliably
          </h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">
            On-demand couriers, last‑mile delivery, and nationwide fulfillment built into the platform. Track every step from pickup to proof‑of‑delivery.
          </p>
        </div>

        {/* Feature grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {logisticsCards.map((c, i) => {
            const Icon = c.icon
            return (
              <div key={i} className="group relative rounded-2xl overflow-hidden border border-white/10 bg-black/40">
                {/* Background image */}
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url(${c.img})` }} />
                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />
                <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-600/0 via-purple-600/0 to-indigo-600/0 opacity-0 group-hover:opacity-20 blur-2xl transition pointer-events-none" />
                {/* Content */}
                <div className="relative p-6">
                  <div className="h-11 w-11 rounded-xl flex items-center justify-center bg-white/10 text-white backdrop-blur-sm border border-white/10">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-white drop-shadow-sm">{c.title}</h3>
                  <p className="mt-2 text-sm text-white/80">{c.desc}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Tracking timeline */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="flex items-center gap-3 text-white/80">
            <div className="h-10 w-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center">
              <Truck className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm">Live delivery timeline</p>
              <p className="text-xs text-white/60">Pickup → In transit → Out for delivery → Delivered</p>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-4 gap-4">
            {['Pickup', 'In Transit', 'Out for Delivery', 'Delivered'].map((stage, idx) => (
              <div key={stage} className="relative">
                <div className={`h-2 rounded-full ${idx < 3 ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600' : 'bg-white/20'}`} />
                <p className="mt-2 text-xs text-white/70">{stage}</p>
              </div>
            ))}
          </div>

          {/* Partner badges */}
          <div className="mt-6 flex flex-wrap items-center gap-2">
            {['DHL Express', 'FedEx', 'UPS', 'Local Couriers'].map((p) => (
              <span key={p} className="text-[11px] px-2.5 py-1 rounded-full bg-black/30 border border-white/10 text-white/80">{p}</span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <button className="px-5 py-3 rounded-lg text-white font-semibold bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 hover:opacity-90 transition shadow-lg shadow-indigo-900/30">
            Ship with us
          </button>
        </div>
      </div>
    </section>
  )
}
