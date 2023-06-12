module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      xs: '375px', // celular
      sm: '640px', // celular grande
      md: '768px', // tablet
      lg: '1024px', // escritorio
      xl: '1280px',
      '1xl': '1440px',
      '2xl': '1536px',
      '4xl': '2559px',
      'rwd-base': '320px',
      'rwd-xs': '375px', // celular
      'rwd-sm': '562px', // celular grande
      'rwd-md': '744px', // tablet
      'rwd-lg': '900px', // escritorio
      'rwd-lg-m': '1200px',
      'rwd-xl': '1440px',
      'rwd-1xl': '1600px',
      'rwd-2xl': '1920px',
      'rwd-4xl': '2559px'
    },
    fontFamily: {
      heading_DS: ['Inter', 'sans-serif'],
      Heading: ['Poppins', 'sans-serif'],
      Content: ['Montserrat', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
      montserrat: ['Montserrat'],
      sans: ['Roboto', 'sans-serif'],
      heading: ['Roboto', 'sans-serif']
    },
    colors: {
      primary: {
        100: '#005491',
        200: '#0072C8',
        300: '#0386E6',
        400: '#4B9BD6',
        500: '#00A1E4',
        600: '#00B5FF',
        700: '#E5F0F9',
        800: '#7FC5FA'
      },
      secondary: {
        100: '#00253D',
        200: '#496374',
        300: '#798C98',
        400: '#D6DCE7',
        500: '#C0CFD8',
        600: '#F5F5F5'
      },
      'alert-error': {
        100: '#CE1126',
        200: '#EF172F',
        300: '#F96459',
        400: '#FD8576',
        500: '#FFA495',
        600: '#FFD4CE',
        700: '#C33336'
      },
      'alert-attention': {
        100: '#B57C00',
        200: '#D09306',
        300: '#ECAB0F',
        400: '#F7D547',
        500: '#FFFF72',
        600: '#FEFED0'
      },
      gray: {
        100: '#333333',
        200: '#666666',
        300: '#F1F1F1',
        400: '#F5F5F5',
        500: '#EBEBEB'
      },
      red: {
        100: '#CE1126',
        200: '#EF172F'
      },
      green: {
        100: '#16C776',
        200: '#0AE280'
      },
      white: '#ffffff',
      black: '#000000',
      primario: {
        20: '#0386e6',
        30: '#0093ff',
        40: '#1c9fff',
        50: '#38abff',
        60: '#55b7ff',
        70: '#71c3ff',
        80: '#7fc5fa',
        90: '#aadbff',
        100: '#0072c8',
        200: '#0068b4',
        300: '#005da2',
        400: '#005390',
        500: '#00497E',
        600: '#003e6c',
        700: '#00345a',
        800: '#002948',
        900: '#00253d'
      },
      secundario: {
        20: '#00b5ff',
        30: '#1dbdff',
        40: '#3ac5ff',
        50: '#56cdff',
        60: '#72d6ff',
        70: '#8EDEFF',
        80: '#aae6ff',
        90: '#c7eeff',
        100: '#00a1e4',
        200: '#0091cd',
        300: '#0081B6',
        400: '#0071a0',
        500: '#006189',
        600: '#005172',
        700: '#00405b',
        800: '#003044',
        900: '#00202e'
      },
      azul_gris: {
        20: '#557488',
        30: '#62859b',
        40: '#7594a8',
        50: '#89a3b5',
        60: '#9cb3c1',
        70: '#b0c2cd',
        80: '#c4d1da',
        90: '#d8e0e6',
        100: '#496374',
        200: '#425968',
        300: '#3a4f5d',
        400: '#334551',
        500: '#2c3b46',
        600: '#25323a',
        700: '#1d282e',
        800: '#161e23',
        900: '#0f1417'
      },
      gris: {
        20: '#374151',
        30: '#4b5563',
        40: '#6b7280',
        50: '#9ca3af',
        60: '#d1d5db',
        70: '#e5e7eb',
        80: '#f3f4f6',
        90: '#f9f9fb',
        100: '#1f2937'
      },
      verde: {
        20: '#0cba6b',
        30: '#0edb7d',
        40: '#1cf08f',
        50: '#3cf29f',
        60: '#5df4af',
        70: '#7df7bf',
        80: '#9ef9cf',
        90: '#befbdf',
        100: '#0a9a58',
        200: '#098b4f',
        300: '#087b46',
        400: '#076c3e',
        500: '#065c35',
        600: '#054d2c',
        700: '#043e23',
        800: '#032e1a',
        900: '#021f12'
      },
      rojo: {
        20: '#e9132b',
        30: '#ed2b41',
        40: '#f04558',
        50: '#f26070',
        60: '#f47a88',
        70: '#f695a0',
        80: '#f8afb8',
        90: '#fbcacf',
        100: '#ce1126'
      },
      cafe: {
        20: '#92400e',
        30: '#b45309',
        40: '#d97706',
        50: '#f59e0b',
        60: '#fbbf24',
        70: '#fcd34d',
        80: '#fde68a',
        90: '#fef3c7',
        100: '#78350f'
      }
    }
  }
}
