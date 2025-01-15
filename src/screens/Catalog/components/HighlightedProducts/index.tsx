import decorationImage from '@assets/decoration.png'
import { products } from '@data/products'
import { useMemo } from 'react'
import { FlatList, Image, View } from 'react-native'

import { ProductHighlight } from '../ProductHighlight'
import { styles } from './styles'

export function HighlightedProducts() {
  const highlightedProducts = useMemo(() => {
    return products.filter((item) => item.highlighted)
  }, [])

  return (
    <View style={styles.container}>
      <Image source={decorationImage} style={styles.decoration} />

      <FlatList
        data={highlightedProducts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ProductHighlight product={item} />}
        style={styles.list}
        showsHorizontalScrollIndicator={false}
        horizontal
      />

      <View style={styles.background} />
    </View>
  )
}
