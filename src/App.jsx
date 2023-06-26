import About from './components/About'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Imglist from './components/Imglist'
import Unit from './components/Unit'
import './css/style.css'

function App() {
  return (
    <div className='container'>
      <Hero />
      <About/>
      <Imglist />
      <Unit />
      <Footer/>
    </div>
  )
}

export default App
