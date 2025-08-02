import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Wine, Utensils, Star, Clock } from 'lucide-react'

/**
 * 菜单展示页面组件
 * 展示季节性菜单、招牌菜品和酒水搭配
 */
const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('signature')

  // 菜单分类
  const categories = [
    { id: 'signature', name: '招牌菜品', icon: Star },
    { id: 'seasonal', name: '季节菜单', icon: Clock },
    { id: 'wine', name: '酒水搭配', icon: Wine }
  ]

  // 招牌菜品
  const signatureDishes = [
    {
      name: '法式鹅肝配无花果',
      description: '选用法国佩里戈尔鹅肝，搭配新鲜无花果和波特酒酱汁，口感丰富层次分明',
      price: '¥680',
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      time: '25分钟',
      featured: true
    },
    {
      name: '蓝龙虾配香槟泡沫',
      description: '布列塔尼蓝龙虾配以香槟泡沫和海藻盐，展现海洋的纯净与奢华',
      price: '¥1280',
      image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      time: '30分钟',
      featured: true
    },
    {
      name: '松露牛排配红酒汁',
      description: '澳洲和牛配以黑松露片和经典红酒汁，传统法式技艺的完美体现',
      price: '¥980',
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      time: '35分钟'
    },
    {
      name: '法式洋葱汤',
      description: '经典法式洋葱汤配以格鲁耶尔奶酪和法式面包丁，温暖人心的传统美味',
      price: '¥180',
      image: 'https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      time: '20分钟'
    }
  ]

  // 季节菜单
  const seasonalDishes = [
    {
      name: '春季芦笋配荷兰汁',
      description: '嫩绿芦笋配以经典荷兰汁和帕尔马火腿片，春天的清新味道',
      price: '¥320',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      time: '15分钟',
      season: '春季限定'
    },
    {
      name: '夏日冷汤配薄荷',
      description: '清爽的黄瓜冷汤配以新鲜薄荷和酸奶泡沫，夏日的完美开胃菜',
      price: '¥220',
      image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      time: '10分钟',
      season: '夏季限定'
    },
    {
      name: '秋季栗子浓汤',
      description: '香甜栗子浓汤配以松露油和烤榛子，秋天的温暖拥抱',
      price: '¥280',
      image: 'https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      time: '20分钟',
      season: '秋季限定'
    }
  ]

  // 酒水搭配
  const wineSelection = [
    {
      name: 'Dom Pérignon 2012',
      description: '香槟之王，完美搭配鹅肝和海鲜类菜品',
      price: '¥2800/瓶',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      type: '香槟',
      pairing: '搭配鹅肝、海鲜'
    },
    {
      name: 'Château Margaux 2015',
      description: '波尔多一级酒庄，与牛排和红肉完美搭配',
      price: '¥8800/瓶',
      image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      type: '红酒',
      pairing: '搭配牛排、红肉'
    },
    {
      name: 'Sancerre Loire Valley',
      description: '卢瓦尔河谷白酒，清新的矿物质感，适合搭配鱼类',
      price: '¥680/瓶',
      image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      type: '白酒',
      pairing: '搭配鱼类、白肉'
    }
  ]

  /**
   * 获取当前分类的菜品数据
   */
  const getCurrentItems = () => {
    switch (activeCategory) {
      case 'signature':
        return signatureDishes
      case 'seasonal':
        return seasonalDishes
      case 'wine':
        return wineSelection
      default:
        return signatureDishes
    }
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-navy text-white overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-6">
              <Utensils className="w-8 h-8 text-gold mr-3" />
              <span className="text-gold font-semibold">精致菜单</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              法式料理艺术
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              每一道菜品都是主厨的匠心之作，选用世界顶级食材，
              运用传统法式技艺，为您呈现味觉与视觉的双重盛宴。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-12 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-4 mb-12">
            {categories.map((category) => {
              const IconComponent = category.icon
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-gold-gradient text-white shadow-lg'
                      : 'bg-white text-navy hover:bg-gold hover:text-white'
                  }`}
                >
                  <IconComponent className="w-5 h-5 mr-2" />
                  {category.name}
                </button>
              )
            })}
          </div>

          {/* Menu Items */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {getCurrentItems().map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                    
                    {/* Featured Badge */}
                    {item.featured && (
                      <div className="absolute top-4 left-4 bg-gold-gradient text-white px-3 py-1 rounded-full text-sm font-semibold">
                        招牌推荐
                      </div>
                    )}
                    
                    {/* Season Badge */}
                    {item.season && (
                      <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {item.season}
                      </div>
                    )}
                    
                    {/* Wine Type Badge */}
                    {item.type && (
                      <div className="absolute top-4 left-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {item.type}
                      </div>
                    )}
                    
                    <div className="absolute bottom-4 right-4 text-white">
                      <div className="text-2xl font-bold">{item.price}</div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-serif font-bold text-navy mb-3">
                      {item.name}
                    </h3>
                    <p className="text-warm-gray leading-relaxed mb-4">
                      {item.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-warm-gray">
                      {item.time && (
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {item.time}
                        </div>
                      )}
                      {item.pairing && (
                        <div className="flex items-center">
                          <Wine className="w-4 h-4 mr-1" />
                          {item.pairing}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-6">
              品味法式经典
            </h2>
            <p className="text-xl text-warm-gray mb-8">
              预约您的专属用餐体验，让我们为您呈现难忘的法式料理之旅
            </p>
            <motion.a
              href="/reservation"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-gold-gradient text-white font-semibold rounded-full hover:shadow-xl transition-all duration-300"
            >
              <Utensils className="w-5 h-5 mr-2" />
              立即预约
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Menu