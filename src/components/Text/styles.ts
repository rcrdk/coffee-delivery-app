import { THEME } from '@styles/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {},

  regular: {
    fontFamily: THEME.FONTS.bodyRegular,
    fontWeight: 'normal',
  },

  bold: {
    fontFamily: THEME.FONTS.bodyBold,
    fontWeight: 'bold',
  },

  lg: {
    fontSize: THEME.SIZE.BODY.lg,
    lineHeight: THEME.LINE_HEIGHT.BODY.lg,
  },

  md: {
    fontSize: THEME.SIZE.BODY.md,
    lineHeight: THEME.LINE_HEIGHT.BODY.md,
  },

  sm: {
    fontSize: THEME.SIZE.BODY.sm,
    lineHeight: THEME.LINE_HEIGHT.BODY.sm,
  },

  xs: {
    fontSize: THEME.SIZE.BODY.xs,
    lineHeight: THEME.LINE_HEIGHT.BODY.xs,
  },
})
