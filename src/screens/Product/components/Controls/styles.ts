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
})
