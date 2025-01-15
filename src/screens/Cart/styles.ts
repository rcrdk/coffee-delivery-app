import { THEME } from '@styles/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  list: {
    flexGrow: 1,
  },

  listContent: {
    borderBottomColor: THEME.COLORS.gray700,
    borderBottomWidth: 1,
  },
})
