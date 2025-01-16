import { THEME } from '@styles/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.COLORS.white,
    borderTopWidth: 1,
    borderTopColor: THEME.COLORS.gray700,
  },

  inner: {
    paddingHorizontal: THEME.SPACE.X,
    paddingTop: THEME.SPACE.X,
    paddingBottom: THEME.SPACE.X / 2,
    flexGrow: 1,
    gap: 20,
  },

  total: {
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})
