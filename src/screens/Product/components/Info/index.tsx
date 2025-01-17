import { Heading } from '@components/Heading'
import { Text } from '@components/Text'
import type { Product } from '@dtos/product'
import { priceFormatted } from '@utils/price-formatted'
import { useEffect } from 'react'
import { View } from 'react-native'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated'

import { styles } from './styles'

type Props = {
  product: Product
}

export function Info({ product }: Props) {
  const rotate = useSharedValue(25)
  const scale = useSharedValue(0.75)
  const opacity = useSharedValue(0)

  const contentLeftTranslate = useSharedValue(-32)
  const contentRightTranslate = useSharedValue(32)

  const imageAnimation = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }, { rotate: `${rotate.value}deg` }],
    opacity: opacity.value,
  }))

  const contentLeftAnimation = useAnimatedStyle(() => ({
    transform: [{ translateX: contentLeftTranslate.value }],
    opacity: opacity.value,
  }))

  const contentRightAnimation = useAnimatedStyle(() => ({
    transform: [{ translateX: contentRightTranslate.value }],
    opacity: opacity.value,
  }))

  useEffect(() => {
    rotate.value = withDelay(250, withTiming(0, { duration: 1200 }))
    scale.value = withDelay(250, withTiming(1, { duration: 800 }))
    opacity.value = withDelay(250, withTiming(1, { duration: 800 }))

    contentLeftTranslate.value = withDelay(
      250,
      withTiming(0, { duration: 800 }),
    )

    contentRightTranslate.value = withDelay(
      250,
      withTiming(0, { duration: 800 }),
    )
  }, [contentLeftTranslate, contentRightTranslate, opacity, rotate, scale])

  return (
    <View style={styles.container}>
      <View style={styles.data}>
        <View style={styles.row}>
          <Animated.View style={[styles.title, contentLeftAnimation]}>
            <Text style={styles.tag}>{product.category}</Text>
            <Heading color="white" size="lg">
              {product.name}
            </Heading>
          </Animated.View>

          <Animated.View style={[styles.price, contentRightAnimation]}>
            <Text size="sm" color="yellow">
              R$
            </Text>
            <Heading size="xl" color="yellow">
              {priceFormatted(product.price)}
            </Heading>
          </Animated.View>
        </View>

        <Animated.View style={contentLeftAnimation}>
          <Text size="md" color="gray500">
            {product.description}
          </Text>
        </Animated.View>
      </View>

      <Animated.Image
        source={product.image}
        style={[styles.image, imageAnimation]}
      />
    </View>
  )
}
