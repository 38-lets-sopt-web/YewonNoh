import { style } from '@vanilla-extract/css';

import { vars } from '@/shared/styles/vars.css';

export const container = style({
  overflow: 'hidden',
  backgroundColor: vars.color.white,
  borderRadius: vars.radius.lg,
});

export const backdrop = style({
  width: '100%',
  height: '32rem',
  objectFit: 'cover',
});

export const content = style({
  display: 'flex',
  gap: vars.spacing.lg,
  padding: vars.spacing.xl,
});

export const poster = style({
  width: '16rem',
  borderRadius: vars.radius.md,
  objectFit: 'cover',
});

export const info = style({
  flex: 1,
});

export const date = style({
  color: vars.color.gray400,
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.medium,
});

export const title = style({
  marginTop: vars.spacing.xs,
  fontSize: vars.fontSize.xxl,
  fontWeight: vars.fontWeight.bold,
});

export const genres = style({
  display: 'flex',
  gap: vars.spacing.xs,
  marginTop: vars.spacing.sm,
});

export const genre = style({
  padding: `${vars.spacing.xs} ${vars.spacing.sm}`,
  borderRadius: `${vars.radius.lg}`,
  backgroundColor: vars.color.background,
  fontSize: vars.fontSize.xs,
  color: vars.color.gray500,
});

export const grid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: vars.spacing.sm,
  marginTop: vars.spacing.lg,
});

export const card = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.xs,
  padding: vars.spacing.md,
  border: `1px solid ${vars.color.gray100}`,
  borderRadius: vars.radius.md,
});

export const label = style({
  color: vars.color.gray400,
  fontSize: vars.fontSize.xs,
});

export const value = style({
  margin: 0,
  color: vars.color.primary,
  fontSize: vars.fontSize.md,
  fontWeight: vars.fontWeight.bold,
});
