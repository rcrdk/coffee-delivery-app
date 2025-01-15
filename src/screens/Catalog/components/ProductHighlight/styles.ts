import { THEME } from '@styles/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    paddingRight: THEME.SPACE.X,
  },

  inner: {
    flex: 1,
    width: 210,
    paddingTop: 16,
    paddingBottom: 20,
    paddingHorizontal: 16,
    alignItems: 'center',
    gap: 12,
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
    marginTop: -48,
    width: 120,
    height: 120,
    objectFit: 'contain',
  },

  info: {
    flex: 1,
    gap: 4,
    alignItems: 'center',
  },

  price: {
    paddingTop: 4,
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 4,
    justifyContent: 'center',
  },

  tag: {
    fontSize: THEME.SIZE.tag,
    lineHeight: THEME.SIZE.tag,
    fontFamily: THEME.FONTS.bodyBold,
    textTransform: 'uppercase',
    backgroundColor: THEME.COLORS.purpleLight,
    color: THEME.COLORS.purpleDark,
    padding: 8,
    borderRadius: 32,
    marginBottom: 8,
  },
})
