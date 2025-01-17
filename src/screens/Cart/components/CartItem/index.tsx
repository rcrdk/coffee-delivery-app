import { Heading } from '@components/Heading'
import { QuantityControls } from '@components/QuantityControls'
import { Text } from '@components/Text'
import type { CartItem as CartItemDTO } from '@dtos/cart'
import { useCart } from '@hooks/cart'
import { THEME } from '@styles/theme'
import { priceFormatted } from '@utils/price-formatted'
import { Trash } from 'phosphor-react-native'
import { Image, Pressable, View } from 'react-native'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

import { styles } from './styles'

type Props = {
  data: CartItemDTO
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable)

export function CartItem({ data }: Props) {
  const { onChangeCartItemQuantity, onRemoveProduct } = useCart()

  const scale = useSharedValue(1)

  const buttonAnimation = useAnimatedStyle(() => ({
    transform: [{ scale: withTiming(scale.value, { duration: 100 }) }],
  }))

  const onPressIn = () => (scale.value = 0.9)
  const onPressOut = () => (scale.value = 1)

  return (
    <View style={styles.container}>
      <Image source={data.product.image} style={styles.image} />

      <View style={styles.info}>
        <Text size="md" color="gray100">
          {data.product.name}
        </Text>

        <Text size="sm" color="gray400">
          {data.size}
        </Text>

        <View style={styles.controls}>
          <QuantityControls
            quantity={data.quantity}
            onDecrease={() => onChangeCartItemQuantity('decrease', data.id)}
            onIncrease={() => onChangeCartItemQuantity('increase', data.id)}
            style={styles.quantity}
          />

          <AnimatedPressable
            style={[styles.removeButton, buttonAnimation]}
            onPress={() => onRemoveProduct(data.id)}
            onPressIn={onPressIn}
            onPressOut={onPressOut}
          >
            <Trash size={20} color={THEME.COLORS.purple} />
          </AnimatedPressable>
        </View>
      </View>

      <View style={styles.price}>
        {data.quantity > 1 && (
          <Text size="xs" color="gray400">
            R$ {priceFormatted(data.product.price)} un.
          </Text>
        )}

        <Heading size="sm" color="gray100">
          R$ {priceFormatted(data.product.price * data.quantity)}
        </Heading>
      </View>
    </View>
  )
}
