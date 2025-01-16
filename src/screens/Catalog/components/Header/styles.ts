import { THEME } from '@styles/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingBottom: 24,
    paddingHorizontal: THEME.SPACE.X,
    gap: 8,
  },

  input: {
    height: 42,
    backgroundColor: THEME.COLORS.gray200,
    color: THEME.COLORS.gray600,
    paddingRight: 12,
    paddingLeft: 44,
    borderRadius: 4,
  },

  searchIcon: {
    position: 'absolute',
    left: 12,
    top: 12,
    height: '100%',
  },

  decoration: {
    position: 'absolute',
    top: '100%',
    marginTop: 16,
    right: 10,
    width: 83,
    height: 83,
    objectFit: 'cover',
  },
})
