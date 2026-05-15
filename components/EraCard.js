'use client'

export default function EraCard({ era, index }) {
  const isEven = index % 2 === 0

  return (
    <div
      id={`era-${era.id}`}
      className={`relative flex flex-col lg:flex-row gap-0 items-stretch ${
        isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
      }`}
    >
      {/* Timeline node */}
      <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex-col items-center">
        <div
          className={`w-14 h-14 rounded-full border-4 border-slate-950 flex items-center justify-center text-xl shadow-lg ${era.dot} shadow-current`}
          style={{ boxShadow: `0 0 20px ${era.accent}60` }}
        >
          <span>{era.icon}</span>
        </div>
      </div>

      {/* Card */}
      <div className={`w-full lg:w-[calc(50%-3rem)] ${isEven ? 'lg:mr-auto lg:pr-8' : 'lg:ml-auto lg:pl-8'}`}>
        <div
          className={`relative rounded-2xl border ${era.border} bg-gradient-to-br ${era.bg} p-6 card-hover glass overflow-hidden`}
          style={{ boxShadow: `0 4px 30px ${era.accent}15` }}
        >
          {/* Era number watermark */}
          <span className="absolute top-4 right-4 text-7xl font-black opacity-5 text-white select-none leading-none">
            {era.number}
          </span>

          {/* Header */}
          <div className="flex items-start gap-3 mb-4">
            <div
              className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-lg ${era.dot} bg-opacity-20`}
              style={{ backgroundColor: `${era.accent}25` }}
            >
              {era.icon}
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span
                  className={`text-xs font-bold px-2 py-0.5 rounded-full border ${era.badge}`}
                >
                  ERA {era.number}
                </span>
                <span
                  className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${era.badge} opacity-80`}
                >
                  {era.years}
                </span>
                {era.abbrev && (
                  <span
                    className={`text-xs font-bold px-2 py-0.5 rounded-full border ${era.badge}`}
                  >
                    {era.abbrev}
                  </span>
                )}
              </div>
              <h2 className="text-xl font-bold text-white mt-1">{era.title}</h2>
            </div>
          </div>

          {/* Breakthrough */}
          <div
            className="rounded-xl p-3 mb-4"
            style={{ backgroundColor: `${era.accent}15`, border: `1px solid ${era.accent}30` }}
          >
            <p className="text-xs font-semibold uppercase tracking-wider opacity-60 mb-1" style={{ color: era.accent }}>
              Breakthrough
            </p>
            <p className="text-sm font-semibold text-white">{era.breakthrough}</p>
            {era.paper && (
              <p className="text-xs text-slate-400 mt-1 italic">{era.paper}</p>
            )}
            {era.shift && (
              <p className="text-xs text-slate-400 mt-1">
                <span className="text-slate-500">Shift: </span>{era.shift}
              </p>
            )}
            {era.function && (
              <p className="text-xs text-slate-300 mt-1 italic">{era.function}</p>
            )}
          </div>

          {/* Content columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            {/* Left column */}
            <div className="space-y-3">
              {era.keyInnovations && (
                <Section title="Key Innovations" accent={era.accent}>
                  {era.keyInnovations.map(item => (
                    <Tag key={item} accent={era.accent}>{item}</Tag>
                  ))}
                </Section>
              )}
              {era.coreConcepts && (
                <Section title="Core Concepts" accent={era.accent}>
                  {era.coreConcepts.map(item => (
                    <Tag key={item} accent={era.accent}>{item}</Tag>
                  ))}
                </Section>
              )}
              {era.keyCapabilities && (
                <Section title="Key Capabilities" accent={era.accent}>
                  {era.keyCapabilities.map(item => (
                    <Tag key={item} accent={era.accent}>{item}</Tag>
                  ))}
                </Section>
              )}
              {era.capabilities && (
                <Section title="Capabilities" accent={era.accent}>
                  {era.capabilities.map(item => (
                    <Tag key={item} accent={era.accent}>{item}</Tag>
                  ))}
                </Section>
              )}
              {era.keyConcepts && (
                <Section title="Key Concepts" accent={era.accent}>
                  {era.keyConcepts.map(item => (
                    <Tag key={item} accent={era.accent}>{item}</Tag>
                  ))}
                </Section>
              )}
              {era.milestones && (
                <Section title="Major Milestones" accent={era.accent}>
                  <div className="space-y-1">
                    {era.milestones.map(m => (
                      <div key={m.item} className="flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-500 w-10">{m.year}</span>
                        <span className="text-xs text-slate-300">{m.item}</span>
                      </div>
                    ))}
                  </div>
                </Section>
              )}
            </div>

            {/* Right column */}
            <div className="space-y-3">
              {era.keyResearchers && (
                <Section title="Key Researchers" accent={era.accent}>
                  {era.keyResearchers.map(item => (
                    <Tag key={item} accent={era.accent}>{item}</Tag>
                  ))}
                </Section>
              )}
              {era.keyTechnologies && (
                <Section title="Key Technologies" accent={era.accent}>
                  {era.keyTechnologies.map(item => (
                    <Tag key={item} accent={era.accent}>{item}</Tag>
                  ))}
                </Section>
              )}
              <Section title="Leading Companies" accent={era.accent}>
                {era.leadingCompanies.map(item => (
                  <Tag key={item} accent={era.accent} bold>{item}</Tag>
                ))}
              </Section>
            </div>
          </div>

          {/* Gap / Limitation */}
          {era.gap && (
            <div className="rounded-xl p-3 bg-slate-900/60 border border-slate-700/50">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                Gap / Limitation
              </p>
              <p className="text-xs text-slate-400 leading-relaxed">{era.gap}</p>
            </div>
          )}

          {/* Leads to */}
          {era.leadsTo && (
            <div className="mt-3 flex items-center gap-2">
              <span className="text-xs text-slate-600">This led to</span>
              <span
                className="text-xs font-semibold px-2 py-0.5 rounded-full"
                style={{ backgroundColor: `${era.accent}20`, color: era.accent, border: `1px solid ${era.accent}40` }}
              >
                {era.leadsTo} →
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function Section({ title, accent, children }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: accent, opacity: 0.8 }}>
        {title}
      </p>
      <div className="flex flex-wrap gap-1">{children}</div>
    </div>
  )
}

function Tag({ children, accent, bold }) {
  return (
    <span
      className={`text-xs px-2 py-0.5 rounded-md ${bold ? 'font-semibold' : 'font-normal'} text-slate-300`}
      style={{ backgroundColor: `${accent}12`, border: `1px solid ${accent}25` }}
    >
      {children}
    </span>
  )
}
