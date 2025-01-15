import { Heading } from '@components/Heading'
import { Text } from '@components/Text'
import type { Product } from '@dtos/product'
import { priceFormatted } from '@utils/price-formatted'
import { Image, View } from 'react-native'

import { styles } from './styles'

type Props = {
  product: Product
}

export function Info({ product }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.data}>
        <View style={styles.row}>
          <View style={styles.title}>
            <Text style={styles.tag}>{product.category}</Text>
            <Heading color="white" size="lg">
              {product.name}
            </Heading>
          </View>

          <View style={styles.price}>
            <Text size="sm" color="yellow">
              R$
            </Text>
            <Heading size="xl" color="yellow">
              {priceFormatted(product.price)}
            </Heading>
          </View>
        </View>

        <Text size="md" color="gray500">
          {product.description}
        </Text>
      </View>

      <Image source={product.image} style={styles.image} />
    </View>
  )
}
