import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Navbar from './components/NavBar'
import { Canvas } from '@react-three/fiber'
import Stars from './components/Stars'

function App() {
  const height = window.innerHeight;
  const width = window.innerWidth
  return (
    <div className='App' style={{height}}>
      <Navbar/>
      <Canvas style={{ height: '100%', width: '100%' }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        <Stars ></Stars>
      </Canvas>
    </div>
  )
}

export default App;
