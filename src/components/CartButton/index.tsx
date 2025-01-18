import { Text } from '@components/Text'
import { useCart } from '@hooks/cart'
import { useNavigation } from '@react-navigation/native'
import { THEME } from '@styles/theme'
import { ShoppingCart } from 'phosphor-react-native'
import { useEffect } from 'react'
import { Pressable } from 'react-native'
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

import { styles } from './styles'

export function CartButton() {
  const counterVisible = useSharedValue(0)

  const { cartCounter } = useCart()
  const navigator = useNavigation()

  const cartCounterAnimation = useAnimatedStyle(() => ({
    opacity: interpolate(counterVisible.value, [0, 1], [0, 1]),
    transform: [{ scale: interpolate(counterVisible.value, [0, 1], [0.5, 1]) }],
  }))

  useEffect(() => {
    counterVisible.value = withTiming(cartCounter === 0 ? 0 : 1, {
      duration: 250,
    })
  }, [cartCounter, counterVisible])

  return (
    <Pressable style={styles.button} onPress={() => navigator.navigate('cart')}>
      <ShoppingCart color={THEME.COLORS.yellowDark} weight="fill" size={24} />

      <Animated.View style={[styles.counter, cartCounterAnimation]}>
        <Text color="white" size="xs" bold>
          {cartCounter}
        </Text>
      </Animated.View>
    </Pressable>
  )
}
