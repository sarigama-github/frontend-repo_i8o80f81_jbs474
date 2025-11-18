import React from 'react'
import { CheckCircle, BadgeCheck, MapPin, Star, Leaf, Zap, Timer, Package } from 'lucide-react'

// Card 1 — Farmer Product Snapshot Card
function FarmerProductSnapshotCard({ item }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200 hover:ring-slate-300 transition shadow-sm hover:shadow-md">
      <div className="relative">
        <img src={item.img} alt={item.name} className="h-56 w-full object-cover transition duration-500 group-hover:scale-105" />
        {/* Overlay tuned for clarity (remove milky wash) */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/0 via-slate-900/10 to-slate-900/20" />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold tracking-tight text-slate-900">{item.name}</h3>
            <div className="mt-1 text-sm text-slate-800">{item.price} <span className="text-slate-600">{item.unit}</span></div>
            <div className="mt-2 inline-flex items-center gap-2 text-xs">
              <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200">{item.tag}</span>
            </div>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between border-t border-slate-200 pt-3">
          <div className="flex items-center gap-2 text-sm text-slate-800">
            <span className="inline-flex items-center gap-1"><BadgeCheck className="h-4 w-4 text-emerald-500" /> {item.farmer}</span>
            <span className="text-slate-400">•</span>
            <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4 text-sky-500" /> {item.location}</span>
          </div>
          <div className="flex gap-2">
            <button className="px-3 py-1.5 rounded-lg bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 text-sm font-medium text-white hover:opacity-90">Add to Cart</button>
            <button className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 text-sm">Details</button>
          </div>
        </div>
      </div>
    </div>
  )
}

// Card 2 — Farmer Profile + Product Highlights
function FarmerProfileCard({ farmer }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200 hover:ring-slate-300 transition shadow-sm hover:shadow-md p-5">
      <div className="flex items-start gap-4">
        <img src={farmer.avatar} alt={farmer.name} className="h-16 w-16 rounded-xl object-cover ring-2 ring-white shadow" />
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold tracking-tight text-slate-900">{farmer.name}</h3>
            <CheckCircle className="h-4 w-4 text-emerald-500" />
          </div>
          <div className="mt-1 text-sm text-slate-800">{farmer.type}</div>
          <div className="mt-2 inline-flex items-center gap-2 text-sm text-slate-800">
            <Star className="h-4 w-4 text-yellow-500" />
            <span>{farmer.rating}</span>
            <span className="text-slate-600">({farmer.reviews} reviews)</span>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div className="flex -space-x-3">
          {farmer.topProducts.map((p, idx) => (
            <img key={idx} src={p} alt="product" className="h-12 w-12 rounded-full object-cover ring-2 ring-white shadow" />
          ))}
        </div>
        <button className="mt-4 w-full rounded-lg bg-white border border-slate-200 hover:bg-slate-50 py-2 text-sm font-medium text-slate-900 shadow-sm">View Full Farm</button>
      </div>
    </div>
  )
}

// Card 3 — Product Grid Card with Badges & Metrics
function ProductMetricsCard({ product }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200 hover:ring-slate-300 transition shadow-sm hover:shadow-md">
      <div className="relative">
        <img src={product.img} alt={product.name} className="h-44 w-full object-cover transition duration-500 group-hover:scale-105" />
        {/* Overlay tuned for clarity */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/0 via-slate-900/10 to-slate-900/20" />
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          {product.badges.map((b, i) => (
            <span key={i} className="px-2 py-1 rounded-full text-xs bg-white border border-slate-200 shadow-sm">{b}</span>
          ))}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-base font-semibold text-slate-900">{product.name}</h3>
        <div className="mt-1 text-sm text-slate-800">{product.price} <span className="text-slate-600">{product.unit}</span></div>
        <div className="mt-3 grid grid-cols-3 gap-2 text-xs text-slate-800">
          <div className="flex items-center gap-1"><Leaf className="h-4 w-4 text-emerald-600" /> {product.metrics.moisture}%</div>
          <div className="flex items-center gap-1"><Package className="h-4 w-4 text-sky-600" /> {product.metrics.weight}</div>
          <div className="flex items-center gap-1"><Zap className="h-4 w-4 text-purple-600" /> {product.metrics.grade}</div>
        </div>
        <div className="mt-4 flex items-center justify-between border-t border-slate-200 pt-3">
          <div className="flex items-center gap-2 text-sm text-slate-800">
            <Timer className="h-4 w-4 text-indigo-600" /> {product.delivery}
          </div>
          <div className="text-sm text-slate-700">Seller: <span className="font-medium text-slate-900">{product.seller}</span></div>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <button className="px-3 py-1.5 rounded-lg bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 text-sm font-medium text-white hover:opacity-90">Add</button>
          <button className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 text-sm">View More</button>
        </div>
      </div>
    </div>
  )
}

// Card 4 — Farm Category Card (Bulk, Animal, Crop)
function FarmCategoryCard({ category }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl ring-1 ring-slate-200 hover:ring-slate-300 transition shadow-sm hover:shadow-md bg-white">
      <img src={category.img} alt={category.name} className="h-56 w-full object-cover transition duration-500 group-hover:scale-105" />
      {/* Overlay tuned for clarity */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/0 via-slate-900/10 to-slate-900/25" />
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-slate-700">{category.farm}</div>
            <h3 className="text-xl font-semibold text-slate-900">{category.name}</h3>
            <p className="mt-1 text-sm text-slate-800">{category.desc}</p>
          </div>
          <span className="px-2.5 py-1 rounded-full text-xs bg-white border border-slate-200 shadow-sm">{category.supply}</span>
        </div>
      </div>
    </div>
  )
}

