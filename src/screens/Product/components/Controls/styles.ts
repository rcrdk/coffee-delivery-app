import { THEME } from '@styles/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.COLORS.white,
  },

  inner: {
    paddingTop: THEME.SPACE.Y * 3,
    paddingBottom: THEME.SPACE.Y,
    paddingHorizontal: THEME.SPACE.X,
  },

  radioGroup: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 8,
    marginBottom: 12,
  },

  quantityContainer: {
    flexDirection: 'row',
    backgroundColor: THEME.COLORS.gray700,
    padding: 8,
    borderRadius: 8,
    marginTop: 20,
    gap: 16,
  },

  quantity: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },

  quantityCount: {
    width: 20,
    textAlign: 'center',
  },

  quantityButton: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
