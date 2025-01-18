import { Heading } from '@components/Heading'
import { Text } from '@components/Text'
import type { Product } from '@dtos/product'
import { useNavigation } from '@react-navigation/native'
import { priceFormatted } from '@utils/price-formatted'
import { Image, Pressable, View } from 'react-native'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

import { styles } from './styles'

type Props = {
  product: Product
  onPress?: VoidFunction
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable)

export function ProductSection({ product, onPress }: Props) {
  const scale = useSharedValue(1)

  const navigator = useNavigation()

  function handleNavigation() {
    if (onPress) onPress()

    navigator.navigate('product', { id: product.id.toString() })
  }

  const price = priceFormatted(product.price)

  const pressableAnimation = useAnimatedStyle(() => ({
    transform: [{ scale: withTiming(scale.value, { duration: 100 }) }],
  }))

  const onPressIn = () => (scale.value = 0.9)
  const onPressOut = () => (scale.value = 1)

  return (
    <View style={styles.container}>
      <AnimatedPressable
        style={[styles.inner, pressableAnimation]}
        onPress={handleNavigation}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
      >
        <Image source={product.image} style={styles.image} />

        <View style={styles.right}>
          <Heading size="sm" color="gray200">
            {product.name}
          </Heading>

          <Text size="xs" color="gray400">
            {product.description}
          </Text>

          <View style={styles.price}>
            <Text color="yellowDark" size="sm">
              R$
            </Text>
            <Heading color="yellowDark" size="md">
              {price}
            </Heading>
          </View>
        </View>
      </AnimatedPressable>
    </View>
  )
}
