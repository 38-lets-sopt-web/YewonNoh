import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const wrapper = style({
  width: '100%',
  maxWidth: '30rem',
  margin: '3rem auto 0',
});

export const card = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const title = style({
  marginBottom: vars.spacing.lg,
  color: vars.color.text,
  fontSize: vars.font.size.lg,
  fontWeight: vars.font.weight.bold,
  lineHeight: vars.font.lineHeight.md,
  textAlign: 'center',
});

export const inputGroup = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: '1.25rem',
  marginBottom: vars.spacing.xl,
});

export const loginWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.25rem',
  marginTop: vars.spacing.sm,
});

export const loginText = style({
  color: vars.color.placeholder,
  fontSize: vars.font.size.xs,
  fontWeight: vars.font.weight.medium,
  lineHeight: vars.font.lineHeight.sm,
});

export const loginLink = style({
  color: vars.color.primaryDark,
  fontSize: vars.font.size.xs,
  fontWeight: vars.font.weight.semibold,
  lineHeight: vars.font.lineHeight.sm,
  textDecoration: 'none',
  cursor: 'pointer',
});
