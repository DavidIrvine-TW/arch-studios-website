/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'vdblue' : 'hsl(225, 13%, 12%)',
        'overlay' : 'hsla(225, 13%, 12%, 0.4)',
        'dgray' : 'hsl(226, 6%, 40%)',
        'mgray' : 'hsl(223, 7%, 53%)',
        'lgray' : 'hsl(225, 17%, 82%)',
        'vlgray' : 'hsl(230, 21%, 95%)',
        'vlgrayoverlay' : 'hsla(230, 21%, 95%, 0.4)',
        'red' : 'hsl(0, 68%, 61%)'
       },
       fontFamily : {
        sparta : ['League Spartan', 'sans-serif']
       },
       screens : {
        mobile : '378px',
        tablet : '768px',
        desktop : '1440px'
       },
       fontSize : {
          'xl': ['15.625rem', {
            lineHeight: '12.5rem',
            letterSpacing: '-5px',
            fontWeight: '700',
          }],
          'l': ['6rem', {
            lineHeight: '5rem',
            letterSpacing: '-2px',
            fontWeight: '700',
          }],
          'm': ['4.5rem', {
            lineHeight: '4rem',
            letterSpacing: '-2px',
            fontWeight: '700',
          }],
          's': ['2rem', {
            lineHeight: '2.5rem',
            letterSpacing: '0px',
            fontWeight: '700',
          }],
          'body': ['1.125rem', {
            lineHeight: '1.5rem',
            letterSpacing: '0px',
            fontWeight: '500',
          }],
          'hero' : ['3rem', {
            lineHeight : '48px',
            letterSpacing: '3px',
            fontWeight: '700'
          }],
          'h2-mb' : ['3rem', {
            lineHeight : '52px',
            letterSpacing: '-1.71px',
            fontWeight: '700'
          }],
          'bigideas' : ['3rem', {
            lineHeight : '52px',
            letterSpacing: '-1.71px',
            fontWeight: '700'
          }],
          
       },
       borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
      }
    },
  },
  plugins: [],
}

