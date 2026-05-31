import { globalStyle } from '@vanilla-extract/css';

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
});

globalStyle('button', {
  border: 'none',
  background: 'none',
  cursor: 'pointer',
});
