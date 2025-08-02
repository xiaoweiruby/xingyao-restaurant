import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Calendar, Clock, Users, Phone, Mail, MessageSquare, CheckCircle } from 'lucide-react'
import { toast } from 'sonner'

// 预约表单验证模式
const reservationSchema = z.object({
  name: z.string().min(2, '姓名至少需要2个字符'),
  phone: z.string().regex(/^1[3-9]\d{9}$/, '请输入有效的手机号码'),
  email: z.string().email('请输入有效的邮箱地址'),
  date: z.string().min(1, '请选择用餐日期'),
  time: z.string().min(1, '请选择用餐时间'),
  guests: z.number().min(1, '用餐人数至少为1人').max(12, '用餐人数不能超过12人'),
  occasion: z.string().optional(),
  dietary: z.string().optional(),
  notes: z.string().optional()
})

type ReservationForm = z.infer<typeof reservationSchema>

/**
 * 预约系统页面组件
 * 提供完整的在线预约功能
 */
const Reservation = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  // 可预约时间段
  const timeSlots = [
    '11:30', '12:00', '12:30', '13:00', '13:30',
    '18:00', '18:30', '19:00', '19:30', '20:00', '20:30'
  ]

  // 特殊场合选项
  const occasions = [
    '生日庆祝', '结婚纪念日', '商务宴请', '求婚', '家庭聚餐', '朋友聚会', '其他'
  ]

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ReservationForm>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      guests: 2
    }
  })

  /**
   * 处理表单提交
   */
  const onSubmit = async (data: ReservationForm) => {
    setIsLoading(true)
    
    try {
      // 模拟API调用
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      console.log('预约信息:', data)
      setIsSubmitted(true)
      toast.success('预约提交成功！我们将在24小时内与您联系确认。')
      reset()
    } catch (error) {
      toast.error('预约提交失败，请稍后重试。')
    } finally {
      setIsLoading(false)
    }
  }

  /**
   * 获取今天的日期（用于日期选择器的最小值）
   */
  const getTodayDate = () => {
    const today = new Date()
    return today.toISOString().split('T')[0]
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center bg-ivory">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center bg-white rounded-2xl p-12 shadow-2xl max-w-md mx-4"
        >
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
          <h2 className="text-3xl font-serif font-bold text-navy mb-4">
            预约成功！
          </h2>
          <p className="text-warm-gray mb-8">
            感谢您选择星曜餐厅。我们将在24小时内与您联系确认预约详情。
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="bg-gold-gradient text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
          >
            继续预约
          </button>
        </motion.div>
      </div>
    )
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
              <Calendar className="w-8 h-8 text-gold mr-3" />
              <span className="text-gold font-semibold">在线预约</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              预约您的专属体验
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              星曜餐厅为您提供私密而奢华的用餐环境，
              请提前预约以确保为您安排最佳的用餐体验。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="py-20 bg-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-serif font-bold text-navy mb-4">
                  预约信息
                </h2>
                <p className="text-warm-gray">
                  请填写以下信息，我们将为您安排最佳的用餐体验
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* 基本信息 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">
                      姓名 *
                    </label>
                    <input
                      {...register('name')}
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                      placeholder="请输入您的姓名"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">
                      手机号码 *
                    </label>
                    <input
                      {...register('phone')}
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                      placeholder="请输入手机号码"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-navy mb-2">
                    邮箱地址 *
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                    placeholder="请输入邮箱地址"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                {/* 用餐信息 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">
                      用餐日期 *
                    </label>
                    <input
                      {...register('date')}
                      type="date"
                      min={getTodayDate()}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                    />
                    {errors.date && (
                      <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">
                      用餐时间 *
                    </label>
                    <select
                      {...register('time')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                    >
                      <option value="">请选择时间</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                    {errors.time && (
                      <p className="text-red-500 text-sm mt-1">{errors.time.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">
                      用餐人数 *
                    </label>
                    <input
                      {...register('guests', { valueAsNumber: true })}
                      type="number"
                      min="1"
                      max="12"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                    />
                    {errors.guests && (
                      <p className="text-red-500 text-sm mt-1">{errors.guests.message}</p>
                    )}
                  </div>
                </div>

                {/* 特殊场合 */}
                <div>
                  <label className="block text-sm font-semibold text-navy mb-2">
                    特殊场合
                  </label>
                  <select
                    {...register('occasion')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                  >
                    <option value="">请选择场合（可选）</option>
                    {occasions.map((occasion) => (
                      <option key={occasion} value={occasion}>
                        {occasion}
                      </option>
                    ))}
                  </select>
                </div>

                {/* 饮食要求 */}
                <div>
                  <label className="block text-sm font-semibold text-navy mb-2">
                    饮食要求
                  </label>
                  <input
                    {...register('dietary')}
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                    placeholder="如有过敏或特殊饮食要求，请告知我们"
                  />
                </div>

                {/* 备注 */}
                <div>
                  <label className="block text-sm font-semibold text-navy mb-2">
                    其他备注
                  </label>
                  <textarea
                    {...register('notes')}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all resize-none"
                    placeholder="如有其他特殊要求或备注，请在此说明"
                  />
                </div>

                {/* 提交按钮 */}
                <div className="text-center pt-6">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-gold-gradient text-white px-12 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                        提交中...
                      </div>
                    ) : (
                      '提交预约'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-serif font-bold text-navy mb-6">
            联系我们
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center">
              <Phone className="w-6 h-6 text-gold mr-3" />
              <div>
                <div className="font-semibold text-navy">电话预约</div>
                <div className="text-warm-gray">400-888-8888</div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Mail className="w-6 h-6 text-gold mr-3" />
              <div>
                <div className="font-semibold text-navy">邮箱咨询</div>
                <div className="text-warm-gray">info@xingyao.com</div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-gold mr-3" />
              <div>
                <div className="font-semibold text-navy">微信客服</div>
                <div className="text-warm-gray">XingYao_Service</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Reservation