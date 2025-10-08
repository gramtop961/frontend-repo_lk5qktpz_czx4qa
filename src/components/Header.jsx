import { Rocket } from 'lucide-react'

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between py-6">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-xl bg-gradient-to-tr from-indigo-500 to-violet-500 text-white shadow">
          <Rocket className="w-5 h-5" />
        </div>
        <div>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900">Hello World App</h1>
          <p className="text-sm text-gray-500">Vite + React + Tailwind</p>
        </div>
      </div>
      <a
        href="https://vitejs.dev/"
        target="_blank"
        rel="noreferrer"
        className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
      >
        Learn Vite →
      </a>
    </header>
  )
}
