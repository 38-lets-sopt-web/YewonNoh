import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(20rem, 1fr))',
  gap: '2rem',
});
