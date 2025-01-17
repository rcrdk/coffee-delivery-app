import { THEME } from '@styles/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 20,
    paddingHorizontal: THEME.SPACE.X,
    paddingVertical: THEME.SPACE.Y,
    backgroundColor: THEME.COLORS.white,
  },

  image: {
    width: 64,
    height: 64,
    objectFit: 'contain',
  },

  info: { flex: 1 },

  controls: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 12,
  },

  quantity: {
    borderWidth: 1,
    borderColor: THEME.COLORS.gray600,
  },

  removeButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 38,
    height: 38,
    backgroundColor: THEME.COLORS.gray700,
    borderRadius: 8,
  },

  price: {
    gap: 3,
    alignItems: 'flex-end',
  },
})
