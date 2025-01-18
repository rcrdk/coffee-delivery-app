import { Button } from '@components/Button'
import { Heading } from '@components/Heading'
import { Text } from '@components/Text'
import { products } from '@data/products'
import {
  BottomSheetBackdrop,
  BottomSheetFlatList,
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet'
import { Portal } from '@gorhom/portal'
import { useSearch } from '@hooks/search'
import { THEME } from '@styles/theme'
import { useCallback, useEffect, useMemo, useRef } from 'react'
import { Dimensions, View } from 'react-native'
import Animated, {
  LinearTransition,
  SlideInLeft,
  SlideOutRight,
} from 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { ProductSection } from '../ProductSection'
import { Illustration } from './Illustration'
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

  useEffect(() => {
    if (bottomSheetModalRef.current && searchOpen) {
      bottomSheetModalRef.current?.present()
    }
  }, [onToggleSearch, searchOpen])

  return (
    <Portal>
      <BottomSheetModalProvider>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          onDismiss={onToggleSearch}
          maxDynamicContentSize={screenHeight - 72 - top}
          enableDynamicSizing={false}
          snapPoints={[screenHeight - 72 - top]}
          backdropComponent={(props) => (
            <BottomSheetBackdrop
              {...props}
              enableTouchThrough={true}
              opacity={1}
              disappearsOnIndex={-1}
              style={styles.backdrop}
            />
          )}
        >
          <BottomSheetFlatList
            data={productsFiltered}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item, index }) => (
              <Animated.View
                entering={SlideInLeft.duration(750).delay(100 * (index + 1))}
                exiting={SlideOutRight.duration(500).delay(100 * (index + 1))}
              >
                <ProductSection product={item} onPress={handleDismiss} />
              </Animated.View>
            )}
            layout={LinearTransition.springify()}
            contentContainerStyle={[
              styles.contentContainer,
              { paddingBottom: bottom + THEME.SPACE.Y },
            ]}
            style={styles.container}
            showsVerticalScrollIndicator={false}
            automaticallyAdjustKeyboardInsets={productsFiltered.length === 0}
            ItemSeparatorComponent={() => <View style={{ height: 24 }} />}
            ListHeaderComponent={() =>
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
              )
            }
            ListEmptyComponent={() => (
              <View style={styles.searchMessage}>
                <Illustration />

                <Heading size="lg" color="yellowDark" center>
                  Nenhum café encontrado
                </Heading>

                <Text color="gray400" center>
                  Não encontramos cafés com o termo "{searchQuery}". Tente
                  outros termos.
                </Text>

                <Button
                  label="Fechar"
                  type="purple"
                  style={styles.searchButton}
                  onPress={handleDismiss}
                />
              </View>
            )}
          />
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </Portal>
  )
}
