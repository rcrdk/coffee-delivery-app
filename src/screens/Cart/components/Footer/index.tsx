import { Button } from '@components/Button'
import { Heading } from '@components/Heading'
import { Text } from '@components/Text'
import { useCart } from '@hooks/cart'
import { useNavigation } from '@react-navigation/native'
import { priceFormatted } from '@utils/price-formatted'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { styles } from './styles'

export function Footer() {
  const navigator = useNavigation()
  const { cartCounter, cartTotalPrice, onConfirmOrder } = useCart()

  function handleConfirmOrder() {
    navigator.navigate('success')
    onConfirmOrder()
  }

  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <View style={styles.inner}>
        <View style={styles.total}>
          <Text color="gray200" size="md">
            Valor total
          </Text>

          <Heading color="gray200" size="md">
            R$ {priceFormatted(cartTotalPrice)}
          </Heading>
        </View>

        <Button
          label="Confirmar pedido"
          type="yellow"
          disabled={cartCounter === 0}
          onPress={handleConfirmOrder}
        />
      </View>
    </SafeAreaView>
  )
}
