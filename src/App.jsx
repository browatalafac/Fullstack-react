//import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Catalog from './components/pages/Catalog'
import Blogs from './components/pages/Blogs'

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/catalog">Catálogo</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/about">Sobre nosotros</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
