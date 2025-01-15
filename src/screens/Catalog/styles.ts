import { THEME } from '@styles/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  topContainer: {
    backgroundColor: THEME.COLORS.gray100,
  },

  sectionList: {
    flex: 1,
    backgroundColor: THEME.COLORS.gray100,
  },

  sectionListContainer: {
    flexGrow: 1,
    backgroundColor: THEME.COLORS.white,
  },

  sectionListTitle: {
    paddingHorizontal: THEME.SPACE.X,
  },
})
