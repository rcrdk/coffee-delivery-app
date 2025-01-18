import { Text } from '@components/Text'
import { useCart } from '@hooks/cart'
import { useNavigation } from '@react-navigation/native'
import { THEME } from '@styles/theme'
import { ArrowRight } from 'phosphor-react-native'
import { useCallback, useEffect, useState } from 'react'
import { Image, type LayoutChangeEvent, Pressable, View } from 'react-native'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { styles } from './styles'

export function CartAddedProduct() {
  const [originalHeight, setOriginalHeight] = useState(0)
  const translate = useSharedValue(0)

  const { bottom } = useSafeAreaInsets()
  const { cartItemAdded, onResetCartItemAdded } = useCart()
  const navigator = useNavigation()

  const containerAnimation = useAnimatedStyle(() => ({
    transform: [{ translateY: translate.value }],
  }))

  const onLayoutFn = useCallback(
    (event: LayoutChangeEvent) => {
      const elementHeight = event.nativeEvent.layout.height + 10

      translate.value = elementHeight
      setOriginalHeight(elementHeight)
    },
    [translate],
  )

  useEffect(() => {
    if (cartItemAdded) {
      const timerDisaplay = setTimeout(() => {
        translate.value = withTiming(0)
      }, 1500)

      const timerTranslate = setTimeout(() => {
        translate.value = withTiming(originalHeight, { duration: 800 })
      }, 6000)

      const timerResetData = setTimeout(() => {
        onResetCartItemAdded()
      }, 7000)

      return () => {
        clearTimeout(timerDisaplay)
        clearTimeout(timerTranslate)
        clearTimeout(timerResetData)
      }
    }
  }, [cartItemAdded, onResetCartItemAdded, originalHeight, translate])

  return (
    <Animated.View
      style={[styles.container, { paddingBottom: bottom }, containerAnimation]}
      onLayout={onLayoutFn}
    >
      <Pressable
        style={styles.inner}
        onPress={() => {
          navigator.navigate('cart')
          onResetCartItemAdded()
        }}
      >
        <Image source={cartItemAdded?.product.image} style={styles.image} />

        {cartItemAdded?.quantity === 1 ? (
          <Text color="gray300" size="sm" style={styles.text}>
            1 café{' '}
            <Text color="gray300" size="sm" bold>
              {cartItemAdded?.product.name}
            </Text>{' '}
            de{' '}
            <Text color="gray300" size="sm" bold>
              {cartItemAdded?.size}
            </Text>{' '}
            adicionado ao carrinho
          </Text>
        ) : (
          <Text color="gray300" size="sm" style={styles.text}>
            {cartItemAdded?.quantity} cafés{' '}
            <Text color="gray300" size="sm" bold>
              {cartItemAdded?.product.name}
            </Text>{' '}
            de{' '}
            <Text color="gray300" size="sm" bold>
              {cartItemAdded?.size}
            </Text>{' '}
            adicionado ao carrinho
          </Text>
        )}

        <View style={styles.button}>
          <Text size="sm" color="purple" style={styles.buttonText} bold>
            Ver
          </Text>

          <ArrowRight size={20} weight="bold" color={THEME.COLORS.purple} />
        </View>
      </Pressable>
    </Animated.View>
  )
}
