import Link from 'next/link'
import { notFound } from 'next/navigation'
import { eras } from '../../../components/data'
import EraDetailTabs from '../../../components/EraDetailTabs'

export async function generateStaticParams() {
  return eras.map(e => ({ id: String(e.id) }))
}

export async function generateMetadata({ params }) {
  const { id } = await params
  const era = eras.find(e => e.id === parseInt(id))
  if (!era) return {}
  return {
    title: `Era ${era.number}: ${era.title} (${era.years}) — AI Evolution`,
    description: `${era.breakthrough} — ${era.detail.overview.summary.slice(0, 150)}...`,
  }
}

export default async function EraPage({ params }) {
  const { id } = await params
  const era = eras.find(e => e.id === parseInt(id))
  if (!era) notFound()

  const prev = eras.find(e => e.id === era.id - 1)
  const next = eras.find(e => e.id === era.id + 1)

  return (
    <div className="min-h-screen">
      {/* Back nav */}
      <div className="sticky top-0 z-50 bg-slate-950/90 border-b border-slate-800/80 backdrop-blur-xl">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All Eras
          </Link>

          {/* Era pill nav */}
          <div className="hidden sm:flex items-center gap-1">
            {eras.map(e => (
              <Link
                key={e.id}
                href={`/era/${e.id}`}
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-200 ${
                  e.id === era.id
                    ? 'text-white scale-110 shadow-lg'
                    : 'text-slate-600 hover:text-slate-300 bg-slate-800/60'
                }`}
                style={e.id === era.id ? { backgroundColor: era.accent } : {}}
              >
                {e.id}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-1">
            {prev && (
              <Link
                href={`/era/${prev.id}`}
                className="text-xs px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors border border-slate-700"
              >
                ← {prev.number}
              </Link>
            )}
            {next && (
              <Link
                href={`/era/${next.id}`}
                className="text-xs px-3 py-1.5 rounded-lg text-white transition-colors border"
                style={{ backgroundColor: `${next.accent}20`, borderColor: `${next.accent}40`, color: next.accent }}
              >
                {next.number} →
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl opacity-10"
            style={{ backgroundColor: era.accent }}
          />
          <div
            className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full blur-3xl opacity-5"
            style={{ backgroundColor: era.accent }}
          />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 pt-16 pb-12">
          {/* Breadcrumb + number */}
          <div className="flex items-center gap-3 mb-6">
            <span
              className="text-5xl font-black opacity-20 leading-none select-none"
              style={{ color: era.accent }}
            >
              {era.number}
            </span>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span
                  className="text-xs font-bold px-2 py-0.5 rounded-full border"
                  style={{
                    backgroundColor: `${era.accent}20`,
                    color: era.accent,
                    borderColor: `${era.accent}40`,
                  }}
                >
                  {era.years}
                </span>
                {era.abbrev && (
                  <span
                    className="text-xs font-bold px-2 py-0.5 rounded-full border"
                    style={{
                      backgroundColor: `${era.accent}20`,
                      color: era.accent,
                      borderColor: `${era.accent}40`,
                    }}
                  >
                    {era.abbrev}
                  </span>
                )}
              </div>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-white mb-3">
            {era.icon} {era.title}
          </h1>

          {/* Breakthrough banner */}
          <div
            className="inline-flex items-center gap-2 rounded-xl px-4 py-2 mb-8"
            style={{
              backgroundColor: `${era.accent}15`,
              border: `1px solid ${era.accent}35`,
            }}
          >
            <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke={era.accent}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-sm font-semibold" style={{ color: era.accent }}>
              Breakthrough: {era.breakthrough}
            </span>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: 'Era', value: `#${era.id} of 7` },
              { label: 'Period', value: era.years },
              { label: 'Concepts', value: `${era.detail.concepts.length} topics` },
              { label: 'Milestones', value: `${era.detail.milestones.length} events` },
            ].map(stat => (
              <div
                key={stat.label}
                className="rounded-xl p-3 border text-center"
                style={{ borderColor: `${era.accent}20`, backgroundColor: `${era.accent}08` }}
              >
                <p className="text-lg font-black text-white">{stat.value}</p>
                <p className="text-xs text-slate-500 mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-5xl mx-auto px-4 pb-24">
        <EraDetailTabs era={era} />
      </div>

      {/* Next era CTA */}
      {next && (
        <div className="border-t border-slate-800 bg-slate-900/30">
          <div className="max-w-5xl mx-auto px-4 py-10">
            <p className="text-xs text-slate-600 uppercase tracking-widest mb-3 text-center">
              This Era Led To
            </p>
            <Link
              href={`/era/${next.id}`}
              className="group flex items-center justify-between rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-0.5"
              style={{
                borderColor: `${next.accent}30`,
                backgroundColor: `${next.accent}08`,
              }}
            >
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className="text-xs font-bold px-2 py-0.5 rounded-full"
                    style={{ backgroundColor: `${next.accent}20`, color: next.accent }}
                  >
                    ERA {next.number} · {next.years}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white">
                  {next.icon} {next.title}
                </h3>
                <p className="text-sm mt-1" style={{ color: next.accent }}>
                  Breakthrough: {next.breakthrough}
                </p>
              </div>
              <svg
                className="w-6 h-6 transition-transform duration-200 group-hover:translate-x-1 flex-shrink-0 ml-4"
                style={{ color: next.accent }}
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
