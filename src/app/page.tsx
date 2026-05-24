import { submissions } from '../data/submissions'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.4em] text-indigo-400 mb-3">MiMo 100T Portfolio</p>
          <h1 className="text-4xl font-bold mb-4">AI Agent Portfolio</h1>
          <p className="text-gray-400 max-w-2xl">13 project families × 3 scenarios = 39 unique live demos for Xiaomi MiMo submission proof.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {submissions.map((s, i) => (
            <a key={s.id} href={`/mimo-100t-portfolio/p/${s.project}/${s.scenario}`} className="block rounded-xl border border-gray-800 bg-gray-900/60 p-5 hover:border-indigo-500 transition">
              <div className="text-xs text-gray-500 mb-2">#{String(i + 1).padStart(2, '0')} / {s.project}</div>
              <h2 className="font-semibold text-lg mb-2">{s.title}</h2>
              <p className="text-sm text-gray-400 line-clamp-3">{s.shortDesc}</p>
            </a>
          ))}
        </div>
      </div>
    </main>
  )
}
