import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Star, Award, ChefHat, Calendar, Camera, Info } from 'lucide-react'

/**
 * 星曜餐厅首页组件
 * 展示品牌形象、米其林认证和餐厅亮点
 */
const Home = () => {
  // 餐厅亮点数据
  const highlights = [
    {
      icon: Award,
      title: '米其林三星',
      description: '连续五年获得米其林三星认证，代表着法式料理的最高水准',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      icon: ChefHat,
      title: '顶级主厨',
      description: '由法国蓝带学院毕业的资深主厨领衔，带来正宗的法式料理体验',
      image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      icon: Camera,
      title: '奢华环境',
      description: '精心设计的用餐环境，每一处细节都体现着法式优雅与现代奢华',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-hero-pattern">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')`
          }}
        >
          <div className="absolute inset-0 bg-navy/40" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white px-4"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-8"
          >
            <Star className="w-16 h-16 text-gold mx-auto mb-4 animate-float" />
            <h1 className="text-6xl md:text-8xl font-serif font-bold mb-4 bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
              星曜
            </h1>
            <div className="flex justify-center items-center space-x-2 mb-6">
              {[1, 2, 3].map((star) => (
                <Star key={star} className="w-8 h-8 text-gold fill-current" />
              ))}
            </div>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            米其林三星法式私厨餐厅<br />
            <span className="text-gold">品味艺术，享受奢华</span>
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="space-x-4"
          >
            <Link 
              to="/reservation"
              className="inline-flex items-center px-8 py-4 bg-gold-gradient text-white font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <Calendar className="w-5 h-5 mr-2" />
              立即预约
            </Link>
            <Link 
              to="/menu"
              className="inline-flex items-center px-8 py-4 border-2 border-gold text-gold font-semibold rounded-full hover:bg-gold hover:text-white transition-all duration-300"
            >
              查看菜单
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-6">
              为什么选择星曜
            </h2>
            <div className="w-24 h-1 bg-gold-gradient mx-auto mb-6" />
            <p className="text-xl text-warm-gray max-w-3xl mx-auto">
              我们致力于为每一位客人提供无与伦比的法式料理体验，
              从食材选择到服务细节，每一个环节都体现着我们对完美的追求。
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={highlight.image}
                      alt={highlight.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <IconComponent className="w-8 h-8 text-gold" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-serif font-bold text-navy mb-3">
                      {highlight.title}
                    </h3>
                    <p className="text-warm-gray leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-10" />
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              开启您的美食之旅
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              让我们为您呈现一场难忘的法式料理盛宴
            </p>
            <div className="space-x-4">
              <Link 
                to="/reservation"
                className="inline-flex items-center px-8 py-4 bg-gold-gradient text-white font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <Calendar className="w-5 h-5 mr-2" />
                预约用餐
              </Link>
              <Link 
                to="/about"
                className="inline-flex items-center px-8 py-4 border-2 border-gold text-gold font-semibold rounded-full hover:bg-gold hover:text-white transition-all duration-300"
              >
                <Info className="w-5 h-5 mr-2" />
                了解更多
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home