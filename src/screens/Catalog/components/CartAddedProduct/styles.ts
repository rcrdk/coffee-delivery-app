import { THEME } from '@styles/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
    zIndex: 10,
    backgroundColor: THEME.COLORS.white,

    borderTopWidth: 1,
    borderTopColor: THEME.COLORS.gray700,
  },

  inner: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    gap: THEME.SPACE.GAP,
    paddingHorizontal: THEME.SPACE.X,
    paddingVertical: THEME.SPACE.Y,
  },

  image: {
    width: 50,
    height: 50,
  },

  text: {
    flex: 1,
  },

  button: {
    alignItems: 'center',
    flexShrink: 0,
    flexDirection: 'row',
    gap: 6,
  },

  buttonText: {
    textTransform: 'uppercase',
  },
})
