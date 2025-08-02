import { motion } from 'framer-motion'
import { Award, BookOpen, Users, Clock, Star, ChefHat } from 'lucide-react'

/**
 * 主厨介绍页面组件
 * 展示主厨背景、理念和成就
 */
const Chef = () => {
  // 主厨成就数据
  const achievements = [
    {
      icon: Award,
      title: '米其林三星',
      description: '连续5年获得米其林三星认证'
    },
    {
      icon: BookOpen,
      title: '法国蓝带学院',
      description: '巴黎蓝带烹饪学院荣誉毕业'
    },
    {
      icon: Users,
      title: '20年经验',
      description: '在顶级法式餐厅积累丰富经验'
    },
    {
      icon: Clock,
      title: '传承创新',
      description: '传统法式技艺与现代创新完美结合'
    }
  ]

  // 料理理念
  const philosophy = [
    {
      title: '食材至上',
      description: '精选来自法国和世界各地的顶级食材，每一份原料都经过严格筛选，确保品质卓越。'
    },
    {
      title: '技艺传承',
      description: '秉承法式料理的经典技法，同时融入现代烹饪理念，创造出独具特色的美食体验。'
    },
    {
      title: '艺术呈现',
      description: '每一道菜品都是一件艺术品，从色彩搭配到摆盘设计，追求视觉与味觉的完美统一。'
    },
    {
      title: '情感共鸣',
      description: '料理不仅是味蕾的享受，更是情感的表达，希望通过美食传递温暖与感动。'
    }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-navy text-white overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-6">
                <ChefHat className="w-8 h-8 text-gold mr-3" />
                <span className="text-gold font-semibold">主厨介绍</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
                陈志明
                <span className="block text-3xl text-gold mt-2">Chef Chen Zhiming</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                法国蓝带烹饪学院荣誉毕业，拥有20年顶级法式餐厅工作经验。
                曾在巴黎米其林三星餐厅担任副主厨，深谙法式料理精髓。
                回国后创立星曜餐厅，致力于将正宗法式料理带给中国食客。
              </p>
              <div className="flex items-center space-x-2">
                {[1, 2, 3].map((star) => (
                  <Star key={star} className="w-6 h-6 text-gold fill-current" />
                ))}
                <span className="text-gold font-semibold ml-2">米其林三星主厨</span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="主厨陈志明"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gold-gradient p-6 rounded-2xl shadow-2xl">
                <div className="text-center text-white">
                  <div className="text-3xl font-bold">20+</div>
                  <div className="text-sm">年经验</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
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
              专业成就
            </h2>
            <div className="w-24 h-1 bg-gold-gradient mx-auto mb-6" />
            <p className="text-xl text-warm-gray max-w-3xl mx-auto">
              多年的专业训练和实践经验，成就了今天的星曜餐厅
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                    <div className="bg-gold-gradient rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-navy mb-3">
                      {achievement.title}
                    </h3>
                    <p className="text-warm-gray">
                      {achievement.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
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
              料理理念
            </h2>
            <div className="w-24 h-1 bg-gold-gradient mx-auto mb-6" />
            <p className="text-xl text-warm-gray max-w-3xl mx-auto">
              "料理是一门艺术，每一道菜都承载着厨师的情感和故事"
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {philosophy.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-ivory rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-2xl font-serif font-bold text-navy mb-4">
                  {item.title}
                </h3>
                <p className="text-warm-gray leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-10" />
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-6xl text-gold mb-6">"</div>
            <blockquote className="text-2xl md:text-3xl font-serif italic mb-8 leading-relaxed">
              真正的法式料理不仅仅是技艺的展现，
              更是对生活美学的追求和对完美的执着。
              我希望通过每一道菜，让客人感受到法式文化的优雅与浪漫。
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-0.5 bg-gold" />
              <span className="text-gold font-semibold">陈志明</span>
              <div className="w-12 h-0.5 bg-gold" />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Chef