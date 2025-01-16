import { THEME } from '@styles/theme'
import { Dimensions, StyleSheet } from 'react-native'

const deviceHeight = Dimensions.get('screen').height * 1.5

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 99,
    backgroundColor: THEME.COLORS.purpleDark,
  },

  circle: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: (deviceHeight / 2) * -1,
    marginLeft: (deviceHeight / 2) * -1,
    borderRadius: '50%',
    backgroundColor: THEME.COLORS.purple,
    width: deviceHeight,
    height: deviceHeight,
    zIndex: 1,
  },

  brand: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    height: 68,
    top: '50%',
    left: 0,
    marginTop: -34,
    width: '100%',
    zIndex: 2,
  },
})
