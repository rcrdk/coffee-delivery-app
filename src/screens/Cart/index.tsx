import type { CartItem as CartItemDTO } from '@dtos/cart'
import { useCart } from '@hooks/cart'
import { THEME } from '@styles/theme'
import { Trash } from 'phosphor-react-native'
import { useCallback, useRef } from 'react'
import { FlatList, type ListRenderItemInfo, View } from 'react-native'
import Swipeable, {
  type SwipeableMethods,
} from 'react-native-gesture-handler/ReanimatedSwipeable'
import Animated, {
  FadeInDown,
  LinearTransition,
  SlideOutLeft,
} from 'react-native-reanimated'

import { CartItem } from './components/CartItem'
import { Empty } from './components/Empty'
import { Footer } from './components/Footer'
import { TopBar } from './components/TopBar'
import { styles } from './styles'

export function Cart() {
  const swipeableRefs = useRef<SwipeableMethods[]>([])

  const { cartItems, cartCounter, onRemoveProduct } = useCart()

  const handleRemoveItem = useCallback(
    (cartItemId: string, index: number) => {
      swipeableRefs.current?.[index].close()
      onRemoveProduct(cartItemId)
    },
    [onRemoveProduct],
  )

  const renderItem = useCallback(
    (props: ListRenderItemInfo<CartItemDTO>) => {
      return (
        <Animated.View
          entering={FadeInDown.duration(500).delay(200 * (props.index + 1))}
          exiting={SlideOutLeft.duration(500)}
          layout={LinearTransition.springify()}
        >
          <Swipeable
            overshootLeft={false}
            containerStyle={styles.swipeableContainer}
            onSwipeableOpen={() => handleRemoveItem(props.item.id, props.index)}
            rightThreshold={5}
            renderLeftActions={() => null}
            renderRightActions={() => {
              return (
                <View style={styles.swipeableRemove}>
                  <Trash size={24} color={THEME.COLORS.redDark} />
                </View>
              )
            }}
            ref={(ref) => {
              if (ref) {
                swipeableRefs.current.push(ref)
              }
            }}
          >
            <CartItem data={props.item} />
          </Swipeable>
        </Animated.View>
      )
    },
    [handleRemoveItem],
  )

  const shouldDisplayFooter = cartCounter > 0

  return (
    <View style={styles.container}>
      <TopBar />

      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        style={styles.list}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flex: cartCounter ? 0 : 1 }}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListEmptyComponent={() => <Empty />}
      />

      {shouldDisplayFooter && <Footer />}
    </View>
  )
}
