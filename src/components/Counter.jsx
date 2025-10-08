import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  return (
    <section className="mt-8">
      <div className="bg-white/70 backdrop-blur border border-gray-200 rounded-2xl p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Interactive Counter</h3>
            <p className="text-sm text-gray-600">Click to increment the number.</p>
          </div>
          <button
            onClick={() => setCount((c) => c + 1)}
            className="px-4 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 active:scale-[.98] transition"
          >
            Count: {count}
          </button>
        </div>
      </div>
    </section>
  )
}
