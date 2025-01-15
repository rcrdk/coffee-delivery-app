import { Heading } from '@components/Heading'
import { products } from '@data/products'
import { groupBy } from '@utils/group-by'
import { useMemo } from 'react'
import { SectionList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Filters } from './components/FIlters'
import { Header } from './components/Header'
import { HighlightedProducts } from './components/HighlightedProducts'
import { ProductSection } from './components/ProductSection'
import { SectionSeparator } from './components/SectionSeparator'
import { TopBar } from './components/TopBar'
import { styles } from './styles'

export function Catalog() {
  const groupedProducts = useMemo(() => {
    const groupedProducts = groupBy(products, 'category')
    const groupProductsList = Object.entries(groupedProducts).map((item) => {
      return {
        title: item[0],
        data: item[1],
      }
    })

    return groupProductsList
  }, [])

  return (
    <SectionList
      sections={groupedProducts}
      keyExtractor={(item) => String(item.id)}
      ListHeaderComponent={() => (
        <SafeAreaView style={styles.topContainer} edges={['top']}>
          <TopBar />
          <Header />
          <HighlightedProducts />
          <Filters />
        </SafeAreaView>
      )}
      renderSectionHeader={({ section }) => (
        <Heading size="xs" color="gray400" style={styles.sectionListTitle}>
          {section.title}
        </Heading>
      )}
      renderItem={({ item }) => <ProductSection product={item} />}
      SectionSeparatorComponent={(data) => (
        <SectionSeparator type={!!data.leadingItem ? 'section' : 'title'} />
      )}
      ItemSeparatorComponent={() => <SectionSeparator type="item" />}
      style={styles.sectionList}
      contentContainerStyle={styles.sectionListContainer}
      stickySectionHeadersEnabled={false}
      showsVerticalScrollIndicator={false}
      automaticallyAdjustKeyboardInsets
    />
  )
}
