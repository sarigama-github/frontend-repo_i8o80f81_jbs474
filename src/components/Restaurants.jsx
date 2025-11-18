import React from 'react'
import { Star, Timer, Navigation, BadgePercent, ShoppingCart } from 'lucide-react'

// Sample data — replace Unsplash with brand assets later
const restaurants = [
  {
    id: 'r1',
    name: 'Addis Gourmet Hotel',
    rating: 4.7,
    reviews: '1.2k',
    time: '25–35 min',
    distance: '2.1 km',
    cuisines: ['Ethiopian', 'Fast Food', 'Hotel Café'],
    status: 'Open Now',
    promo: '10% OFF',
    img: 'https://images.unsplash.com/photo-1541542684-4a9c8f2edc98?q=80&w=2000&auto=format&fit=crop',
    logo: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=256&auto=format&fit=crop',
    price: '$$'
  },
  {
    id: 'r2',
    name: 'Blue Nile Terrace',
    rating: 4.6,
    reviews: '980',
    time: '20–30 min',
    distance: '1.4 km',
    cuisines: ['African', 'Grill', 'Café'],
    status: 'Open Now',
    promo: 'Free Delivery',
    img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2000&auto=format&fit=crop',
    logo: 'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=256&auto=format&fit=crop',
    price: '$$'
  }
]

const gridRestaurants = [
  {
    id: 'g1',
    name: 'The Spice House',
    rating: 4.5,
    time: '20–30m',
    price: '₦₦',
    cuisine: 'African',
    img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop',
    promo: '10% OFF'
  },
  {
    id: 'g2',
    name: 'Zen Noodles',
    rating: 4.4,
    time: '15–25m',
    price: '$',
    cuisine: 'Asian',
    img: 'https://images.unsplash.com/photo-1542444459-db63c9f4b3a6?q=80&w=1400&auto=format&fit=crop',
    promo: 'Free Delivery'
  },
  {
    id: 'g3',
    name: 'Café Indigo',
    rating: 4.8,
    time: '10–20m',
    price: '$$',
    cuisine: 'Café',
    img: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1400&auto=format&fit=crop',
    promo: null
  },
  {
    id: 'g4',
    name: 'Sahara Grill',
    rating: 4.6,
    time: '30–40m',
    price: '$$$',
    cuisine: 'Grill',
    img: 'https://images.unsplash.com/photo-1428660386617-8d277e7deaf2?q=80&w=1400&auto=format&fit=crop',
    promo: '15% OFF'
  }
]

const foodItems = [
  {
    id: 'f1',
    name: 'Beef Tibs Special',
    desc: 'Tender beef sautéed with spices and peppers',
    price: 'ETB 250',
    img: 'https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=1600&auto=format&fit=crop'
  },
  {
    id: 'f2',
    name: 'Shiro Wot',
    desc: 'Chickpea stew with berbere and niter kibbeh',
    price: 'ETB 180',
    img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1600&auto=format&fit=crop'
  },
  {
    id: 'f3',
    name: 'Injera Platter',
    desc: 'Mixed veggie and meat combo on fluffy injera',
    price: 'ETB 320',
    img: 'https://images.unsplash.com/photo-1604908554049-1e04cfeacb2e?q=80&w=1600&auto=format&fit=crop'
  }
]

const horizontalFoods = [
  {
    id: 'h1',
    name: 'Pizza Margherita',
    desc: 'Classic Italian cheese pizza',
    rating: 4.6,
    tag: 'Most Ordered',
    price: 'ETB 180',
    img: 'https://images.unsplash.com/photo-1548365328-9f547fb0953d?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'h2',
    name: 'Grilled Chicken Bowl',
    desc: 'Protein-packed with herbs and veggies',
    rating: 4.7,
    tag: 'High Rated',
    price: 'ETB 260',
    img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'h3',
    name: 'Vegan Buddha Bowl',
    desc: 'Roasted veggies, quinoa and tahini',
    rating: 4.5,
    tag: 'Healthy Pick',
    price: 'ETB 220',
    img: 'https://images.unsplash.com/photo-1505577058444-a3dab90d4253?q=80&w=1200&auto=format&fit=crop'
  }
]

function StatusChip({ status }) {
  const open = status?.toLowerCase().includes('open')
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${open ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-rose-50 text-rose-700 border-rose-200'}`}>
      {open ? 'Open Now' : 'Closed'}
    </span>
  )
}

function PromoChip({ label }) {
  if (!label) return null
  return (
    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 text-white shadow-sm">
      <BadgePercent className="h-3.5 w-3.5" />
      {label}
    </span>
  )
}

