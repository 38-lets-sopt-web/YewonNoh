import { globalStyle } from '@vanilla-extract/css';
import { vars } from './vars.css';

globalStyle('html', {
  fontSize: '62.5%',
});

globalStyle('*', {
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
});

globalStyle('body', {
  fontFamily:
    'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
  backgroundColor: vars.color.background,
});

globalStyle('button', {
  border: 'none',
  background: 'none',
  cursor: 'pointer',
});
