import { THEME } from '@styles/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    zIndex: 4,
  },

  inner: {
    zIndex: 2,
  },

  list: {
    zIndex: 2,
    paddingVertical: THEME.SPACE.Y * 2,
    paddingLeft: THEME.SPACE.X,
  },
})
