import { THEME } from '@styles/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: THEME.COLORS.gray100,
  },

  container: {
    position: 'relative',
    backgroundColor: THEME.COLORS.gray100,
  },

  enterCurtain: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: THEME.COLORS.white,
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

  topbar: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: THEME.SPACE.X,
  },

  location: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
  },
})
