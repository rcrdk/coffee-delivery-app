import { products } from '@data/products'
import type { Product as ProductDTO } from '@dtos/product'
import { useRoute } from '@react-navigation/native'
import { useMemo } from 'react'
import { ScrollView } from 'react-native'

import { Controls } from './components/Controls'
import { Info } from './components/Info'
import { TopBar } from './components/TopBar'
import { styles } from './styles'

type RouteParams = {
  id: string
}

export function Product() {
  const { params } = useRoute()
  const { id: productId } = params as RouteParams

  const product = useMemo(() => {
    return products.find((item) => item.id === Number(productId)) as ProductDTO
  }, [productId])

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.inner}
      showsVerticalScrollIndicator={false}
    >
      <TopBar />
      <Info product={product} />
      <Controls product={product} />
    </ScrollView>
  )
}
