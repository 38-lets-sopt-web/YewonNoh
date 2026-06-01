import { style } from '@vanilla-extract/css';

import { vars } from '@/shared/styles/vars.css';

export const range = style({
  marginBottom: vars.spacing.md,
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.semibold,
});

export const input = style({
  width: '100%',
  padding: vars.spacing.md,
  border: `1px solid ${vars.color.gray300}`,
  borderRadius: vars.radius.lg,
});

export const buttonGroup = style({
  display: 'flex',
  gap: vars.spacing.sm,
  marginTop: vars.spacing.md,
});

export const primaryButton = style({
  padding: `${vars.spacing.sm} ${vars.spacing.lg}`,
  border: 'none',
  borderRadius: vars.radius.lg,
  backgroundColor: vars.color.black,
  color: vars.color.white,
});

export const secondaryButton = style({
  padding: `${vars.spacing.sm} ${vars.spacing.lg}`,
  border: `1px solid ${vars.color.gray100}`,
  borderRadius: vars.radius.lg,
  backgroundColor: vars.color.white,
});

export const message = style({
  marginTop: vars.spacing.md,
});
