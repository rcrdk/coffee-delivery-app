import { THEME } from '@styles/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  list: {
    flexGrow: 1,
  },

  separator: {
    backgroundColor: THEME.COLORS.gray700,
    height: 1,
  },
})
