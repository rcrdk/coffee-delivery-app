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
    justifyContent: 'center',
    height: 42,
    backgroundColor: THEME.COLORS.gray200,
    paddingRight: 12,
    paddingLeft: 44,
    borderRadius: 4,
    fontFamily: THEME.FONTS.bodyRegular,
    fontSize: THEME.SIZE.BODY.sm,
    color: THEME.COLORS.gray900,
  },

  searchIcon: {
    position: 'absolute',
    left: 12,
    top: 12,
    height: '100%',
    pointerEvents: 'none',
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
