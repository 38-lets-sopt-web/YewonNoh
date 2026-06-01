import { style } from '@vanilla-extract/css';

import { vars } from '@/shared/styles/vars.css';

export const container = style({
  marginBottom: vars.spacing.md,
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.medium,
  cursor: 'pointer',
});