function HeroRestaurantCard({ data }) {
  return (
    <div className="group relative rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-md transition">
      {/* Background */}
      <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-80" style={{ backgroundImage: `url(${data.img})` }} />
      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/40 to-white" />

      {/* Content */}
      <div className="relative p-6 sm:p-8 flex flex-col gap-4">
        {/* Logo + Name */}
        <div className="flex items-end gap-3">
          <div className="h-14 w-14 rounded-xl overflow-hidden ring-2 ring-white bg-white border border-slate-200 shadow-sm">
            <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: `url(${data.logo})` }} />
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">{data.name}</h3>
            <div className="mt-1 flex items-center gap-3 text-sm text-slate-700">
              <span className="inline-flex items-center gap-1"><Star className="h-4 w-4 text-yellow-500" /> {data.rating} <span className="text-slate-500">({data.reviews})</span></span>
              <span className="text-slate-400">•</span>
              <span className="inline-flex items-center gap-1"><Timer className="h-4 w-4" /> {data.time}</span>
              <span className="text-slate-400">•</span>
              <span className="inline-flex items-center gap-1"><Navigation className="h-4 w-4" /> {data.distance}</span>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          {data.cuisines.map((t) => (
            <span key={t} className="px-2 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700">{t}</span>
          ))}
        </div>

        {/* Footer chips */}
        <div className="mt-2 flex items-center justify-between">
          <StatusChip status={data.status} />
          <PromoChip label={data.promo} />
        </div>
      </div>
    </div>
  )
}

function CompactRestaurantCard({ r }) {
  return (
    <div className="group rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-md transition">
      <div className="relative">
        <div className="aspect-square w-full bg-cover bg-center opacity-90" style={{ backgroundImage: `url(${r.img})` }} />
        {r.promo && (
          <div className="absolute top-2 right-2"><PromoChip label={r.promo} /></div>
        )}
      </div>
      <div className="p-4">
        <p className="font-semibold truncate text-slate-900">{r.name}</p>
        <div className="mt-1 flex items-center gap-2 text-sm text-slate-700">
          <span className="inline-flex items-center gap-1"><Star className="h-4 w-4 text-yellow-500" /> {r.rating}</span>
          <span className="text-slate-400">•</span>
          <span>{r.time}</span>
        </div>
        <div className="mt-1 text-sm text-slate-600">{r.price} <span className="text-slate-400">•</span> {r.cuisine}</div>
      </div>
    </div>
  )
}

function FeaturedFoodCard({ f }) {
  return (
    <div className="group relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-md transition">
      <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105 opacity-90" style={{ backgroundImage: `url(${f.img})` }} />
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/40 to-white" />
      <div className="relative p-5">
        <p className="font-semibold text-lg text-slate-900">{f.name}</p>
        <p className="mt-1 text-sm text-slate-700 max-w-sm">{f.desc}</p>
        <div className="mt-4 flex items-center justify-between">
          <p className="font-semibold text-slate-900">{f.price}</p>
          <button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 transition shadow-sm">
            <ShoppingCart className="h-4 w-4" />
            <span className="text-sm">Add</span>
          </button>
        </div>
      </div>
    </div>
  )
}

function HorizontalFoodCard({ item }) {
  return (
    <div className="group flex min-w-[320px] sm:min-w-[380px] gap-4 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm hover:shadow-md transition">
      <div className="h-24 w-24 rounded-xl overflow-hidden flex-shrink-0">
        <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: `url(${item.img})` }} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-semibold truncate text-slate-900">{item.name}</p>
        <p className="mt-1 text-sm text-slate-700 line-clamp-2">{item.desc}</p>
        <div className="mt-2 flex items-center justify-between">
          <div className="text-sm text-slate-700 inline-flex items-center gap-2">
            <span className="inline-flex items-center gap-1"><Star className="h-4 w-4 text-yellow-500" /> {item.rating}</span>
            <span className="text-slate-400">•</span>
            <span>{item.tag}</span>
          </div>
          <div className="flex items-center gap-3">
            <p className="font-semibold text-slate-900 whitespace-nowrap">{item.price}</p>
            <button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 transition shadow-sm">
              <ShoppingCart className="h-4 w-4" />
              <span className="text-sm">Add</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Restaurants() {
  return (
    <section className="relative bg-white py-20">
      {/* Divider */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="mx-auto max-w-6xl h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Hotels & Restaurants
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            Explore top hotel dining and local favorites. Order in or reserve a table — fast, reliable, delightful.
          </p>
        </div>

        {/* HERO RESTAURANT CARD */}
        <div className="mt-10 grid gap-6">
          {restaurants.map((r) => (
            <HeroRestaurantCard key={r.id} data={r} />
          ))}
        </div>

        {/* COMPACT GRID */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-4">
            <p className="text-lg font-semibold text-slate-900">All Restaurants</p>
            <button className="text-sm text-slate-700 hover:text-slate-900">See all →</button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {gridRestaurants.map((r) => (
              <CompactRestaurantCard key={r.id} r={r} />
            ))}
          </div>
        </div>

        {/* FEATURED FOOD ITEMS */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-4">
            <p className="text-lg font-semibold text-slate-900">Popular Near You</p>
            <button className="text-sm text-slate-700 hover:text-slate-900">View menu →</button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {foodItems.map((f) => (
              <FeaturedFoodCard key={f.id} f={f} />
            ))}
          </div>
        </div>

        {/* HORIZONTAL SCROLLER */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-3">
            <p className="text-lg font-semibold text-slate-900">Best Sellers</p>
          </div>
          <div className="relative -mx-4 px-4">
            <div className="overflow-x-auto no-scrollbar">
              <div className="flex gap-4">
                {horizontalFoods.map((item) => (
                  <HorizontalFoodCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
