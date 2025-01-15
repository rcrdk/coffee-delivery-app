import { Button } from '@components/Button'
import { Text } from '@components/Text'
import type { CartItem, CartItemSize } from '@dtos/cart'
import type { Product } from '@dtos/product'
import { useCart } from '@hooks/cart'
import { useNavigation } from '@react-navigation/native'
import { THEME } from '@styles/theme'
import { Minus, Plus } from 'phosphor-react-native'
import { useState } from 'react'
import { Pressable, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import uuid from 'react-native-uuid'

import { Radio } from '../Radio'
import { styles } from './styles'

type Props = {
  product: Product
}

export function Controls({ product }: Props) {
  const [sizeSelected, setSizeSelected] = useState<CartItemSize>('114ml')
  const [quantity, setQuantity] = useState(1)

  const { onAddToCart } = useCart()
  const navigator = useNavigation()

  function handleQuantity(mode: 'add' | 'remove') {
    setQuantity((prev) => {
      if (mode === 'remove' && prev > 1) --prev
      if (mode === 'add' && prev < 10) prev++

      return prev
    })
  }

  function handleAddToCart() {
    const data: CartItem = {
      id: uuid.v4(),
      product,
      size: sizeSelected,
      quantity,
    }

    onAddToCart(data)
    navigator.navigate('cart')
  }

  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <View style={styles.inner}>
        <Text size="sm" color="gray400">
          Selecione o tamanho:
        </Text>

        <View style={styles.radioGroup}>
          <Radio
            value="114ml"
            checked={sizeSelected === '114ml'}
            onChange={() => setSizeSelected('114ml')}
          />

          <Radio
            value="140ml"
            checked={sizeSelected === '140ml'}
            onChange={() => setSizeSelected('140ml')}
          />

          <Radio
            value="227ml"
            checked={sizeSelected === '227ml'}
            onChange={() => setSizeSelected('227ml')}
          />
        </View>

        <View style={styles.quantityContainer}>
          <View style={styles.quantity}>
            <Pressable
              style={styles.quantityButton}
              onPress={() => handleQuantity('remove')}
            >
              <Minus size={20} color={THEME.COLORS.purple} />
            </Pressable>

            <Text style={styles.quantityCount}>{quantity}</Text>

            <Pressable
              style={styles.quantityButton}
              onPress={() => handleQuantity('add')}
            >
              <Plus size={20} color={THEME.COLORS.purple} />
            </Pressable>
          </View>

          <Button label="Adicionar" type="purple" onPress={handleAddToCart} />
        </View>
      </View>
    </SafeAreaView>
  )
}
