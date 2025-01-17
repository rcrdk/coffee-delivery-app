import { Heading } from '@components/Heading'
import { Text } from '@components/Text'
import type { Product } from '@dtos/product'
import { useNavigation } from '@react-navigation/native'
import { priceFormatted } from '@utils/price-formatted'
import { Image, Pressable, View } from 'react-native'
import Animated, {
  Extrapolation,
  interpolate,
  type SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

import { styles } from './styles'

type Props = {
  product: Product
  slidePosition: number
  currentPosition: SharedValue<number>
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable)

export function ProductHighlight({
  product,
  currentPosition,
  slidePosition,
}: Props) {
  const scale = useSharedValue(1)

  const navigator = useNavigation()

  function handleNavigation() {
    navigator.navigate('product', { id: product.id.toString() })
  }

  const price = priceFormatted(product.price)

  const itemAnimation = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(
            currentPosition.value,
            [242 * slidePosition, 242 * (slidePosition - 1)],
            [1, 0.75],
            Extrapolation.CLAMP,
          ),
        },
      ],
    }
  })

  const pressableAnimation = useAnimatedStyle(() => ({
    transform: [{ scale: withTiming(scale.value, { duration: 100 }) }],
  }))

  const onPressIn = () => (scale.value = 0.9)
  const onPressOut = () => (scale.value = 1)

  return (
    <Animated.View style={[styles.container, itemAnimation]}>
      <AnimatedPressable
        style={[styles.inner, pressableAnimation]}
        onPress={handleNavigation}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
      >
        <Image source={product.image} style={styles.image} />

        <View style={styles.info}>
          <Text style={styles.tag}>{product.category}</Text>

          <Heading size="md" color="gray200" center>
            {product.name}
          </Heading>

          <Text size="xs" color="gray400" center style={{ flex: 1 }}>
            {product.description}
          </Text>

          <View style={styles.price}>
            <Text color="yellowDark" size="sm">
              R$
            </Text>
            <Heading color="yellowDark" size="lg">
              {price}
            </Heading>
          </View>
        </View>
      </AnimatedPressable>
    </Animated.View>
  )
}
