import { Heading } from '@components/Heading'
import { products } from '@data/products'
import { useMemo } from 'react'
import { View } from 'react-native'

import { FilterTag } from '../FilterTag'
import { styles } from './styles'

type Props = {
  onSelect: (sectionIndex: number) => void
  activeSection: string
  sticky?: boolean
}

export function Filters({ sticky = false, activeSection, onSelect }: Props) {
  const tags = useMemo(() => {
    const allTags = products.map((item) => item.category)
    const tags = new Set(allTags)

    return Array.from(tags)
  }, [])

  return (
    <View style={[styles.container, sticky && styles.sticky]}>
      <Heading color="gray300" size="sm">
        Nossos cafés
      </Heading>

      <View style={styles.tags}>
        {tags.map((tag, index) => (
          <FilterTag
            name={tag}
            selected={tag === activeSection}
            onPress={() => onSelect(index)}
            key={tag}
          />
        ))}
      </View>
    </View>
  )
}
