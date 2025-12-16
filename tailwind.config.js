/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./layouts/**/*.html", "../../content/**/*.md"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Andada Pro"', '"Public Sans"', '"Noto Serif Devanagari"', 'sans-serif'],
        serif: ['"Andada Pro"', '"Noto Serif Devanagari"', 'serif'],
        mono: ['"Iosevka Term"', 'monospace'],
        display: ['"Andada Pro"', '"Public Sans"', '"Noto Serif Devanagari"', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        accent: {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            fontSize: 'var(--text-base-size, 1.2rem)', // Base size for prose (24px)
            lineHeight: '1.8',
            maxWidth: 'none',
            p: {
              textAlign: 'justify',
              marginTop: '1.5em',
              marginBottom: '1.5em',
            },
            img: {
              marginLeft: 'auto',
              marginRight: 'auto',
            },
            'h1, h2, h3, h4': {
              fontFamily: theme('fontFamily.display'),
              fontWeight: '700',
              marginTop: '2em',
              marginBottom: '1em',
              lineHeight: '1.3',
            },
            h1: {
              fontSize: '2.5em',
              background: `linear-gradient(to right, ${theme('colors.primary.600')}, ${theme('colors.accent.600')})`,
              '-webkit-background-clip': 'text',
              '-webkit-text-fill-color': 'transparent',
              display: 'inline-block',
            },
            h2: {
              fontSize: '2em',
              color: theme('colors.gray.900'),
              borderBottom: `2px solid ${theme('colors.primary.100')}`,
              paddingBottom: '0.2em',
            },
            a: {
              color: theme('colors.primary.600'),
              textDecoration: 'none',
              borderBottom: `1px solid ${theme('colors.primary.300')}`,
              transition: 'all 0.2s ease',
              '&:hover': {
                color: theme('colors.primary.700'),
                borderBottomColor: theme('colors.primary.600'),
                backgroundColor: theme('colors.primary.50'),
              },
            },
            blockquote: {
              borderLeftWidth: '0',
              backgroundColor: 'transparent',
              padding: '0.5em 0.5em 0.5em 3em',
              fontStyle: 'italic',
              marginTop: '1em',
              marginBottom: '1em',
              position: 'relative',
              quotes: '"\\201C""\\201D""\\2018""\\2019"',
              borderRadius: '0',
            },
            'blockquote::before': {
              content: 'open-quote',
              position: 'absolute',
              left: '0.25em',
              top: '-0.25em',
              fontSize: '4em',
              lineHeight: '1',
              color: theme('colors.accent.200'),
              fontFamily: 'serif',
            },
            'blockquote p:first-of-type::before': {
              content: 'none',
            },
            'blockquote p:last-of-type::after': {
              content: 'none',
            },
            code: {
              color: 'inherit',
              backgroundColor: theme('colors.gray.100'),
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
              fontWeight: '600',
              fontFamily: theme('fontFamily.mono'),
              fontSize: '0.75em',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            pre: {
              backgroundColor: 'transparent',
              color: 'inherit',
              fontSize: '0.75em',
            },
            'pre code': {
              backgroundColor: 'transparent',
              color: 'inherit',
              fontSize: 'inherit',
              fontWeight: 'inherit',
            },
          },
        },
        invert: {
          css: {
            color: theme('colors.gray.100'),
            'h1, h2, h3, h4': {
              color: theme('colors.gray.100'),
            },
            h2: {
              borderBottomColor: theme('colors.gray.700'),
            },
            a: {
              color: theme('colors.primary.400'),
              borderBottomColor: theme('colors.primary.700'),
              '&:hover': {
                color: theme('colors.primary.300'),
                borderBottomColor: theme('colors.primary.400'),
                backgroundColor: theme('colors.primary.900/30'),
              },
            },
            blockquote: {
              borderLeftWidth: '0',
              backgroundColor: 'transparent',
              color: theme('colors.gray.300'),
            },
            'blockquote::before': {
              color: theme('colors.accent.800'),
            },
            code: {
              color: 'inherit',
              backgroundColor: theme('colors.gray.800'),
            },
            pre: {
              backgroundColor: 'transparent',
              color: 'inherit',
            },
            'pre code': {
              backgroundColor: 'transparent',
              color: 'inherit',
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
