/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        ink: 'var(--ink)',
        mute: 'var(--mute)',
        line: 'var(--line)',
        pine: 'var(--pine)',
        onpine: 'var(--onpine)',
        amber: 'var(--amber)',
        mint: 'var(--mint)',
      },
      fontFamily: {
        head: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        body: ['Figtree', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
