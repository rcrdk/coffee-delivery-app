import { useCart } from '@hooks/cart'
import { THEME } from '@styles/theme'
import { Trash } from 'phosphor-react-native'
import { useRef } from 'react'
import { Alert, FlatList, View } from 'react-native'
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

  function handleRemoveItem(cartItemId: string, index: number) {
    swipeableRefs.current?.[index].close()

    Alert.alert('Remover do carrinho', 'Deseja este café do carrinho?', [
      { text: 'Quero manter', style: 'cancel' },
      {
        text: 'Remover',
        style: 'destructive',
        onPress: () => onRemoveProduct(cartItemId),
      },
    ])
  }

  return (
    <View style={styles.container}>
      <TopBar />

      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <Animated.View
            entering={FadeInDown.duration(500).delay(200 * (index + 1))}
            exiting={SlideOutLeft.duration(500)}
            layout={LinearTransition.springify()}
          >
            <Swipeable
              overshootLeft={false}
              containerStyle={styles.swipeableContainer}
              onSwipeableOpen={() => handleRemoveItem(item.id, index)}
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
              <CartItem data={item} />
            </Swipeable>
          </Animated.View>
        )}
        style={styles.list}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flex: cartCounter ? 0 : 1 }}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListEmptyComponent={() => <Empty />}
      />

      {cartCounter > 0 && <Footer />}
    </View>
  )
}
