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
  fontSize: vars.font.size.xs,
  fontWeight: vars.font.weight.semibold,
  lineHeight: vars.font.lineHeight.sm,
});

export const inputContainer = style({
  position: 'relative',
  width: '100%',
});

export const input = style({
  width: '100%',
  height: '2rem',
  padding: '0 0.5rem',
  border: `1.8px solid ${vars.color.border}`,
  borderRadius: vars.radius.sm,
  backgroundColor: vars.color.white,
  color: vars.color.text,
  fontSize: vars.font.size.xs,
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
  right: '0.875rem',
  transform: 'translateY(-50%)',
  display: 'flex',
  alignItems: 'center',
  color: vars.color.placeholder,
});
