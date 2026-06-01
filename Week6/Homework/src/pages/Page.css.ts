import { style } from '@vanilla-extract/css';

import { vars } from '@/shared/styles/vars.css';

export const container = style({
  padding: '4rem 30rem',
});

export const title = style({
  marginBottom: vars.spacing.lg,
  fontSize: vars.fontSize.xxl,
  fontWeight: vars.fontWeight.bold,
});

export const infoSection = style({
  display: 'grid',
  gridTemplateColumns: '3fr 2fr',
  gap: vars.spacing.lg,
});
