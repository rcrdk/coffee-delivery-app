import { Heading } from '@components/Heading'
import { Text } from '@components/Text'
import type { Product } from '@dtos/product'
import { useNavigation } from '@react-navigation/native'
import { priceFormatted } from '@utils/price-formatted'
import { Image, Pressable, View } from 'react-native'

import { styles } from './styles'

type Props = {
  product: Product
}

export function ProductSection({ product }: Props) {
  const navigator = useNavigation()

  function handleNavigation() {
    navigator.navigate('product', { id: product.id.toString() })
  }

  const price = priceFormatted(product.price)

  return (
    <View style={styles.container}>
      <Pressable style={styles.inner} onPress={handleNavigation}>
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
      </Pressable>
    </View>
  )
}
