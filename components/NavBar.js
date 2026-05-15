'use client'

import { eras } from './data'

export default function NavBar() {
  return (
    <nav className="sticky top-0 z-50 bg-slate-950/90 border-b border-slate-800/80 glass">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 flex-shrink-0">
          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center text-xs font-black text-white">
            AI
          </div>
          <span className="text-sm font-bold text-white">AI Evolution</span>
          <span className="text-xs bg-slate-800 border border-slate-700 text-slate-500 px-1.5 py-0.5 rounded-md font-mono">
            v1.0
          </span>
        </div>

        <div className="hidden md:flex items-center gap-1 overflow-x-auto">
          {eras.map(era => (
            <a
              key={era.id}
              href={`#era-${era.id}`}
              className="flex-shrink-0 text-xs px-2 py-1 rounded-lg text-slate-500 hover:text-white transition-colors duration-150"
              style={{ '--accent': era.accent }}
            >
              <span className="font-mono">{era.number}</span>
            </a>
          ))}
        </div>

        <a
          href="#reference"
          className="flex-shrink-0 text-xs bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 px-3 py-1.5 rounded-lg transition-colors duration-150"
        >
          Reference
        </a>
      </div>
    </nav>
  )
}
