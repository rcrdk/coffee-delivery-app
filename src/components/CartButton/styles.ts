import { THEME } from '@styles/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  button: {
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },

  counter: {
    position: 'absolute',
    top: -4,
    right: -4,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: 16,
    width: 20,
    height: 20,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: THEME.COLORS.gray100,
    backgroundColor: THEME.COLORS.purple,
  },
})
