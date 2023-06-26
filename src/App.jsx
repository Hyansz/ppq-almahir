import Footer from './components/Footer'
import Hero from './components/Hero'
import Imglist from './components/Imglist'
import Unit from './components/Unit'
import DefaultTabs from './components/text'
import './css/style.css'

function App() {
  return (
    <div>
      <Hero />
      <DefaultTabs />
      <Imglist />
      <Unit />
      <Footer/>
    </div>
  )
}

export default App
