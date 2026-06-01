import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  color: {
    white: '#fff',
    black: '#000',
    primary: '#1f2937',
    background: '#f5f6f8',
    gray100: '#e5e7eb',
    gray300: '#d4d4d4',
    gray400: '#a3a3a3',
    gray500: '#737373',
  },

  fontSize: {
    xs: '1.2rem',
    sm: '1.4rem',
    md: '1.6rem',
    lg: '2rem',
    xl: '2.4rem',
    xxl: '3.2rem',
  },

  fontWeight: {
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },

  radius: {
    sm: '0.4rem',
    md: '0.8rem',
    lg: '1.2rem',
  },

  spacing: {
    xs: '0.4rem',
    sm: '0.8rem',
    md: '1.6rem',
    lg: '2.4rem',
    xl: '3.2rem',
    xxl: '4rem',
  },

  shadow: {
    sm: '0 0.2rem 0.4rem rgba(0, 0, 0, 0.08)',
    md: '0 0.4rem 0.8rem rgba(0, 0, 0, 0.12)',
    lg: '0 0.8rem 1.6rem rgba(0, 0, 0, 0.16)',
  },
});
