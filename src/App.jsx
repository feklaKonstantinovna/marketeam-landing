import Header from './components/Header'
import HeroLeft from './components/HeroLeft'
import CirclesViz from './components/CirclesViz'
import LogoTicker from './components/LogoTicker'
import './App.css'

export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="hero">
        <HeroLeft />
        <CirclesViz />
      </main>
      <LogoTicker />
    </div>
  )
}
