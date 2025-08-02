import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Camera, X, Users, Sparkles, Heart, Building } from 'lucide-react'

/**
 * 餐厅环境展示页面组件
 * 展示用餐环境和包间介绍
 */
const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [activeCategory, setActiveCategory] = useState('main')

  // 图片分类
  const categories = [
    { id: 'main', name: '主餐厅', icon: Building },
    { id: 'private', name: '包间', icon: Users },
    { id: 'details', name: '细节', icon: Sparkles }
  ]

  // 主餐厅图片
  const mainDiningImages = [
    {
      src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
      title: '主餐厅全景',
      description: '优雅的主餐厅空间，水晶吊灯与金色装饰营造奢华氛围'
    },
    {
      src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
      title: '用餐区域',
      description: '舒适的用餐座椅配以温暖的灯光，营造浪漫用餐氛围'
    },
    {
      src: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
      title: '酒吧区域',
      description: '精选葡萄酒展示区，大理石吧台彰显品质'
    },
    {
      src: 'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
      title: '入口大厅',
      description: '大理石地面配以金色装饰，彰显法式优雅'
    }
  ]

  // 包间图片类型定义
  interface PrivateRoomImage {
    src: string
    title: string
    description: string
    capacity: string
    features: string[]
  }

  // 包间图片
  const privateRoomImages: PrivateRoomImage[] = [
    {
      src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
      title: '浪漫双人包间',
      description: '私密的双人用餐空间，完美的约会场所',
      capacity: '2人',
      features: ['浪漫灯光', '私密空间', '定制服务']
    },
    {
      src: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
      title: '商务包间',
      description: '专业的商务用餐环境，适合重要会议',
      capacity: '6-8人',
      features: ['商务设施', '隐私保护', '专业服务']
    },
    {
      src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
      title: '家庭包间',
      description: '宽敞的家庭聚餐空间，温馨舒适',
      capacity: '8-12人',
      features: ['宽敞空间', '温馨氛围', '家庭友好']
    },
    {
      src: 'https://images.unsplash.com/photo-1481833761820-0509d3217039?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
      title: 'VIP包间',
      description: '顶级VIP用餐体验，全景落地窗',
      capacity: '4-6人',
      features: ['全景窗景', '顶级服务', '专属体验']
    }
  ]

  // 细节图片
  const detailImages = [
    {
      src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
      title: '精致餐具',
      description: '顶级瓷器与水晶酒杯，每一处细节都体现品质'
    },
    {
      src: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
      title: '鲜花装饰',
      description: '每日更换的新鲜花卉，为用餐增添自然美感'
    },
    {
      src: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
      title: '灯光设计',
      description: '精心设计的灯光系统，营造完美用餐氛围'
    },
    {
      src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
      title: '专业服务',
      description: '训练有素的服务团队，为您提供无微不至的关怀'
    }
  ]

  /**
   * 获取当前分类的图片数据
   */
  const getCurrentImages = () => {
    switch (activeCategory) {
      case 'main':
        return mainDiningImages
      case 'private':
        return privateRoomImages
      case 'details':
        return detailImages
      default:
        return mainDiningImages
    }
  }

  /**
   * 打开图片预览
   */
  const openImageModal = (imageSrc: string) => {
    setSelectedImage(imageSrc)
  }

  /**
   * 关闭图片预览
   */
  const closeImageModal = () => {
    setSelectedImage(null)
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
              <Camera className="w-8 h-8 text-gold mr-3" />
              <span className="text-gold font-semibold">餐厅环境</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              奢华用餐空间
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              精心设计的用餐环境，每一处细节都体现着法式优雅与现代奢华的完美融合，
              为您营造难忘的用餐体验。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Navigation */}
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

          {/* Image Gallery */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className={`grid gap-8 ${
                activeCategory === 'details'
                  ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
                  : 'grid-cols-1 md:grid-cols-2'
              }`}
            >
              {getCurrentImages().map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="group cursor-pointer"
                  onClick={() => openImageModal(image.src)}
                >
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                    <div className="relative overflow-hidden">
                      <img 
                        src={image.src}
                        alt={image.title}
                        className={`w-full object-cover group-hover:scale-110 transition-transform duration-500 ${
                          activeCategory === 'details' ? 'h-64' : 'h-80'
                        }`}
                      />
                      <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-all duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Camera className="w-12 h-12 text-white" />
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-serif font-bold text-navy mb-3">
                        {image.title}
                      </h3>
                      <p className="text-warm-gray leading-relaxed mb-4">
                        {image.description}
                      </p>
                      
                      {/* 包间特殊信息 */}
                      {activeCategory === 'private' && 'capacity' in image && (
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-warm-gray">
                            <Users className="w-4 h-4 mr-2" />
                            容纳人数: {(image as PrivateRoomImage).capacity}
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {(image as PrivateRoomImage).features?.map((feature, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-gold/10 text-gold text-xs rounded-full"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
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

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-6">
              环境特色
            </h2>
            <div className="w-24 h-1 bg-gold-gradient mx-auto mb-6" />
            <p className="text-xl text-warm-gray max-w-3xl mx-auto">
              每一个空间都经过精心设计，为您提供最舒适的用餐体验
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Sparkles,
                title: '奢华装饰',
                description: '精选材料与艺术品，营造高端用餐氛围'
              },
              {
                icon: Heart,
                title: '温馨氛围',
                description: '温暖的灯光与舒适的座椅，让您倍感温馨'
              },
              {
                icon: Users,
                title: '私密空间',
                description: '多样化的包间选择，满足不同场合需求'
              }
            ].map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="bg-ivory rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group-hover:-translate-y-2">
                    <div className="bg-gold-gradient rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-navy mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-warm-gray">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeImageModal}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage}
                alt="预览图片"
                className="w-full h-full object-contain rounded-lg"
              />
              <button
                onClick={closeImageModal}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Gallery