import { THEME } from '@styles/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 20,
    paddingHorizontal: THEME.SPACE.X,
    paddingVertical: THEME.SPACE.Y,
    borderTopColor: THEME.COLORS.gray700,
    borderTopWidth: 1,
  },

  image: {
    width: 64,
    height: 64,
    objectFit: 'contain',
  },

  info: { flex: 1 },
})
