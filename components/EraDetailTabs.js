'use client'

import { useState } from 'react'

const TABS = [
  { id: 'overview',   label: 'Overview',     icon: '📋' },
  { id: 'concepts',   label: 'Core Concepts', icon: '🧩' },
  { id: 'players',    label: 'Key Players',   icon: '🏢' },
  { id: 'milestones', label: 'Timeline',      icon: '📅' },
  { id: 'impact',     label: 'Impact',        icon: '🚀' },
]

export default function EraDetailTabs({ era }) {
  const [active, setActive] = useState('overview')
  const d = era.detail
  const accent = era.accent

  return (
    <div>
      {/* Tab bar */}
      <div className="flex overflow-x-auto gap-1 pb-1 mb-8 border-b border-slate-800">
        {TABS.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-t-lg text-sm font-semibold whitespace-nowrap transition-all duration-200 border-b-2 -mb-px ${
              active === tab.id
                ? 'text-white border-current'
                : 'text-slate-500 border-transparent hover:text-slate-300'
            }`}
            style={active === tab.id ? { color: accent, borderColor: accent } : {}}
          >
            <span>{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="min-h-[400px]">
        {active === 'overview'   && <OverviewTab d={d} accent={accent} />}
        {active === 'concepts'   && <ConceptsTab d={d} accent={accent} />}
        {active === 'players'    && <PlayersTab  d={d} accent={accent} />}
        {active === 'milestones' && <MilestonesTab d={d} accent={accent} />}
        {active === 'impact'     && <ImpactTab   d={d} accent={accent} />}
      </div>
    </div>
  )
}

/* ─── Overview ─────────────────────────────────────────────── */
function OverviewTab({ d, accent }) {
  const o = d.overview
  return (
    <div className="space-y-6">
      <div
        className="rounded-2xl p-6 border"
        style={{ backgroundColor: `${accent}0d`, borderColor: `${accent}30` }}
      >
        {o.quote && (
          <blockquote className="text-lg italic font-medium mb-4" style={{ color: accent }}>
            "{o.quote}"
          </blockquote>
        )}
        <p className="text-slate-300 leading-relaxed text-base">{o.summary}</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Card title="Why It Happened" icon="💡" accent={accent}>
          <p className="text-slate-400 text-sm leading-relaxed">{o.why}</p>
        </Card>
        <Card title="Why It Matters" icon="⭐" accent={accent}>
          <p className="text-slate-400 text-sm leading-relaxed">{o.significance}</p>
        </Card>
      </div>
    </div>
  )
}

/* ─── Concepts ──────────────────────────────────────────────── */
function ConceptsTab({ d, accent }) {
  const [open, setOpen] = useState(0)
  return (
    <div className="space-y-3">
      <p className="text-sm text-slate-500 mb-6">
        Select a concept to explore the technical details.
      </p>
      {d.concepts.map((c, i) => (
        <div
          key={i}
          className="rounded-xl border overflow-hidden transition-all duration-200"
          style={{
            borderColor: open === i ? `${accent}50` : '#1e293b',
            backgroundColor: open === i ? `${accent}08` : 'transparent',
          }}
        >
          <button
            className="w-full flex items-center justify-between px-5 py-4 text-left"
            onClick={() => setOpen(open === i ? -1 : i)}
          >
            <div className="flex items-center gap-3">
              <span
                className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0"
                style={{ backgroundColor: `${accent}20`, color: accent }}
              >
                {i + 1}
              </span>
              <span className="font-semibold text-white text-sm">{c.title}</span>
            </div>
            <svg
              className={`w-4 h-4 text-slate-500 transition-transform duration-200 flex-shrink-0 ${open === i ? 'rotate-180' : ''}`}
              fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {open === i && (
            <div className="px-5 pb-5">
              <div className="h-px mb-4" style={{ backgroundColor: `${accent}20` }} />
              <p className="text-slate-300 text-sm leading-relaxed">{c.explanation}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

/* ─── Players ───────────────────────────────────────────────── */
function PlayersTab({ d, accent }) {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {d.players.map((p, i) => (
        <div
          key={i}
          className="rounded-xl p-4 border"
          style={{ borderColor: `${accent}25`, backgroundColor: `${accent}08` }}
        >
          <div className="flex items-start gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-xs font-black flex-shrink-0"
              style={{ backgroundColor: `${accent}20`, color: accent }}
            >
              {p.name.slice(0, 2).toUpperCase()}
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-bold text-white text-sm">{p.name}</span>
                <span
                  className="text-xs px-2 py-0.5 rounded-full font-medium"
                  style={{ backgroundColor: `${accent}15`, color: accent }}
                >
                  {p.type}
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">{p.contribution}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

/* ─── Milestones ────────────────────────────────────────────── */
function MilestonesTab({ d, accent }) {
  return (
    <div className="relative pl-8">
      {/* Line */}
      <div
        className="absolute left-3 top-2 bottom-2 w-0.5 rounded-full"
        style={{ backgroundColor: `${accent}30` }}
      />
      <div className="space-y-6">
        {d.milestones.map((m, i) => (
          <div key={i} className="relative">
            {/* Dot */}
            <div
              className="absolute -left-5 top-1 w-3 h-3 rounded-full border-2 border-slate-950 flex-shrink-0"
              style={{ backgroundColor: accent }}
            />
            <div>
              <span
                className="text-xs font-bold px-2 py-0.5 rounded-md"
                style={{ backgroundColor: `${accent}20`, color: accent }}
              >
                {m.year}
              </span>
              <p className="text-slate-300 text-sm mt-1 leading-relaxed">{m.event}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─── Impact ────────────────────────────────────────────────── */
function ImpactTab({ d, accent }) {
  const imp = d.impact
  return (
    <div className="space-y-6">
      <Card title="What Changed" icon="🔄" accent={accent}>
        <p className="text-slate-400 text-sm leading-relaxed">{imp.changed}</p>
      </Card>

      <Card title="What It Enabled" icon="🚀" accent={accent}>
        <ul className="space-y-2">
          {imp.enabled.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
              <span className="mt-0.5 flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2" style={{ backgroundColor: accent }} />
              {item}
            </li>
          ))}
        </ul>
      </Card>

      <Card title="Industry Impact" icon="🏭" accent={accent}>
        <p className="text-slate-400 text-sm leading-relaxed">{imp.industry}</p>
      </Card>
    </div>
  )
}

/* ─── Shared ─────────────────────────────────────────────────── */
function Card({ title, icon, accent, children }) {
  return (
    <div
      className="rounded-xl p-5 border"
      style={{ borderColor: `${accent}25`, backgroundColor: `${accent}08` }}
    >
      <div className="flex items-center gap-2 mb-3">
        <span>{icon}</span>
        <h3 className="text-sm font-bold text-white">{title}</h3>
      </div>
      {children}
    </div>
  )
}
