import { THEME } from '@styles/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  // container: {
  //   position: 'absolute',
  //   top: 0,
  //   left: 0,
  //   width: '100%',
  //   height: '100%',
  //   zIndex: 99,
  // },

  container: {
    flex: 1,
  },

  contentContainer: {
    flexGrow: 1,
    alignItems: 'center',
    paddingTop: THEME.SPACE.Y,
    paddingHorizontal: THEME.SPACE.X,
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
