import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Star } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * 星曜餐厅导航栏组件
 * 包含品牌logo、导航菜单和移动端响应式设计
 */
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  // 监听滚动事件，改变导航栏样式
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // 导航菜单项
  const navItems = [
    { path: '/', label: '首页' },
    { path: '/chef', label: '主厨介绍' },
    { path: '/menu', label: '菜单' },
    { path: '/gallery', label: '餐厅环境' },
    { path: '/about', label: '关于我们' },
    { path: '/reservation', label: '预约', isButton: true },
  ]

  /**
   * 检查当前路径是否为活跃状态
   */
  const isActive = (path: string) => location.pathname === path

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-ivory/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Star className="w-8 h-8 text-gold group-hover:text-gold-light transition-colors" />
              <div className="absolute inset-0 bg-gold/20 rounded-full blur-lg group-hover:bg-gold-light/30 transition-all" />
            </div>
            <span className="text-2xl font-serif font-bold text-navy group-hover:text-gold transition-colors">
              星曜
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  item.isButton
                    ? 'bg-gold-gradient text-white rounded-full hover:shadow-lg hover:scale-105'
                    : isActive(item.path)
                    ? 'text-gold'
                    : 'text-navy hover:text-gold'
                }`}
              >
                {item.label}
                {!item.isButton && isActive(item.path) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-navy hover:text-gold hover:bg-gold/10 transition-all"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-ivory/95 backdrop-blur-md border-t border-gold/20"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 text-base font-medium rounded-lg transition-all ${
                    item.isButton
                      ? 'bg-gold-gradient text-white text-center'
                      : isActive(item.path)
                      ? 'text-gold bg-gold/10'
                      : 'text-navy hover:text-gold hover:bg-gold/5'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar