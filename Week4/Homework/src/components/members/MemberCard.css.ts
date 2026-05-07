import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const card = style({
  height: '8rem',
  padding: vars.spacing.lg,
  borderRadius: vars.radius.lg,
  backgroundColor: vars.color.white,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: vars.spacing.md,
  cursor: 'pointer',
  transition: `transform ${vars.transition.normal}`,

  selectors: {
    '&:hover': {
      transform: 'translateY(-0.25rem)',
    },
  },
});

export const name = style({
  color: vars.color.text,
  fontSize: vars.font.size.lg,
  fontWeight: vars.font.weight.bold,
});

export const badge = style({
  padding: '0.3em 0.8rem',
  borderRadius: vars.radius.full,
  backgroundColor: vars.color.background,
  color: vars.color.subText,
  fontSize: vars.font.size.sm,
  fontWeight: vars.font.weight.medium,
});
