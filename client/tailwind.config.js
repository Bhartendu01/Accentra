export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui']
      },
      colors: {
        ink: '#0f172a',
        ocean: '#0f766e',
        coral: '#f97316',
        berry: '#8b5cf6'
      },
      boxShadow: {
        glow: '0 22px 80px rgba(20,184,166,.22)'
      }
    }
  },
  plugins: []
};
