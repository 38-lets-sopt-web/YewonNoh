import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const wrapper = style({
  width: '100%',
  maxWidth: '38rem',
  margin: '12rem auto 0',
});

export const card = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const title = style({
  marginBottom: vars.spacing.xl,
  color: vars.color.navy,
  fontSize: vars.font.size.xxl,
  fontWeight: vars.font.weight.bold,
  lineHeight: vars.font.lineHeight.md,
  textAlign: 'center',
});

export const inputGroup = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: '1.5rem',
  marginBottom: vars.spacing.xl,
});

export const loginWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing.xs,
  marginTop: vars.spacing.md,
});

export const loginText = style({
  color: vars.color.placeholder,
  fontSize: vars.font.size.sm,
  fontWeight: vars.font.weight.medium,
  lineHeight: vars.font.lineHeight.sm,
});

export const loginLink = style({
  color: vars.color.primaryDark,
  fontSize: vars.font.size.sm,
  fontWeight: vars.font.weight.semibold,
  lineHeight: vars.font.lineHeight.sm,
  textDecoration: 'none',
  cursor: 'pointer',
});

export const selectWrapper = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.sm,
});

export const selectLabel = style({
  color: vars.color.subText,
  fontSize: vars.font.size.sm,
  fontWeight: vars.font.weight.semibold,
  lineHeight: vars.font.lineHeight.sm,
});

export const select = style({
  width: '100%',
  height: '3rem',
  padding: '0 1rem',
  border: `1.8px solid ${vars.color.border}`,
  borderRadius: vars.radius.md,
  backgroundColor: vars.color.white,
  color: vars.color.text,
  fontSize: vars.font.size.md,
  outline: 'none',

  selectors: {
    '&:focus': {
      borderColor: vars.color.primary,
    },
  },
});

export const errorText = style({
  width: '100%',
  alignSelf: 'flex-start',
  marginBottom: vars.spacing.md,
  color: vars.color.danger,
  fontSize: vars.font.size.sm,
  fontWeight: vars.font.weight.medium,
});
