import { Heading } from '@components/Heading'
import { QuantityControls } from '@components/QuantityControls'
import { Text } from '@components/Text'
import type { CartItem as CartItemDTO } from '@dtos/cart'
import { useCart } from '@hooks/cart'
import { THEME } from '@styles/theme'
import { priceFormatted } from '@utils/price-formatted'
import { Trash } from 'phosphor-react-native'
import { Image, Pressable, View } from 'react-native'

import { styles } from './styles'

type Props = {
  data: CartItemDTO
}

export function CartItem({ data }: Props) {
  const { onChangeCartItemQuantity, onRemoveProduct } = useCart()

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

          <Pressable
            style={styles.removeButton}
            onPress={() => onRemoveProduct(data.id)}
          >
            <Trash size={20} color={THEME.COLORS.purple} />
          </Pressable>
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
