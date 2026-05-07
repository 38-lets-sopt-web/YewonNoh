import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const header = style({
  width: '100%',
  backgroundColor: vars.color.navy,
  display: 'flex',
  alignItems: 'center',
});

export const inner = style({
  width: '100%',
  margin: '0 auto',
  padding: '1rem 6em',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const left = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
});

export const title = style({
  color: vars.color.white,
  fontSize: vars.font.size.xl,
  fontWeight: vars.font.weight.bold,
  margin: 0,
});

export const description = style({
  color: vars.color.white,
  fontSize: vars.font.size.md,
  fontWeight: vars.font.weight.medium,
  lineHeight: vars.font.lineHeight.md,
  margin: 0,
});

export const nav = style({
  display: 'flex',
  alignItems: 'center',
  gap: '2.5rem',
});

export const menu = style({
  color: vars.color.border,
  fontSize: vars.font.size.md,
  fontWeight: vars.font.weight.semibold,
  lineHeight: vars.font.lineHeight.sm,
  cursor: 'pointer',
  transition: `opacity ${vars.transition.fast}`,

  selectors: {
    '&:hover': {
      color: vars.color.white,
    },
  },
});

export const activeMenu = style({
  color: vars.color.white,
  fontSize: vars.font.size.md,
  fontWeight: vars.font.weight.bold,
  lineHeight: vars.font.lineHeight.sm,
  cursor: 'pointer',
});
