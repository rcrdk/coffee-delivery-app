import { Heading } from '@components/Heading'
import { products } from '@data/products'
import { useMemo } from 'react'
import { View } from 'react-native'

import { FilterTag } from '../FilterTag'
import { styles } from './styles'

export function Filters() {
  const tags = useMemo(() => {
    const allTags = products.map((item) => item.category)
    const tags = new Set(allTags)

    return Array.from(tags)
  }, [])

  return (
    <View style={styles.container}>
      <Heading color="gray300" size="sm">
        Nossos cafés
      </Heading>

      <View style={styles.tags}>
        {tags.map((tag, index) => (
          <FilterTag name={tag} selected={index === 0} key={tag} />
        ))}
      </View>
    </View>
  )
}
