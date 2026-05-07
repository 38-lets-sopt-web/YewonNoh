import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const wrapper = style({
  width: '100%',
  maxWidth: '22.5rem',
  margin: '13.5rem auto 0',
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
  gap: '0.875rem',
  marginBottom: vars.spacing.xl,
});

export const signup = style({
  marginTop: vars.spacing.sm,
  color: vars.color.primaryDark,
  fontSize: vars.font.size.xs,
  fontWeight: vars.font.weight.semibold,
  textDecoration: 'none',
  cursor: 'pointer',
});
