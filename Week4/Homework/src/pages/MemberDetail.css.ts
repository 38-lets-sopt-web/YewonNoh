import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const wrapper = style({
  width: '100%',
  maxWidth: '42rem',
  margin: '6rem auto 0',
});

export const title = style({
  margin: 0,
  marginBottom: vars.spacing.xxl,
  color: vars.color.navy,
  fontSize: vars.font.size.xxl,
  fontWeight: vars.font.weight.bold,
  textAlign: 'center',
});

export const backButton = style({
  marginBottom: vars.spacing.xl,
  border: 'none',
  background: 'transparent',
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing.xs,
  color: vars.color.subText,
  fontSize: vars.font.size.md,
  fontWeight: vars.font.weight.medium,
  cursor: 'pointer',
});
