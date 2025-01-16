import { THEME } from '@styles/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    height: 46,
    minHeight: 46,
  },

  containerPurple: {
    backgroundColor: THEME.COLORS.purpleDark,
  },

  containerYellow: {
    backgroundColor: THEME.COLORS.yellowDark,
  },

  disabled: {
    opacity: 0.33,
    backgroundColor: THEME.COLORS.gray400,
  },

  text: {
    fontSize: THEME.SIZE.button,
    color: THEME.COLORS.white,
    textTransform: 'uppercase',
  },
})
