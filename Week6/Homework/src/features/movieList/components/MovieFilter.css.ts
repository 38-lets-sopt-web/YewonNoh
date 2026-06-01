import { style } from '@vanilla-extract/css';

import { vars } from '@/shared/styles/vars.css';

export const container = style({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  marginBottom: vars.spacing.lg,
  padding: vars.spacing.sm,
  borderRadius: vars.radius.lg,
  backgroundColor: vars.color.white,
  boxShadow: vars.shadow.sm,
});

export const select = style({
  width: '16rem',
  padding: '1rem 1.2rem',
  border: `1px solid ${vars.color.gray300}`,
  borderRadius: vars.radius.md,
  backgroundColor: vars.color.white,
  color: vars.color.gray500,
  fontSize: vars.fontSize.sm,
  cursor: 'pointer',
});
