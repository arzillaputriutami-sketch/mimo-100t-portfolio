'use client'

import { useEffect, useState } from 'react'
import { getSubmission, submissions, type Submission } from '@/data/submissions'
import { notFound } from 'next/navigation'

const themeColors: Record<string, { bg: string; accent: string; border: string; text: string }> = {
  rose: { bg: 'from-rose-950/50 to-gray-950', accent: 'text-rose-400', border: 'border-rose-800/30', text: 'text-rose-300' },
  amber: { bg: 'from-amber-950/50 to-gray-950', accent: 'text-amber-400', border: 'border-amber-800/30', text: 'text-amber-300' },
  violet: { bg: 'from-violet-950/50 to-gray-950', accent: 'text-violet-400', border: 'border-violet-800/30', text: 'text-violet-300' },
  emerald: { bg: 'from-emerald-950/50 to-gray-950', accent: 'text-emerald-400', border: 'border-emerald-800/30', text: 'text-emerald-300' },
  sky: { bg: 'from-sky-950/50 to-gray-950', accent: 'text-sky-400', border: 'border-sky-800/30', text: 'text-sky-300' },
  cyan: { bg: 'from-cyan-950/50 to-gray-950', accent: 'text-cyan-400', border: 'border-cyan-800/30', text: 'text-cyan-300' },
  indigo: { bg: 'from-indigo-950/50 to-gray-950', accent: 'text-indigo-400', border: 'border-indigo-800/30', text: 'text-indigo-300' },
  teal: { bg: 'from-teal-950/50 to-gray-950', accent: 'text-teal-400', border: 'border-teal-800/30', text: 'text-teal-300' },
  fuchsia: { bg: 'from-fuchsia-950/50 to-gray-950', accent: 'text-fuchsia-400', border: 'border-fuchsia-800/30', text: 'text-fuchsia-300' },
  lime: { bg: 'from-lime-950/50 to-gray-950', accent: 'text-lime-400', border: 'border-lime-800/30', text: 'text-lime-300' },
  orange: { bg: 'from-orange-950/50 to-gray-950', accent: 'text-orange-400', border: 'border-orange-800/30', text: 'text-orange-300' },
}

const severityConfig = {
  critical: { bg: 'bg-red-500/10', border: 'border-red-500/30', icon: '🔴', label: 'CRITICAL' },
  warning: { bg: 'bg-yellow-500/10', border: 'border-yellow-500/30', icon: '🟡', label: 'WARNING' },
  info: { bg: 'bg-blue-500/10', border: 'border-blue-500/30', icon: '🔵', label: 'INFO' },
}

export default function ScenarioPage({ params }: { params: { project: string; scenario: string } }) {
  const [time, setTime] = useState('')
  const submission = getSubmission(params.project, params.scenario)

  useEffect(() => {
    const update = () => setTime(new Date().toLocaleTimeString('en-US', { hour12: false }))
    update()
    const i = setInterval(update, 1000)
    return () => clearInterval(i)
  }, [])

  if (!submission) return notFound()

  const colors = themeColors[submission.theme] || themeColors.indigo

  return (
    <div className={`min-h-screen bg-gradient-to-br ${colors.bg} p-6`}>
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <div className={`w-2 h-2 rounded-full ${colors.accent} animate-pulse`} />
            <span className="text-xs text-gray-500 uppercase tracking-widest">Live Agent Dashboard</span>
          </div>
          <span className="text-xs text-gray-600 font-mono">{time}</span>
        </div>
        <h1 className={`text-3xl font-bold ${colors.text} mb-2`}>{submission.title}</h1>
        <p className="text-gray-400 max-w-2xl">{submission.shortDesc}</p>
      </div>

      {/* Metrics */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {submission.metrics.map((m, i) => (
          <div key={i} className={`rounded-xl border ${colors.border} bg-gray-900/50 backdrop-blur p-5`}>
            <div className="text-xs text-gray-500 mb-1">{m.label}</div>
            <div className="text-2xl font-bold text-white">{m.value}</div>
            <div className={`text-xs mt-1 ${m.trend === 'up' ? 'text-green-400' : m.trend === 'down' ? 'text-red-400' : 'text-gray-500'}`}>
              {m.trend === 'up' ? '↑ Trending' : m.trend === 'down' ? '↓ Declining' : '→ Stable'}
            </div>
          </div>
        ))}
      </div>

      {/* Agent Outputs */}
      <div className="max-w-7xl mx-auto space-y-4">
        <h2 className={`text-lg font-semibold ${colors.text} mb-3`}>🤖 Agent Analysis</h2>
        {submission.agentOutputs.map((output, i) => {
          const sev = severityConfig[output.severity || 'info']
          return (
            <div key={i} className={`rounded-xl border ${sev.border} ${sev.bg} p-5`}>
              <div className="flex items-start gap-3">
                <span className="text-lg">{sev.icon}</span>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-xs font-mono px-2 py-0.5 rounded ${sev.bg} ${sev.border} border`}>{sev.label}</span>
                    <span className="text-sm font-semibold text-white">{output.title}</span>
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed">{output.content}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-gray-800">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-xs text-gray-500">Tools:</span>
          {submission.tools.map(t => (
            <span key={t} className="text-xs px-2 py-1 rounded bg-gray-800 text-gray-300">{t}</span>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="text-xs text-gray-500">Models:</span>
          {submission.models.map(m => (
            <span key={m} className="text-xs px-2 py-1 rounded bg-gray-800 text-gray-300">{m}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
