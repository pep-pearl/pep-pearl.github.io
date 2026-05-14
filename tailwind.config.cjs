/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        page: '#F7FAF6',
        'page-soft': '#EEF4EF',
        surface: '#FFFFFF',
        'surface-muted': '#F2F6F2',
        ink: '#111A15',
        'ink-muted': '#6F7B73',
        line: '#DDE6DE',
        'line-strong': '#BFCDBF',
        brand: '#245C46',
        'brand-dark': '#123326',
        signal: '#B7F06A',
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
