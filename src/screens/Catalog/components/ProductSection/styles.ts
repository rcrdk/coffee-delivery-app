import { THEME } from '@styles/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: THEME.SPACE.X,
  },

  inner: {
    paddingLeft: 8,
    paddingRight: 24,
    paddingTop: 16,
    paddingBottom: 8,
    gap: 12,
    flexDirection: 'row',
    borderTopLeftRadius: 6,
    borderTopRightRadius: 36,
    borderBottomRightRadius: 6,
    borderBottomLeftRadius: 36,
    backgroundColor: THEME.COLORS.gray800,
    minHeight: 120,
    borderWidth: 1,
    borderColor: THEME.COLORS.gray700,
  },

  image: {
    marginTop: -32,
    width: 96,
    height: 96,
    objectFit: 'contain',
  },

  right: {
    flex: 1,
    gap: 4,
  },

  price: {
    paddingTop: 4,
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 4,
  },
})
