import { style } from '@vanilla-extract/css';

import { vars } from '@/shared/styles/vars.css';

export const card = style({
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  backgroundColor: vars.color.white,
  borderRadius: vars.radius.md,
  boxShadow: vars.shadow.sm,
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',

  selectors: {
    '&:hover': {
      transform: 'scale(1.03)',
      boxShadow: vars.shadow.lg,
    },
  },
});

export const poster = style({
  width: '100%',
  aspectRatio: '2 / 3',
  objectFit: 'cover',
});

export const content = style({
  padding: '1.2rem',
});

export const title = style({
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.bold,
});

export const date = style({
  marginTop: vars.spacing.xs,
  fontSize: vars.fontSize.xs,
  color: vars.color.gray400,
});

export const overview = style({
  overflow: 'hidden',
  marginTop: vars.spacing.sm,
  color: vars.color.gray500,
  fontSize: vars.fontSize.xs,
  lineHeight: 1.5,
  display: '-webkit-box',
  WebkitLineClamp: 3,
  WebkitBoxOrient: 'vertical',
});
