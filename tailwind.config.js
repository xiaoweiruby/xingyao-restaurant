/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        // 星曜餐厅品牌色彩
        'gold': '#B8860B',
        'gold-light': '#DAA520',
        'gold-dark': '#996515',
        'ivory': '#FFFFF0',
        'navy': '#1E3A8A',
        'warm-gray': '#6B7280',
        'warm-gray-light': '#9CA3AF',
        'warm-gray-dark': '#4B5563',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #B8860B 0%, #DAA520 100%)',
        'hero-pattern': 'radial-gradient(circle at 50% 50%, rgba(184, 134, 11, 0.1) 0%, transparent 50%)',
      },
    },
  },
  plugins: [],
};
