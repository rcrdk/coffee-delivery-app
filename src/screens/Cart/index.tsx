import { useCart } from '@hooks/cart'
import { FlatList, ScrollView, Text, View } from 'react-native'

import { CartItem } from './components/CartItem'
import { TopBar } from './components/TopBar'
import { styles } from './styles'

export function Cart() {
  const { cartItems } = useCart()

  return (
    <View style={styles.container}>
      <TopBar />

      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CartItem data={item} />}
        style={styles.list}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}
