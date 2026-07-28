import { style } from '@vanilla-extract/css';

import { vars } from '@/shared/styles/vars.css';

export const container = style({
  padding: vars.spacing.xl,
  backgroundColor: vars.color.white,
  borderRadius: vars.radius.lg,
  marginBottom: vars.spacing.xl,
});

export const title = style({
  margin: 0,
  marginBottom: vars.spacing.md,
  fontSize: vars.fontSize.lg,
  fontWeight: vars.fontWeight.bold,
  color: vars.color.primary,
});

export const content = style({
  margin: 0,
  color: vars.color.gray500,
  fontSize: vars.fontSize.md,
  lineHeight: 1.7,
  wordBreak: 'keep-all',
});

export const table = style({
  display: 'flex',
  flexDirection: 'column',
});

export const row = style({
  display: 'grid',
  gridTemplateColumns: '12rem 1fr',
  alignItems: 'center',
  padding: `${vars.spacing.md} 0`,
  borderBottom: `1px solid ${vars.color.gray100}`,

  selectors: {
    '&:last-child': {
      borderBottom: 'none',
    },
  },
});

export const label = style({
  color: vars.color.gray500,
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.medium,
});

export const value = style({
  margin: 0,
  color: vars.color.primary,
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.regular,
  lineHeight: 1.5,
});
