import Header from './components/Header'
import Hero from './components/Hero'
import Counter from './components/Counter'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-violet-50">
      <div className="max-w-3xl mx-auto px-4">
        <Header />
        <Hero />
        <Counter />
        <Footer />
      </div>
    </div>
  )
}

export default App
