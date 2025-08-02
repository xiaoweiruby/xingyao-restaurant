import { motion } from 'framer-motion'
import { Star, Award, Clock, MapPin, Phone, Mail, Users, Heart, Sparkles } from 'lucide-react'

/**
 * 关于我们页面组件
 * 展示餐厅历史、理念和团队信息
 */
const About = () => {
  // 里程碑数据
  const milestones = [
    {
      year: '2018',
      title: '星曜诞生',
      description: '在上海外滩开设第一家餐厅，致力于传承正宗法式料理'
    },
    {
      year: '2019',
      title: '米其林一星',
      description: '凭借卓越的料理品质获得米其林一星认证'
    },
    {
      year: '2021',
      title: '米其林二星',
      description: '在疫情挑战中坚持品质，成功晋升米其林二星'
    },
    {
      year: '2023',
      title: '米其林三星',
      description: '达到法式料理的巅峰，荣获米其林三星殊荣'
    }
  ]

  // 核心价值观
  const values = [
    {
      icon: Heart,
      title: '匠心精神',
      description: '每一道菜品都倾注我们的匠心与热情，追求完美的味觉体验'
    },
    {
      icon: Sparkles,
      title: '创新传承',
      description: '在传承经典法式料理的基础上，融入现代创新元素'
    },
    {
      icon: Users,
      title: '宾客至上',
      description: '以宾客满意为最高目标，提供无微不至的贴心服务'
    },
    {
      icon: Award,
      title: '品质承诺',
      description: '严选顶级食材，坚持最高品质标准，不负米其林三星声誉'
    }
  ]

  // 团队成员
  const teamMembers = [
    {
      name: '陈志明',
      position: '主厨兼创始人',
      image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      description: '法国蓝带烹饪学院毕业，拥有20年法式料理经验'
    },
    {
      name: '李雅婷',
      position: '副主厨',
      image: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      description: '专精法式甜点制作，曾在巴黎米其林餐厅工作5年'
    },
    {
      name: '王建华',
      position: '餐厅经理',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      description: '拥有15年高端餐饮管理经验，致力于提供完美服务体验'
    },
    {
      name: '张美玲',
      position: '侍酒师',
      image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      description: '国际侍酒师协会认证，精通法国葡萄酒文化与搭配'
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
                <Star className="w-8 h-8 text-gold mr-3" />
                <span className="text-gold font-semibold">关于星曜</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
                法式料理的
                <span className="text-gold">艺术殿堂</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                星曜餐厅自2018年创立以来，始终致力于将正宗的法式料理艺术带给每一位宾客。
                我们相信，美食不仅是味觉的享受，更是文化的传承与艺术的表达。
              </p>
              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold mb-1">5</div>
                  <div className="text-sm text-gray-300">年历程</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold mb-1">★★★</div>
                  <div className="text-sm text-gray-300">米其林三星</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold mb-1">50+</div>
                  <div className="text-sm text-gray-300">团队成员</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                alt="星曜餐厅"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gold-gradient opacity-20 rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
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
              我们的使命
            </h2>
            <div className="w-24 h-1 bg-gold-gradient mx-auto mb-6" />
            <p className="text-xl text-warm-gray max-w-4xl mx-auto leading-relaxed">
              "将法式料理的精髓与东方文化的细腻相融合，为每一位宾客创造独一无二的美食体验。
              我们不仅是一家餐厅，更是文化交流的桥梁，艺术表达的舞台。"
            </p>
            <div className="mt-8 text-right text-navy font-serif italic">
              —— 陈志明，主厨兼创始人
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
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
              发展历程
            </h2>
            <div className="w-24 h-1 bg-gold-gradient mx-auto mb-6" />
            <p className="text-xl text-warm-gray max-w-3xl mx-auto">
              从初创到米其林三星，见证我们的成长足迹
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gold-gradient" />
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-ivory rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                      <div className="text-3xl font-bold text-gold mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-serif font-bold text-navy mb-3">{milestone.title}</h3>
                      <p className="text-warm-gray">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-gold rounded-full border-4 border-white shadow-lg" />
                  </div>
                  
                  <div className="w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              核心价值观
            </h2>
            <div className="w-24 h-1 bg-gold-gradient mx-auto mb-6" />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              指引我们前行的核心理念
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group-hover:-translate-y-2">
                    <div className="bg-gold-gradient rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-serif font-bold mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              核心团队
            </h2>
            <div className="w-24 h-1 bg-gold-gradient mx-auto mb-6" />
            <p className="text-xl text-warm-gray max-w-3xl mx-auto">
              专业的团队，为您提供卓越的服务体验
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group-hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-all duration-300" />
                  </div>
                  
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-serif font-bold text-navy mb-2">
                      {member.name}
                    </h3>
                    <div className="text-gold font-semibold mb-3">
                      {member.position}
                    </div>
                    <p className="text-warm-gray text-sm leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
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
              联系我们
            </h2>
            <div className="w-24 h-1 bg-gold-gradient mx-auto mb-6" />
            <p className="text-xl text-warm-gray max-w-3xl mx-auto">
              期待为您提供难忘的用餐体验
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: MapPin,
                title: '餐厅地址',
                content: '上海市黄浦区外滩18号\n星曜法式餐厅'
              },
              {
                icon: Phone,
                title: '预约电话',
                content: '+86 21 6321 8888\n营业时间: 17:30 - 22:30'
              },
              {
                icon: Mail,
                title: '邮箱联系',
                content: 'reservation@xingyao.com\ninfo@xingyao.com'
              }
            ].map((contact, index) => {
              const IconComponent = contact.icon
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
                      {contact.title}
                    </h3>
                    <p className="text-warm-gray whitespace-pre-line">
                      {contact.content}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About