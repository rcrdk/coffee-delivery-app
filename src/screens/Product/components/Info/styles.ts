import { THEME } from '@styles/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: THEME.SPACE.Y,
    paddingHorizontal: THEME.SPACE.X,
    alignItems: 'center',
  },

  data: {
    flex: 1,
    width: '100%',
    gap: 20,
  },

  tag: {
    fontSize: THEME.SIZE.tag,
    lineHeight: THEME.SIZE.tag,
    fontFamily: THEME.FONTS.bodyBold,
    textTransform: 'uppercase',
    backgroundColor: THEME.COLORS.gray200,
    color: THEME.COLORS.white,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 32,
    marginBottom: 8,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 6,
  },

  title: {
    flex: 1,
    alignItems: 'flex-start',
    gap: 6,
  },

  price: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'baseline',
    gap: 4,
  },

  image: {
    width: 260,
    height: 260,
    marginBottom: THEME.SPACE.Y * -2.25,
    zIndex: 1,
  },
})
