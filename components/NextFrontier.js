'use client'

export default function NextFrontier() {
  return (
    <div className="relative overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/20 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/8 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 py-24 text-center">
        <div className="inline-flex items-center gap-2 bg-indigo-950/60 border border-indigo-500/30 rounded-full px-4 py-1.5 mb-8 text-sm text-indigo-400">
          <span className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse-slow" />
          Next Frontier
        </div>

        <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
          Self-Evolving,{' '}
          <span
            className="text-gradient"
            style={{ backgroundImage: 'linear-gradient(135deg, #6366f1, #a855f7, #ec4899)' }}
          >
            Self-Governing
          </span>
          ,<br />Value-Generating Enterprises
        </h2>

        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          The ultimate goal is AI-native enterprises with no legacy infrastructure —
          where AI systems govern themselves, generate value autonomously, and evolve
          continuously within a governed cognitive fabric.
        </p>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {[
            {
              title: 'Cognitive Constitutions',
              desc: 'Formal AI governance rules embedded in the cognitive fabric of enterprise systems.',
              icon: '📜',
              color: '#6366f1',
            },
            {
              title: 'Autonomous Compliance',
              desc: 'AI systems that monitor, enforce, and report their own regulatory compliance.',
              icon: '⚖️',
              color: '#a855f7',
            },
            {
              title: 'Federated Governance',
              desc: 'Consistent AI governance across distributed environments and jurisdictions.',
              icon: '🌐',
              color: '#ec4899',
            },
          ].map(card => (
            <div
              key={card.title}
              className="rounded-2xl p-5 text-left"
              style={{
                backgroundColor: `${card.color}10`,
                border: `1px solid ${card.color}30`,
              }}
            >
              <div className="text-2xl mb-3">{card.icon}</div>
              <h3 className="text-sm font-bold text-white mb-2">{card.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* Journey continues banner */}
        <div className="bg-gradient-to-r from-blue-950/60 via-violet-950/60 to-indigo-950/60 border border-slate-700/50 rounded-2xl p-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-slate-500 mb-2">
            The Journey Continues
          </p>
          <p className="text-base text-slate-300">
            The Ultimate Goal is{' '}
            <span className="font-bold text-white">AI-Native Enterprises</span>{' '}
            with no legacy infrastructure — governed, adaptive, and continuously evolving.
          </p>
        </div>
      </div>
    </div>
  )
}
