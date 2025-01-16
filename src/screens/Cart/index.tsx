import { useCart } from '@hooks/cart'
import { FlatList, ScrollView, Text, View } from 'react-native'

import { CartItem } from './components/CartItem'
import { Empty } from './components/Empty'
import { Footer } from './components/Footer'
import { TopBar } from './components/TopBar'
import { styles } from './styles'

export function Cart() {
  const { cartItems, cartCounter } = useCart()

  return (
    <View style={styles.container}>
      <TopBar />

      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CartItem data={item} />}
        style={styles.list}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flex: cartCounter ? 0 : 1 }}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListEmptyComponent={() => <Empty />}
      />

      <Footer />
    </View>
  )
}
