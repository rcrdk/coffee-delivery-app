import { THEME } from '@styles/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },

  inner: {
    zIndex: 2,
  },

  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    backgroundColor: THEME.COLORS.white,
    height: '66%',
  },

  list: {
    zIndex: 2,
    paddingVertical: THEME.SPACE.Y * 2,
    paddingLeft: THEME.SPACE.X,
  },
})
