import { THEME } from '@styles/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    paddingTop: THEME.SPACE.Y,
    paddingBottom: THEME.SPACE.Y * 2,
    paddingHorizontal: THEME.SPACE.X,
    backgroundColor: THEME.COLORS.white,
    gap: THEME.SPACE.GAP,
    zIndex: 1,
  },

  sticky: {
    paddingBottom: THEME.SPACE.Y,
    borderBottomWidth: 1,
    borderBottomColor: THEME.COLORS.gray700,
  },

  tags: {
    flexDirection: 'row',
    gap: 8,
  },
})
