import { THEME } from '@styles/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  contentContainer: {
    flexGrow: 1,
    width: '100%',
  },

  empty: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  searchTitle: {
    paddingVertical: THEME.SPACE.X,
    paddingHorizontal: THEME.SPACE.X,
  },

  separator: {
    height: 24,
  },

  searchMessage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: THEME.SPACE.X,
  },

  searchButton: {
    width: '100%',
    flexGrow: 0,
    marginTop: THEME.SPACE.X,
  },

  backdrop: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    backgroundColor: THEME.COLORS.gray100,
  },
})
