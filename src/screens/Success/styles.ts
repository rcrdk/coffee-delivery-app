import { THEME } from '@styles/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: THEME.SPACE.X * 2,
    paddingVertical: THEME.SPACE.X,
  },

  inner: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    marginTop: THEME.SPACE.X,
  },

  button: {
    marginTop: 60,
    flexGrow: 0,
    width: '100%',
  },
})
