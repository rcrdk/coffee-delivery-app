import { Heading } from '@components/Heading'
import { Text } from '@components/Text'
import type { CartItem as CartItemDTO } from '@dtos/cart'
import { priceFormatted } from '@utils/price-formatted'
import { Image, View } from 'react-native'

import { styles } from './styles'

type Props = {
  data: CartItemDTO
}

export function CartItem({ data }: Props) {
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

        {/* <Heading>{data.quantity}</Heading> */}
      </View>

      <Heading size="sm" color="gray100">
        R$ {priceFormatted(data.product.price)}
      </Heading>
    </View>
  )
}
