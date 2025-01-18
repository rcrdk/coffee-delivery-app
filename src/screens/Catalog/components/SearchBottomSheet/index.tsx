import { Heading } from '@components/Heading'
import { products } from '@data/products'
import type { Product } from '@dtos/product'
import {
  BottomSheetBackdrop,
  type BottomSheetBackdropProps,
  BottomSheetFlatList,
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet'
import { Portal } from '@gorhom/portal'
import { useSearch } from '@hooks/search'
import { THEME } from '@styles/theme'
import { useCallback, useEffect, useMemo, useRef } from 'react'
import { Dimensions, type ListRenderItemInfo, View } from 'react-native'
import Animated, {
  LinearTransition,
  SlideInLeft,
  SlideOutRight,
} from 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { ProductSection } from '../ProductSection'
import { Empty } from './empty'
import { styles } from './styles'

export function SearchBottomSheet() {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null)

  const { searchQuery, searchOpen, onToggleSearch } = useSearch()
  const { top, bottom } = useSafeAreaInsets()

  const screenHeight = Dimensions.get('window').height

  const productsFiltered = useMemo(() => {
    if (searchQuery.length === 0) {
      return products
    }

    return products.filter((item) => {
      const queryNormalized = searchQuery.toLowerCase().normalize('NFC')

      return (
        item.name.toLowerCase().normalize('NFC').includes(queryNormalized) ||
        item.category.toLowerCase().normalize('NFC').includes(queryNormalized)
      )
    })
  }, [searchQuery])

  const handleDismiss = useCallback(() => {
    bottomSheetModalRef.current?.dismiss()
  }, [])

  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...props}
        enableTouchThrough={true}
        opacity={1}
        disappearsOnIndex={-1}
        style={styles.backdrop}
      />
    ),
    [],
  )

  const renderHeader = useCallback(
    () =>
      productsFiltered.length > 0 ? (
        <Animated.View
          style={styles.searchTitle}
          entering={SlideInLeft.duration(750)}
          exiting={SlideOutRight.duration(500)}
        >
          {productsFiltered.length === 1 ? (
            <Heading color="yellowDark" size="md">
              1 resultado encontrado:
            </Heading>
          ) : (
            <Heading color="yellowDark" size="md">
              {productsFiltered.length} resultados encontrados:
            </Heading>
          )}
        </Animated.View>
      ) : (
        <></>
      ),
    [productsFiltered],
  )

  const renderItem = useCallback(
    (props: ListRenderItemInfo<Product>) => (
      <Animated.View
        entering={SlideInLeft.duration(750).delay(100 * (props.index + 1))}
        exiting={SlideOutRight.duration(500).delay(100 * (props.index + 1))}
      >
        <ProductSection product={props.item} onPress={handleDismiss} />
      </Animated.View>
    ),
    [handleDismiss],
  )

  useEffect(() => {
    if (bottomSheetModalRef.current && searchOpen) {
      bottomSheetModalRef.current?.present()
    }
  }, [onToggleSearch, searchOpen])

  const contentContainerStyle = [
    styles.contentContainer,
    { paddingBottom: bottom + THEME.SPACE.Y },
  ]

  return (
    <Portal>
      <BottomSheetModalProvider>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          onDismiss={onToggleSearch}
          maxDynamicContentSize={screenHeight - 72 - top}
          enableDynamicSizing={false}
          snapPoints={[screenHeight - 72 - top]}
          backdropComponent={renderBackdrop}
        >
          <BottomSheetFlatList
            data={productsFiltered}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            layout={LinearTransition.springify()}
            contentContainerStyle={contentContainerStyle}
            style={styles.container}
            showsVerticalScrollIndicator={false}
            automaticallyAdjustKeyboardInsets={productsFiltered.length === 0}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            ListHeaderComponent={renderHeader}
            ListEmptyComponent={() => <Empty onDismiss={handleDismiss} />}
          />
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </Portal>
  )
}
