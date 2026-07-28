import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const wrapper = style({
  width: '100%',
  maxWidth: '75rem',
  margin: '6rem auto',
});

export const searchSection = style({
  width: '100%',
  maxWidth: '36rem',
  margin: '0 auto 8rem',
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

export const searchGroup = style({
  width: '100%',
  marginBottom: vars.spacing.xl,
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.lg,
});

export const resultWrapper = style({
  width: '100%',
});

export const resultTitle = style({
  margin: 0,
  marginBottom: vars.spacing.md,
  color: vars.color.text,
  fontSize: vars.font.size.lg,
  fontWeight: vars.font.weight.bold,
});

export const memberSection = style({
  width: '100%',
});

export const memberTitle = style({
  margin: 0,
  marginBottom: vars.spacing.xl,
  color: vars.color.text,
  fontSize: vars.font.size.xl,
  fontWeight: vars.font.weight.bold,
});

export const memberGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  gap: vars.spacing.lg,
});
