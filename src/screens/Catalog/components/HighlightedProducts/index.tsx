import { products } from '@data/products'
import type { Product } from '@dtos/product'
import { useFocusEffect } from '@react-navigation/native'
import { useCallback, useEffect, useMemo } from 'react'
import { Dimensions, type ListRenderItemInfo, View } from 'react-native'
import Animated, {
  useAnimatedRef,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated'
import type { ReanimatedFlatList } from 'react-native-reanimated/lib/typescript/component/FlatList'

import { ProductHighlight } from '../ProductHighlight'
import { styles } from './styles'

export function HighlightedProducts() {
  const flatListRef = useAnimatedRef<ReanimatedFlatList<any>>()

  const scrollInX = useSharedValue(0)
  const containerTranslate = useSharedValue(Dimensions.get('window').width)
  const containerScale = useSharedValue(0.75)

  const containerTranslateAnimation = useAnimatedStyle(() => ({
    width: containerTranslate.value,
    transform: [{ scale: containerScale.value }],
  }))

  const renderItem = useCallback(
    (props: ListRenderItemInfo<Product>) => (
      <ProductHighlight
        product={props.item}
        currentPosition={scrollInX}
        slidePosition={props.index}
      />
    ),
    [scrollInX],
  )

  const highlightedProducts = useMemo(() => {
    return products.filter((item) => item.highlighted)
  }, [])

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollInX.value = event.contentOffset.x
    },
  })

  useEffect(() => {
    containerTranslate.value = withDelay(250, withTiming(0, { duration: 750 }))
    containerScale.value = withDelay(250, withTiming(1, { duration: 750 }))
  }, [containerScale, containerTranslate])

  useFocusEffect(
    useCallback(() => {
      flatListRef.current?.scrollToOffset({ animated: true, offset: 0 })
    }, [flatListRef]),
  )

  const listEndElementStyles = { width: Dimensions.get('window').width - 272 }

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.inner]}>
        <Animated.FlatList
          data={highlightedProducts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          ListFooterComponent={() => <View style={listEndElementStyles} />}
          ListHeaderComponent={() => (
            <Animated.View style={containerTranslateAnimation} />
          )}
          style={styles.list}
          showsHorizontalScrollIndicator={false}
          horizontal
          onScroll={scrollHandler}
          scrollEventThrottle={16}
          ref={flatListRef}
        />
      </Animated.View>
    </View>
  )
}
