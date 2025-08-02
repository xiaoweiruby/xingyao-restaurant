import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'sonner'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Chef from './pages/Chef'
import Menu from './pages/Menu'
import Reservation from './pages/Reservation'
import Gallery from './pages/Gallery'
import About from './pages/About'

/**
 * 星曜餐厅网站主应用组件
 * 配置路由和全局布局
 */
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-ivory">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chef" element={<Chef />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Toaster position="top-right" richColors />
      </div>
    </Router>
  )
}

export default App
