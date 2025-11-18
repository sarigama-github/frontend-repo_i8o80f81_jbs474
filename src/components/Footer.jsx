import React from 'react'

function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600" />
            <span className="text-slate-700 font-semibold">UniConnect</span>
          </div>
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} UniConnect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