export default function Farmers() {
  const productSnapshots = [
    {
      id: 1,
      name: 'Organic Tomatoes',
      price: '$3.20',
      unit: '/ kg',
      tag: 'Fresh',
      farmer: 'Adewale Farms',
      location: '12 km',
      img: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?q=80&w=1600&auto=format&fit=crop',
    },
    {
      id: 2,
      name: 'Free-range Eggs',
      price: '$4.50',
      unit: '/ dozen',
      tag: 'Grade A',
      farmer: 'Green Valley',
      location: '8 km',
      img: 'https://images.unsplash.com/photo-1517957754645-708b2bfb364f?q=80&w=1600&auto=format&fit=crop',
    },
    {
      id: 3,
      name: 'Raw Honey',
      price: '$12.00',
      unit: '/ 500ml',
      tag: 'Organic',
      farmer: 'Suncrest Apiary',
      location: '24 km',
      img: 'https://images.unsplash.com/photo-1484910292437-025e5d13ce87?q=80&w=1600&auto=format&fit=crop',
    },
    {
      id: 4,
      name: 'Yam Tubers',
      price: '$9.00',
      unit: '/ bundle',
      tag: 'New Harvest',
      farmer: 'Kwara Roots',
      location: '15 km',
      img: 'https://images.unsplash.com/photo-1586201375761-83865001e31b?q=80&w=1600&auto=format&fit=crop',
    },
  ]

  const farmerProfiles = [
    {
      id: 1,
      name: 'Nkechi Okoro',
      type: 'Vegetables & Tubers',
      rating: 4.8,
      reviews: 312,
      avatar: 'https://images.unsplash.com/photo-1593879081672-2a9ffc5a0e2b?q=80&w=800&auto=format&fit=crop',
      topProducts: [
        'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1447175008436-054170c2e979?q=80&w=400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1511688878353-3a2f5be94cd4?q=80&w=400&auto=format&fit=crop',
      ],
    },
    {
      id: 2,
      name: 'Adewale Farms',
      type: 'Poultry & Dairy',
      rating: 4.6,
      reviews: 189,
      avatar: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=800&auto=format&fit=crop',
      topProducts: [
        'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1526312426976-593c2b999fb1?q=80&w=400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1495197359483-d092478c170a?q=80&w=400&auto=format&fit=crop',
      ],
    },
  ]

  const productMetrics = [
    {
      id: 1,
      name: 'Sweet Pineapples',
      price: '$5.00',
      unit: '/ piece',
      img: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?q=80&w=1600&auto=format&fit=crop',
      badges: ['Organic', 'New Harvest'],
      metrics: { moisture: 82, weight: '1.8kg', grade: 'A' },
      delivery: 'Delivered today',
      seller: 'Green Valley Farm',
    },
    {
      id: 2,
      name: 'Maize (Corn)',
      price: '$2.80',
      unit: '/ kg',
      img: 'https://images.unsplash.com/photo-1560807707-8cc77767d783?q=80&w=1600&auto=format&fit=crop',
      badges: ['Limited Stock'],
      metrics: { moisture: 12, weight: '50kg', grade: 'B+' },
      delivery: '2-3 days',
      seller: 'Northern Belt Co-op',
    },
    {
      id: 3,
      name: 'Cassava Flour',
      price: '$14.00',
      unit: '/ 5kg',
      img: 'https://images.unsplash.com/photo-1627740653389-96dc177a64e6?q=80&w=1600&auto=format&fit=crop',
      badges: ['Gluten-free'],
      metrics: { moisture: 10, weight: '5kg', grade: 'A-' },
      delivery: 'Delivered tomorrow',
      seller: 'Kwara Roots',
    },
  ]

  const farmCategories = [
    {
      id: 1,
      name: 'Crops',
      desc: '20+ fresh produce varieties',
      farm: 'Adewale Farms',
      supply: 'Retail & Wholesale',
      img: 'https://images.unsplash.com/photo-1500937386664-56f3d81d1e9a?q=80&w=1600&auto=format&fit=crop',
    },
    {
      id: 2,
      name: 'Poultry',
      desc: '10+ poultry products available',
      farm: 'Green Valley',
      supply: 'Bulk Orders',
      img: 'https://images.unsplash.com/photo-1584118624012-df056829fbd5?q=80&w=1600&auto=format&fit=crop',
    },
    {
      id: 3,
      name: 'Dairy',
      desc: 'Fresh milk, yogurt, cheese',
      farm: 'Northern Belt Co-op',
      supply: 'Retail',
      img: 'https://images.unsplash.com/photo-1505575972945-33c94ef1d2f2?q=80&w=1600&auto=format&fit=crop',
    },
  ]

  return (
    <section className="relative bg-white py-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="mx-auto max-w-6xl h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-sm uppercase tracking-widest text-slate-500">Farmers & Produce</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">Fresh from local farms</h2>
            <p className="mt-2 text-slate-600 max-w-2xl">Shop trusted farmers, explore categories, and discover fresh, organic, and bulk products for homes and businesses.</p>
          </div>
          <button className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 text-sm font-medium text-white hover:opacity-90">See all</button>
        </div>

        {/* Row 1 — Snapshot products */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productSnapshots.map((item) => (
            <FarmerProductSnapshotCard key={item.id} item={item} />
          ))}
        </div>

        {/* Row 2 — Farmer profiles */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {farmerProfiles.map((farmer) => (
            <FarmerProfileCard key={farmer.id} farmer={farmer} />
          ))}
        </div>

        {/* Row 3 — Product metrics */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productMetrics.map((product) => (
            <ProductMetricsCard key={product.id} product={product} />
          ))}
        </div>

        {/* Row 4 — Categories */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {farmCategories.map((category) => (
            <FarmCategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  )
}
