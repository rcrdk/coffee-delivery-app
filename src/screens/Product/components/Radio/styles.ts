import { THEME } from '@styles/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  radio: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    minHeight: 40,
    backgroundColor: THEME.COLORS.gray700,
    borderColor: THEME.COLORS.gray700,
    borderWidth: 1,
  },

  radioSelected: {
    backgroundColor: THEME.COLORS.white,
    borderColor: THEME.COLORS.purple,
  },
})
