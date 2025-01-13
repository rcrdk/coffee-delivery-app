import { THEME } from '@styles/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: THEME.SPACE.X,
    height: 76,
  },

  location: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
  },
})
