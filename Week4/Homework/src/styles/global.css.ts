import { globalStyle } from '@vanilla-extract/css';
import { vars } from './theme.css';

globalStyle('*', {
  boxSizing: 'border-box',
});

globalStyle('html, body, #root', {
  width: '100%',
  minHeight: '100%',
});

globalStyle('body', {
  margin: 0,
  fontFamily: vars.font.body,
  backgroundColor: vars.color.background,
});

globalStyle('button', {
  padding: 0,
});
