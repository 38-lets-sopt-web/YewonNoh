import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const wrapper = style({
  width: '100%',
  maxWidth: '28rem',
  margin: '12rem auto 0',
});

export const card = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const title = style({
  marginBottom: vars.spacing.xl,
  color: vars.color.navy,
  fontSize: vars.font.size.xxl,
  fontWeight: vars.font.weight.bold,
  lineHeight: vars.font.lineHeight.md,
  textAlign: 'center',
});

export const inputGroup = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: vars.spacing.md,
  marginBottom: vars.spacing.xl,
});

export const signup = style({
  marginTop: vars.spacing.md,
  color: vars.color.primaryDark,
  fontSize: vars.font.size.sm,
  fontWeight: vars.font.weight.semibold,
  textDecoration: 'none',
  cursor: 'pointer',
});
