import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const button = style({
  width: '100%',
  height: '3rem',
  border: 'none',
  borderRadius: vars.radius.md,
  backgroundColor: vars.color.primary,
  color: vars.color.white,
  fontSize: vars.font.size.sm,
  fontWeight: vars.font.weight.bold,
  lineHeight: vars.font.lineHeight.sm,
  cursor: 'pointer',
  transition: `background-color ${vars.transition.fast}`,

  selectors: {
    '&:disabled': {
      opacity: 0.5,
      cursor: 'not-allowed',
    },

    '&:hover:not(:disabled)': {
      backgroundColor: vars.color.primaryDark,
    },
  },
});
