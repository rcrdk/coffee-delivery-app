import { Text } from '@components/Text'
import { useNavigation } from '@react-navigation/native'
import { THEME } from '@styles/theme'
import { ShoppingCart } from 'phosphor-react-native'
import { Pressable } from 'react-native'

import { styles } from './styles'

export function CartButton() {
  const CART_SIZE = 2

  const navigator = useNavigation()

  function handleNavigation() {
    navigator.navigate('cart')
  }

  return (
    <Pressable style={styles.button} onPress={handleNavigation}>
      <ShoppingCart
        color={THEME.COLORS[CART_SIZE ? 'purple' : 'yellowDark']}
        weight="fill"
        size={20}
      />

      {CART_SIZE > 0 && (
        <Text color="white" size="xs" style={styles.counter}>
          {CART_SIZE}
        </Text>
      )}
    </Pressable>
  )
}
