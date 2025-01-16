import { CartButton } from '@components/CartButton'
import { Heading } from '@components/Heading'
import { products } from '@data/products'
import type { Product } from '@dtos/product'
import { THEME } from '@styles/theme'
import { groupBy } from '@utils/group-by'
import { MapPin } from 'phosphor-react-native'
import { useEffect, useMemo, useState } from 'react'
import { SectionList, type SectionListProps, View } from 'react-native'
import Animated, {
  Extrapolation,
  interpolate,
  interpolateColor,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { Filters } from './components/FIlters'
import { Header } from './components/Header'
import { HighlightedProducts } from './components/HighlightedProducts'
import { ProductSection } from './components/ProductSection'
import { SectionSeparator } from './components/SectionSeparator'
import { styles } from './styles'

const AnimatedSectionList =
  Animated.createAnimatedComponent<SectionListProps<Product>>(SectionList)

export function Catalog() {
  const listRef = useAnimatedRef<SectionList>()
  const filtersRef = useAnimatedRef<Animated.View>()

  const [activeSection, setActiveSection] = useState('')

  const { top } = useSafeAreaInsets()

  const scrollInY = useSharedValue(0)
  const curtainHeight = useSharedValue(100)
  const filterTopOffset = useSharedValue(0)

  const curtainHeightAnimation = useAnimatedStyle(() => ({
    height: `${curtainHeight.value}%`,
  }))

  const topBarScrollAnimation = useAnimatedStyle(() => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    justifyContent: 'center',
    zIndex: 2,
    borderBottomWidth: 1,
    backgroundColor: interpolateColor(
      scrollInY.value,
      [15, 75],
      [THEME.COLORS.gray100, THEME.COLORS.white],
    ),
    borderBottomColor: interpolateColor(
      scrollInY.value,
      [15, 75],
      [THEME.COLORS.gray100, THEME.COLORS.gray700],
    ),
    height: interpolate(
      scrollInY.value,
      [0, 100],
      [76 + top, 50 + top],
      Extrapolation.CLAMP,
    ),
  }))

  const topBarLabelScrollAnimation = useAnimatedStyle(() => ({
    fontFamily: THEME.FONTS.bodyRegular,
    fontSize: THEME.SIZE.BODY.sm,
    color: interpolateColor(
      scrollInY.value,
      [15, 75],
      [THEME.COLORS.gray900, THEME.COLORS.gray200],
    ),
  }))

  const filtersStickyScrollAnimation = useAnimatedStyle(() => ({
    position: 'absolute',
    top: top + 50,
    left: 0,
    width: '100%',
    zIndex: 1,
    backgroundColor: THEME.COLORS.white,
    transform: [
      {
        translateY: interpolate(
          scrollInY.value,
          [0, filterTopOffset.value - (50 + top + 16), filterTopOffset.value],
          [-200, 0, 0],
          Extrapolation.CLAMP,
        ),
      },
    ],
  }))

  function handleScrollToSection(sectionIndex: number) {
    listRef.current?.scrollToLocation({
      animated: true,
      sectionIndex,
      itemIndex: 0,
      viewOffset: 175 + top,
    })
  }

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

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollInY.value = event.contentOffset.y
    },
  })

  useEffect(() => {
    curtainHeight.value = withDelay(250, withTiming(0, { duration: 1000 }))
  }, [curtainHeight])

  return (
    <>
      <Animated.View style={[topBarScrollAnimation]}>
        <View style={[styles.topbar, { paddingTop: top }]}>
          <View style={styles.location}>
            <MapPin color={THEME.COLORS.purple} weight="fill" size={20} />
            <Animated.Text style={topBarLabelScrollAnimation}>
              Timbó, SC
            </Animated.Text>
          </View>
          <CartButton />
        </View>
      </Animated.View>

      <Animated.View style={filtersStickyScrollAnimation}>
        <Filters
          activeSection={activeSection}
          onSelect={handleScrollToSection}
          sticky
        />
      </Animated.View>

      <AnimatedSectionList
        sections={groupedProducts}
        keyExtractor={(item) => String(item.id)}
        ListHeaderComponent={() => (
          <View style={[styles.container, { paddingTop: top + 76 + 16 }]}>
            <Header />
            <HighlightedProducts />

            <Animated.View
              ref={filtersRef}
              onLayout={(event) =>
                (filterTopOffset.value = event.nativeEvent.layout.y)
              }
            >
              <Filters
                activeSection={activeSection}
                onSelect={handleScrollToSection}
              />
            </Animated.View>

            <Animated.View
              style={[styles.enterCurtain, curtainHeightAnimation]}
            />
          </View>
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
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        ref={listRef}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 50,
        }}
        onViewableItemsChanged={({ viewableItems }) => {
          setActiveSection(viewableItems.at(1)?.section?.title ?? '')
        }}
      />
    </>
  )
}
