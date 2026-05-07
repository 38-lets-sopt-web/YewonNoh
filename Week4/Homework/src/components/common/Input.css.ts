import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const wrapper = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.sm,
});

export const label = style({
  color: vars.color.subText,
  fontSize: vars.font.size.sm,
  fontWeight: vars.font.weight.semibold,
  lineHeight: vars.font.lineHeight.sm,
});

export const inputContainer = style({
  position: 'relative',
  width: '100%',
});

export const input = style({
  width: '100%',
  height: '3rem',
  padding: '0 1rem',
  border: `0.1125rem solid ${vars.color.border}`,
  borderRadius: vars.radius.md,
  backgroundColor: vars.color.white,
  color: vars.color.text,
  fontSize: vars.font.size.sm,
  lineHeight: vars.font.lineHeight.sm,
  outline: 'none',
  transition: `border-color ${vars.transition.fast}`,

  selectors: {
    '&::placeholder': {
      color: vars.color.placeholder,
    },

    '&:focus': {
      borderColor: vars.color.primary,
    },
  },
});

export const rightElement = style({
  position: 'absolute',
  top: '50%',
  right: '1rem',
  transform: 'translateY(-50%)',
  display: 'flex',
  alignItems: 'center',
  color: vars.color.placeholder,
});
