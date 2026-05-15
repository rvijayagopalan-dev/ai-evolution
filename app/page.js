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

      {/* Author section */}
      <section className="border-t border-slate-800 bg-slate-900/40">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-600 mb-3">Author</p>
            <h2 className="text-2xl font-black text-white">About the Author</h2>
          </div>

          <div
            className="max-w-2xl mx-auto rounded-2xl border p-8"
            style={{ borderColor: '#6366f130', backgroundColor: '#6366f108' }}
          >
            {/* Avatar + name */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8">
              <div
                className="flex-shrink-0 w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-black text-white"
                style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899)' }}
              >
                VR
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-xl font-black text-white mb-1">Vijayagopalan Raveendran</h3>
                <p className="text-sm text-slate-400 mb-3">Enterprise AI Architect · AI Evolution Researcher</p>
                <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                  <span
                    className="text-xs px-3 py-1 rounded-full font-semibold border"
                    style={{ backgroundColor: '#3b82f615', borderColor: '#3b82f640', color: '#60a5fa' }}
                  >
                    AI Evolution
                  </span>
                  <span
                    className="text-xs px-3 py-1 rounded-full font-semibold border"
                    style={{ backgroundColor: '#8b5cf615', borderColor: '#8b5cf640', color: '#a78bfa' }}
                  >
                    Enterprise AI
                  </span>
                  <span
                    className="text-xs px-3 py-1 rounded-full font-semibold border"
                    style={{ backgroundColor: '#ec489915', borderColor: '#ec489940', color: '#f472b6' }}
                  >
                    AI-EOS Architect
                  </span>
                </div>
              </div>
            </div>

            {/* Research topic */}
            <div
              className="rounded-xl px-5 py-4 mb-6 border"
              style={{ backgroundColor: '#3b82f608', borderColor: '#3b82f630' }}
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-1">Research Topic</p>
              <p className="text-base font-bold text-white">AI Evolution</p>
              <p className="text-xs text-slate-400 mt-1">
                The complete journey from the Transformer breakthrough in 2017 to AI Enterprise Operating Systems —
                mapping 7 breakthrough eras that define the future of enterprise intelligence.
              </p>
            </div>

            {/* Contact grid */}
            <div className="grid sm:grid-cols-3 gap-3">
              <a
                href="mailto:rvijayagopalan.us@gmail.com"
                className="flex items-center gap-3 rounded-xl px-4 py-3 border transition-all duration-200 hover:-translate-y-0.5 group"
                style={{ backgroundColor: '#3b82f608', borderColor: '#3b82f625' }}
              >
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#3b82f620' }}>
                  <svg className="w-4 h-4" style={{ color: '#60a5fa' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-slate-500 leading-none mb-0.5">Email</p>
                  <p className="text-xs font-medium text-slate-300 truncate group-hover:text-white transition-colors">rvijayagopalan.us@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+14706517372"
                className="flex items-center gap-3 rounded-xl px-4 py-3 border transition-all duration-200 hover:-translate-y-0.5 group"
                style={{ backgroundColor: '#8b5cf608', borderColor: '#8b5cf625' }}
              >
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#8b5cf620' }}>
                  <svg className="w-4 h-4" style={{ color: '#a78bfa' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-slate-500 leading-none mb-0.5">Mobile</p>
                  <p className="text-xs font-medium text-slate-300 group-hover:text-white transition-colors">+1 470 651 7372</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/rvijayagopalan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl px-4 py-3 border transition-all duration-200 hover:-translate-y-0.5 group"
                style={{ backgroundColor: '#0ea5e908', borderColor: '#0ea5e925' }}
              >
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#0ea5e920' }}>
                  <svg className="w-4 h-4" style={{ color: '#38bdf8' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-slate-500 leading-none mb-0.5">LinkedIn</p>
                  <p className="text-xs font-medium text-slate-300 group-hover:text-white transition-colors">rvijayagopalan</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center text-xs font-black text-white">
                AI
              </div>
              <span className="text-sm text-slate-400">
                AI Evolution <span className="text-slate-600">v1.0</span>
              </span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-xs text-slate-600">2017 → 2030+ · 7 Eras · Enterprise AI</span>
            </div>
          </div>
          <div className="border-t border-slate-800/60 pt-4 text-center">
            <p className="text-xs text-slate-600">
              © 2026 Vijayagopalan Raveendran. All rights reserved.
            </p>
            <p className="text-xs text-slate-700 mt-1">
              <span className="font-semibold text-slate-600">AI Evolution</span>
              {' '}is an original work by Vijayagopalan Raveendran. Copyright © 2026.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
