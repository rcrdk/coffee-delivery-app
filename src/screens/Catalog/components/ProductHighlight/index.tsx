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

export function ProductHighlight({ product }: Props) {
  const navigator = useNavigation()

  function handleNavigation() {
    navigator.navigate('product', { id: product.id.toString() })
  }

  const price = priceFormatted(product.price)

  return (
    <View style={styles.container}>
      <Pressable style={styles.inner} onPress={handleNavigation}>
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
      </Pressable>
    </View>
  )
}
