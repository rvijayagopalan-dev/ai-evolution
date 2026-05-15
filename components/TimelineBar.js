'use client'

import { timelineItems } from './data'

export default function TimelineBar() {
  return (
    <div className="w-full overflow-x-auto pb-2">
      <div className="flex items-center min-w-max mx-auto px-4">
        {timelineItems.map((item, i) => (
          <div key={i} className="flex items-center">
            {/* Node */}
            <a
              href={`#era-${i + 1}`}
              className="flex flex-col items-center gap-1 group cursor-pointer"
            >
              <div
                className="w-3 h-3 rounded-full transition-all duration-200 group-hover:scale-150 group-hover:shadow-lg"
                style={{ backgroundColor: item.color, boxShadow: `0 0 8px ${item.color}60` }}
              />
              <div className="text-center">
                <p
                  className="text-xs font-semibold whitespace-nowrap transition-colors duration-200 group-hover:text-white"
                  style={{ color: item.color }}
                >
                  {item.era}
                </p>
                <p className="text-xs text-slate-600 whitespace-nowrap">{item.year}</p>
              </div>
            </a>
            {/* Connector */}
            {i < timelineItems.length - 1 && (
              <div className="w-12 sm:w-16 h-px mx-1 mt-[-18px]"
                style={{
                  background: `linear-gradient(to right, ${item.color}80, ${timelineItems[i + 1].color}80)`
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
