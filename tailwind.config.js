/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        panel: 'var(--panel)',
        panel2: 'var(--panel-2)',
        border: 'var(--border)',
        text: 'var(--text)',
        muted: 'var(--muted)',
        teal: 'var(--teal)',
        tealDim: 'var(--teal-dim)',
        amber: 'var(--amber)',
        amberDim: 'var(--amber-dim)',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      maxWidth: {
        wrap: '1180px',
      },
      borderRadius: {
        card: '16px',
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translate(0,0) scale(1)' },
          '50%': { transform: 'translate(30px,-30px) scale(1.08)' },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        spin34: { to: { transform: 'rotate(360deg)' } },
        ringpulse: {
          '0%': { boxShadow: '0 0 0 0 rgba(45,212,168,.55)' },
          '70%': { boxShadow: '0 0 0 8px rgba(45,212,168,0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(45,212,168,0)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: 0.3 },
          '50%': { opacity: 1 },
        },
        blink: {
          '50%': { borderColor: 'transparent' },
        },
        down: {
          '0%': { transform: 'scaleY(0)', transformOrigin: 'top' },
          '50%': { transform: 'scaleY(1)', transformOrigin: 'top' },
          '51%': { transformOrigin: 'bottom' },
          '100%': { transform: 'scaleY(0)', transformOrigin: 'bottom' },
        },
      },
      animation: {
        drift: 'drift 14s ease-in-out infinite',
        floaty: 'floaty 5s ease-in-out infinite',
        'spin-slow': 'spin34 34s linear infinite',
        'spin-slow-rev': 'spin34 46s linear infinite reverse',
        ringpulse: 'ringpulse 1.8s infinite',
        pulseDot: 'pulseDot 1s ease-in-out infinite',
        blink: 'blink 1s step-end infinite',
        down: 'down 1.6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
