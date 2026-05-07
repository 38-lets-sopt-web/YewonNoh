import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const wrapper = style({
  width: '100%',
  maxWidth: '36rem',
  margin: '6rem auto 0',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const title = style({
  margin: 0,
  marginBottom: vars.spacing.xl,
  color: vars.color.text,
  fontSize: vars.font.size.xxl,
  fontWeight: vars.font.weight.bold,
  lineHeight: vars.font.lineHeight.sm,
});

export const profileCard = style({
  width: '100%',
  marginBottom: vars.spacing.xl,
  padding: vars.spacing.lg,
  borderRadius: vars.radius.lg,
  backgroundColor: vars.color.surface,
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.sm,
});

export const profileRow = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const label = style({
  color: vars.color.text,
  fontSize: vars.font.size.lg,
  fontWeight: vars.font.weight.bold,
  lineHeight: vars.font.lineHeight.sm,
});

export const value = style({
  color: vars.color.placeholder,
  fontSize: vars.font.size.lg,
  fontWeight: vars.font.weight.medium,
  lineHeight: vars.font.lineHeight.sm,
});

export const inputGroup = style({
  width: '100%',
  marginBottom: vars.spacing.xl,
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.lg,
});
