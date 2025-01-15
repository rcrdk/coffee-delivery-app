import { THEME } from '@styles/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  spaceSmall: {
    height: 20,
  },

  spaceMedium: {
    height: THEME.SPACE.Y * 2,
  },

  spaceLarge: {
    height: THEME.SPACE.Y * 3,
  },
})
