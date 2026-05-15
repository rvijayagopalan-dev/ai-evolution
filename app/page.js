import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import EraCard from '../components/EraCard'
import NextFrontier from '../components/NextFrontier'
import { eras } from '../components/data'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen">
      <NavBar />
      <Hero />

      {/* Eras Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-600 mb-3">
            The Seven Eras
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Evolution by Breakthrough
          </h2>
        </div>

        {/* Timeline vertical line (desktop) */}
        <div className="relative">
          {/* Centre connector line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-blue-600/20 via-violet-600/20 to-indigo-600/20" />

          <div className="space-y-12">
            {eras.map((era, index) => (
              <EraCard key={era.id} era={era} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Next Frontier */}
      <NextFrontier />

      {/* Reference Image */}
      <section id="reference" className="max-w-6xl mx-auto px-4 pb-24">
        <div className="text-center mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-600 mb-3">
            Reference
          </p>
          <h2 className="text-2xl font-bold text-white">Complete Evolution Map</h2>
          <p className="text-sm text-slate-500 mt-2">
            The original AI Evolution architecture diagram
          </p>
        </div>
        <div className="rounded-2xl overflow-hidden border border-slate-800">
          <Image
            src="/AI_Evolution.png"
            alt="AI Evolution complete architecture map"
            width={1600}
            height={900}
            className="w-full h-auto"
            priority={false}
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950">
        <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center text-xs font-black text-white">
              AI
            </div>
            <span className="text-sm text-slate-400">
              AI Evolution{' '}
              <span className="text-slate-600">v1.0</span>
            </span>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-xs text-slate-600">
              2017 → 2030+ · 7 Eras · Enterprise AI
            </span>
          </div>
        </div>
      </footer>
    </main>
  )
}
