
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Catalog from './components/pages/Catalog'
import Blogs from './components/pages/Blogs'
import Login from './components/pages/Login'
import Cart from './components/pages/Cart'
import Profile from './components/pages/Profile'

function App() {
  return (
    <BrowserRouter>
      <nav>
      
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='profile' element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
