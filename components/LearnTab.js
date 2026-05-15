'use client'

import { useState } from 'react'

const SUB_TABS = [
  { id: 'path',    label: 'Learning Path', icon: '🎯' },
  { id: 'papers',  label: 'Papers',        icon: '📄' },
  { id: 'books',   label: 'Books',         icon: '📚' },
  { id: 'visual',  label: 'Visual',        icon: '🎥' },
  { id: 'code',    label: 'Code',          icon: '💻' },
  { id: 'byyear',  label: 'By Year',       icon: '📅' },
]

const LEVEL_COLOR = {
  Beginner:     '#22c55e',
  Intermediate: '#f59e0b',
  Advanced:     '#ef4444',
}

const TYPE_ICON = {
  course:       '🎓',
  paper:        '📄',
  book:         '📚',
  tutorial:     '🛠️',
  project:      '🔨',
  video:        '▶️',
  article:      '📝',
  interactive:  '🖱️',
  milestone:    '🏆',
  library:      '📦',
  framework:    '🏗️',
  tool:         '🔧',
  demo:         '🎯',
  repo:         '💾',
}

export default function LearnTab({ d, accent }) {
  const [sub, setSub] = useState('path')

  if (!d) {
    return (
      <div className="rounded-xl p-8 text-center border border-slate-800">
        <p className="text-slate-500">Learning resources coming soon for this era.</p>
      </div>
    )
  }

  return (
    <div>
      {/* Sub-tab bar */}
      <div className="flex flex-wrap gap-1 mb-6">
        {SUB_TABS.map(t => (
          <button
            key={t.id}
            onClick={() => setSub(t.id)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-150 ${
              sub === t.id
                ? 'text-white'
                : 'text-slate-500 hover:text-slate-300 bg-slate-800/50'
            }`}
            style={sub === t.id ? { backgroundColor: `${accent}25`, color: accent, border: `1px solid ${accent}50` } : { border: '1px solid transparent' }}
          >
            <span>{t.icon}</span>
            {t.label}
          </button>
        ))}
      </div>

      {/* Sub-tab content */}
      <div className="min-h-[350px]">
        {sub === 'path'   && <PathSection   steps={d.path}    accent={accent} />}
        {sub === 'papers' && <PapersSection papers={d.papers} accent={accent} />}
        {sub === 'books'  && <BooksSection  books={d.books}   accent={accent} />}
        {sub === 'visual' && <VisualSection items={d.visual}  accent={accent} />}
        {sub === 'code'   && <CodeSection   repos={d.code}    accent={accent} />}
        {sub === 'byyear' && <ByYearSection years={d.byYear}  accent={accent} />}
      </div>
    </div>
  )
}

/* ─── Learning Path ─────────────────────────────────────── */
function PathSection({ steps, accent }) {
  if (!steps?.length) return <Empty />
  return (
    <div className="space-y-3">
      <p className="text-xs text-slate-500 mb-4">A structured 6-step journey from zero to expert for this era.</p>
      {steps.map((s, i) => (
        <div
          key={i}
          className="flex gap-4 rounded-xl p-4 border transition-all duration-150 hover:border-opacity-60"
          style={{ borderColor: `${accent}20`, backgroundColor: `${accent}06` }}
        >
          {/* Step number */}
          <div
            className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-xs font-black mt-0.5"
            style={{ backgroundColor: `${accent}25`, color: accent }}
          >
            {i + 1}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <span className="font-semibold text-white text-sm">{s.title}</span>
              <span
                className="text-xs px-1.5 py-0.5 rounded font-medium"
                style={{ backgroundColor: `${LEVEL_COLOR[s.level] || accent}20`, color: LEVEL_COLOR[s.level] || accent }}
              >
                {s.level}
              </span>
              <span className="text-xs text-slate-600">{s.time}</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed mb-2">{s.description}</p>
            {s.resource && (
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold transition-opacity hover:opacity-80"
                style={{ color: accent }}
              >
                <span>{TYPE_ICON[s.type] || '🔗'}</span>
                {s.resource}
                <svg className="w-3 h-3 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

/* ─── Papers ────────────────────────────────────────────── */
function PapersSection({ papers, accent }) {
  if (!papers?.length) return <Empty />
  return (
    <div className="space-y-3">
      {papers.map((p, i) => (
        <div
          key={i}
          className="rounded-xl p-4 border"
          style={{ borderColor: `${accent}20`, backgroundColor: `${accent}06` }}
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap mb-1">
                {p.mustRead && (
                  <span
                    className="text-xs px-1.5 py-0.5 rounded font-bold"
                    style={{ backgroundColor: `${accent}25`, color: accent }}
                  >
                    Must Read
                  </span>
                )}
                <span className="text-xs text-slate-600">{p.year}</span>
                {p.venue && <span className="text-xs text-slate-600 italic">{p.venue}</span>}
              </div>
              <h4 className="font-semibold text-white text-sm leading-snug mb-1">{p.title}</h4>
              <p className="text-xs text-slate-500 mb-1.5">{p.authors}</p>
              <p className="text-xs text-slate-400 leading-relaxed">{p.description}</p>
            </div>
            {p.url && (
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 flex items-center gap-1 text-xs font-semibold px-2.5 py-1.5 rounded-lg transition-opacity hover:opacity-80"
                style={{ backgroundColor: `${accent}20`, color: accent, border: `1px solid ${accent}30` }}
              >
                PDF
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

/* ─── Books ─────────────────────────────────────────────── */
function BooksSection({ books, accent }) {
  if (!books?.length) return <Empty />
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {books.map((b, i) => (
        <div
          key={i}
          className="rounded-xl p-4 border flex gap-3"
          style={{ borderColor: `${accent}20`, backgroundColor: `${accent}06` }}
        >
          {/* Book spine */}
          <div
            className="flex-shrink-0 w-10 rounded-lg flex items-center justify-center text-lg"
            style={{ backgroundColor: `${accent}20`, minHeight: '3rem' }}
          >
            📚
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 flex-wrap mb-1">
              <span
                className="text-xs px-1.5 py-0.5 rounded font-medium"
                style={{ backgroundColor: `${LEVEL_COLOR[b.level] || accent}20`, color: LEVEL_COLOR[b.level] || accent }}
              >
                {b.level}
              </span>
              <span className="text-xs text-slate-600">{b.year}</span>
            </div>
            <h4 className="font-semibold text-white text-sm leading-snug">{b.title}</h4>
            <p className="text-xs text-slate-500 mb-1">{b.authors}</p>
            <p className="text-xs text-slate-400 leading-relaxed mb-1.5">{b.description}</p>
            {b.publisher && <p className="text-xs text-slate-600 italic">{b.publisher}</p>}
            {b.url && (
              <a
                href={b.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold mt-1.5 transition-opacity hover:opacity-80"
                style={{ color: accent }}
              >
                View →
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

/* ─── Visual ─────────────────────────────────────────────── */
function VisualSection({ items, accent }) {
  if (!items?.length) return <Empty />
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {items.map((v, i) => (
        <a
          key={i}
          href={v.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-xl p-4 border transition-all duration-150 hover:-translate-y-0.5 block"
          style={{ borderColor: `${accent}20`, backgroundColor: `${accent}06` }}
        >
          <div className="flex items-start gap-3">
            <div
              className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center text-base"
              style={{ backgroundColor: `${accent}20` }}
            >
              {TYPE_ICON[v.type] || '🎥'}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap mb-0.5">
                <span
                  className="text-xs px-1.5 py-0.5 rounded font-medium capitalize"
                  style={{ backgroundColor: `${accent}15`, color: accent }}
                >
                  {v.type}
                </span>
                {v.year && <span className="text-xs text-slate-600">{v.year}</span>}
              </div>
              <h4 className="font-semibold text-white text-sm leading-snug group-hover:underline">{v.title}</h4>
              {v.creator && <p className="text-xs text-slate-500 mb-1">{v.creator}</p>}
              <p className="text-xs text-slate-400 leading-relaxed">{v.description}</p>
            </div>
          </div>
        </a>
      ))}
    </div>
  )
}

/* ─── Code ───────────────────────────────────────────────── */
function CodeSection({ repos, accent }) {
  if (!repos?.length) return <Empty />
  return (
    <div className="space-y-3">
      {repos.map((r, i) => (
        <a
          key={i}
          href={r.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-start gap-4 rounded-xl p-4 border transition-all duration-150 hover:-translate-y-0.5 block"
          style={{ borderColor: `${accent}20`, backgroundColor: `${accent}06` }}
        >
          <div
            className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center text-sm"
            style={{ backgroundColor: `${accent}20` }}
          >
            💻
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap mb-0.5">
              <span className="font-bold text-white text-sm group-hover:underline">{r.name}</span>
              {r.org && <span className="text-xs text-slate-500">{r.org}</span>}
              {r.language && (
                <span
                  className="text-xs px-1.5 py-0.5 rounded font-medium"
                  style={{ backgroundColor: `${accent}15`, color: accent }}
                >
                  {r.language}
                </span>
              )}
              {r.stars && (
                <span className="text-xs text-slate-500">⭐ {r.stars}</span>
              )}
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">{r.description}</p>
          </div>
          <svg
            className="flex-shrink-0 w-4 h-4 text-slate-600 group-hover:text-slate-400 transition-colors mt-0.5"
            fill="none" viewBox="0 0 24 24" stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      ))}
    </div>
  )
}

/* ─── By Year ─────────────────────────────────────────────── */
function ByYearSection({ years, accent }) {
  if (!years?.length) return <Empty />
  return (
    <div className="relative pl-8">
      <div
        className="absolute left-3 top-2 bottom-2 w-0.5 rounded-full"
        style={{ backgroundColor: `${accent}25` }}
      />
      <div className="space-y-6">
        {years.map((y, yi) => (
          <div key={yi} className="relative">
            <div
              className="absolute -left-5 top-1 w-3 h-3 rounded-full border-2 border-slate-950"
              style={{ backgroundColor: accent }}
            />
            <div>
              <span
                className="text-xs font-bold px-2 py-0.5 rounded-md mb-2 inline-block"
                style={{ backgroundColor: `${accent}20`, color: accent }}
              >
                {y.year}
              </span>
              <div className="mt-2 space-y-1.5">
                {y.items?.map((item, ii) => (
                  <div key={ii} className="flex items-start gap-2">
                    <span className="text-sm flex-shrink-0 mt-0.5">{TYPE_ICON[item.type] || '•'}</span>
                    {item.url ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-slate-300 hover:text-white hover:underline transition-colors leading-relaxed"
                      >
                        {item.title}
                      </a>
                    ) : (
                      <span className="text-xs text-slate-400 leading-relaxed">{item.title}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─── Shared ─────────────────────────────────────────────── */
function Empty() {
  return (
    <div className="rounded-xl p-8 text-center border border-slate-800">
      <p className="text-slate-600 text-sm">No resources available.</p>
    </div>
  )
}
