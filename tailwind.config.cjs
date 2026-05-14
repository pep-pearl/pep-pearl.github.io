/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        page: '#f6f8f4',
        surface: '#ffffff',
        muted: '#eef4ef',
        ink: '#15201b',
        soft: '#5c6f66',
        faint: '#7c8b84',
        line: '#d9e3dd',
        accent: '#1f6b55',
        accentSoft: '#dceee6',
        accentStrong: '#144937',
      },
      fontFamily: {
        sans: [
          'Pretendard',
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'sans-serif',
        ],
      },
      boxShadow: {
        soft: '0 18px 50px rgba(21, 32, 27, 0.08)',
      },
    },
  },
  plugins: [],
}
