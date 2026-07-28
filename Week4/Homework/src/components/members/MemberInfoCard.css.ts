import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const resultCard = style({
  width: '100%',
  minHeight: '16rem',
  padding: vars.spacing.xl,
  borderRadius: vars.radius.lg,
  backgroundColor: vars.color.white,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: vars.spacing.md,
});

export const emptyResult = style({
  color: vars.color.placeholder,
  fontSize: vars.font.size.lg,
  fontWeight: vars.font.weight.medium,
  textAlign: 'center',
});

export const resultRow = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const resultLabel = style({
  color: vars.color.text,
  fontSize: vars.font.size.md,
  fontWeight: vars.font.weight.bold,
});

export const resultValue = style({
  color: vars.color.placeholder,
  fontSize: vars.font.size.md,
  fontWeight: vars.font.weight.medium,
});
