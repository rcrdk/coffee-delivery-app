import { THEME } from '@styles/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    fontFamily: THEME.FONTS.heading,
    fontWeight: 'bold',
  },

  xl: {
    fontSize: THEME.SIZE.HEADING.xl,
    lineHeight: THEME.LINE_HEIGHT.HEADING.xl,
  },

  lg: {
    fontSize: THEME.SIZE.HEADING.lg,
    lineHeight: THEME.LINE_HEIGHT.HEADING.lg,
  },

  md: {
    fontSize: THEME.SIZE.HEADING.md,
    lineHeight: THEME.LINE_HEIGHT.HEADING.md,
  },

  sm: {
    fontSize: THEME.SIZE.HEADING.sm,
    lineHeight: THEME.LINE_HEIGHT.HEADING.sm,
  },

  xs: {
    fontSize: THEME.SIZE.HEADING.xs,
    lineHeight: THEME.LINE_HEIGHT.HEADING.xs,
  },
})
