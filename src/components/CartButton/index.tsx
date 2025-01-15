import { Text } from '@components/Text'
import { useCart } from '@hooks/cart'
import { useNavigation } from '@react-navigation/native'
import { THEME } from '@styles/theme'
import { ShoppingCart } from 'phosphor-react-native'
import { Pressable } from 'react-native'

import { styles } from './styles'

export function CartButton() {
  const { cartCounter } = useCart()

  const navigator = useNavigation()

  function handleNavigation() {
    navigator.navigate('cart')
  }

  return (
    <Pressable style={styles.button} onPress={handleNavigation}>
      <ShoppingCart
        color={THEME.COLORS[cartCounter ? 'purple' : 'yellowDark']}
        weight="fill"
        size={20}
      />

      {cartCounter > 0 && (
        <Text color="white" size="xs" style={styles.counter}>
          {cartCounter}
        </Text>
      )}
    </Pressable>
  )
}
