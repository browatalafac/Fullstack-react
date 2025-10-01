import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Catalog from './components/pages/Catalog'
import Blogs from './components/pages/Blogs'

function App() {
  return (
    <BrowserRouter>
    <Link to="/">Inicio</Link>
    <Link to="/Catalog">Catalogo</Link>
    <Link to="/Blogs">Blogs</Link>
    <Link to="/AAAAAAA">Sobre nosotros</Link>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/catalog' Component={Catalog}/>
        <Route path='/blogs' Component={Blogs}/>
        <Route path='/about' Component={About}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
