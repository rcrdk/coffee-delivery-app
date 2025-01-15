import { THEME } from '@styles/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    height: 46,
  },

  containerPurple: {
    backgroundColor: THEME.COLORS.purpleDark,
  },

  containerYellow: {
    backgroundColor: THEME.COLORS.yellowDark,
  },

  text: {
    fontSize: THEME.SIZE.button,
    color: THEME.COLORS.white,
    textTransform: 'uppercase',
  },
})
