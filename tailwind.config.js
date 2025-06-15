/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'navbarShadow' : "0 1px 5px 1px grey",
        'boxShadow': '3px 3px 5px grey'
      },
      backgroundImage: {
        'gradient-animated': 'linear-gradient(-70deg, #10518A, #306EA5, #508AC0, #90C3F6)'
      },
      backgroundSize: {
        '200': '200% 200%' // to have big background size for moving effect
      },
      borderRadius: {
        'customborder' : '42% 56% 72% 28% / 42% 42% 56% 48%'
      },
      animation: {
        'change' : 'change 10s linear infinite',
        'popup' : 'popup .2s forwards',
        'topAnim': 'topAnim .5s forwards',
        'topAnimRev': 'topAnimRev .5s forwards',
        'midAnim': 'midAnim .5s forwards',
        'midAnimRev': 'midAnimRev .5s forwards',
        'botAnim': 'botAnim .5s forwards',
        'botAnimRev': 'botAnimRev .5s forwards',
        'gradient-x': 'gradientX 5s ease infinite'
      },
      transitionProperty: {
        'hover' : 'all .5s ease'
      },
      keyframes: {
        gradientX: {
          '0%, 100%': {
            'background-position': '0% 50%',
          },
          '50%': {
            'background-position': '100% 50%',
          },
        },
        change: {
          '0%, 100%': {
            'border-radius': '42% 56% 72% 28% / 42% 42% 56% 48%'
          },
          '33%': {
            'border-radius': '72% 28% 48% 48% / 28% 28% 72% 72%'
          },
          '66%': {
            'border-radius': '100% 56% 56% 100% / 100% 100% 56% 56%'
          },
        },
        popup: {
          'from': {
            'transform': 'scale(.75)'
          },
          'to': {
            'transform': 'scale(1)'
          }
        },
        topAnim: {
          '0%': {
            'transform': 'translateY(0)'
          },
          '50%': {
            'transform': 'translateY(11px)'
          },
          '100%': {
            'transform': 'translateY(11px) rotate(45deg)'
          }
        },
        topAnimRev: {
          '0%': {
            'transform': 'translateY(11px) rotate(45deg)'
          },
          '50%': {
            'transform': 'translateY(11px)'
          },
          '100%': {
            'transform': 'translateY(0)'
          }
        },
        midAnim: {
          '0%': {
            'transform': 'scale(1)',
            'opacity': '1'
          },
          '100%': {
            'transform': 'scale(0)',
            'opacity': '0'
          }
        },
        midAnimRev: {
          '0%': {
            'transform': 'scale(0)',
            'opacity': '0'
          },
          '100%': {
            'transform': 'scale(1)',
            'opacity': '1'
          }
        },
        botAnim: {
          '0%': {
            'transform': 'translateY(0)'
          },
          '50%': {
            'transform': 'translateY(-11px)'
          },
          '100%': {
            'transform': 'translateY(-11px) rotate(135deg)'
          }
        },
        botAnimRev: {
          '0%': {
            'transform': 'translateY(-11px) rotate(135deg)'
          },
          '50%': {
            'transform': 'translateY(-11px)'
          },
          '100%': {
            'transform': 'translateY(0)'
          }
        }
      },
      width: {
        'width':'var(--width)'
      },
      height: {
        'nonavbarheight':'var(--nonavbarheight)'
      },
      colors:{
        'applybgcolor' : 'var(--applybgcolor)',
        'footerbgcolor' : 'var(--footerbgcolor)',
        'copyrightbgcolor' : 'var(--copyrightbgcolor)',
      }
    },
  },
  plugins: [],
}