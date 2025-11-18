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
    <section className="relative bg-white py-20">
      {/* Subtle divider */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="mx-auto max-w-6xl h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 text-xs font-medium text-slate-700 bg-slate-100 border border-slate-200 rounded-full px-3 py-1">
            <span className="h-2 w-2 rounded-full bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600" />
            Logistics & Fulfillment
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-900">
            Move anything, anywhere — reliably
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            On-demand couriers, last‑mile delivery, and nationwide fulfillment built into the platform. Track every step from pickup to proof‑of‑delivery.
          </p>
        </div>

        {/* Feature grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {logisticsCards.map((c, i) => {
            const Icon = c.icon
            return (
              <div key={i} className="group relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-md transition">
                {/* Background image */}
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url(${c.img})` }} />
                {/* Overlay for clarity */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/0 via-slate-900/10 to-slate-900/25" />
                {/* Content */}
                <div className="relative p-6">
                  <div className="h-11 w-11 rounded-xl flex items-center justify-center bg-white text-slate-900 border border-slate-200 shadow-sm">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-slate-900">{c.title}</h3>
                  <p className="mt-2 text-sm text-slate-800">{c.desc}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Tracking timeline */}
        <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3 text-slate-800">
            <div className="h-10 w-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-sm">
              <Truck className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm">Live delivery timeline</p>
              <p className="text-xs text-slate-600">Pickup → In transit → Out for delivery → Delivered</p>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-4 gap-4">
            {['Pickup', 'In Transit', 'Out for Delivery', 'Delivered'].map((stage, idx) => (
              <div key={stage} className="relative">
                <div className={`h-2 rounded-full ${idx < 3 ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600' : 'bg-slate-200'}`} />
                <p className="mt-2 text-xs text-slate-600">{stage}</p>
              </div>
            ))}
          </div>

          {/* Partner badges */}
          <div className="mt-6 flex flex-wrap items-center gap-2">
            {['DHL Express', 'FedEx', 'UPS', 'Local Couriers'].map((p) => (
              <span key={p} className="text-[11px] px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700">{p}</span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <button className="px-5 py-3 rounded-lg text-white font-semibold bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 hover:opacity-90 transition shadow-lg/30">
            Ship with us
          </button>
        </div>
      </div>
    </section>
  )
}
