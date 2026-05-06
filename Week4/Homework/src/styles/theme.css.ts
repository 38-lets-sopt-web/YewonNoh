import { createTheme } from '@vanilla-extract/css';

export const [themeClass, vars] = createTheme({
  color: {
    primary: '#55D6FF',
    primaryDark: '#359AB9',
    text: '#1F2937',
    subText: '#4B5563',
    placeholder: '#9CA3AF',
    border: '#B8BEC6',
    white: '#FFFFFF',
    black: '#000000',
    background: '#e3ebf3',
    danger: '#EF4444',
    success: '#22C55E',
  },

  font: {
    body: 'Pretendard',

    size: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.25rem',
      xl: '1.5rem',
    },

    weight: {
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },

    lineHeight: {
      sm: '1.2',
      md: '1.5',
      lg: '1.8',
    },
  },

  radius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
    full: '9999px',
  },

  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
  },

  shadow: {
    sm: '0 1px 2px rgba(0,0,0,0.05)',
    md: '0 2px 8px rgba(0,0,0,0.08)',
    lg: '0 4px 16px rgba(0,0,0,0.12)',
  },

  zIndex: {
    dropdown: '100',
    overlay: '200',
    modal: '300',
  },

  transition: {
    fast: '0.15s ease',
    normal: '0.25s ease',
    slow: '0.4s ease',
  },
});
