import { THEME } from '@styles/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 32,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: THEME.COLORS.purple,
  },

  text: {
    fontSize: THEME.SIZE.tag,
    lineHeight: THEME.SIZE.tag,
    fontFamily: THEME.FONTS.bodyBold,
    textTransform: 'uppercase',
    color: THEME.COLORS.purpleDark,
  },

  containerActive: {
    backgroundColor: THEME.COLORS.purple,
    borderColor: THEME.COLORS.purple,
  },

  textActive: {
    color: THEME.COLORS.white,
  },
})
