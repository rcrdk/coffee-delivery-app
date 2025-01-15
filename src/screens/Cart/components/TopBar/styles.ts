import { THEME } from '@styles/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: THEME.SPACE.X,
    height: 76,
    borderBottomColor: THEME.COLORS.gray700,
    borderBottomWidth: 1,
  },

  offset: {
    width: 36,
  },
})
