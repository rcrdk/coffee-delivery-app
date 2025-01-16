import { Button } from '@components/Button'
import { QuantityControls } from '@components/QuantityControls'
import { Text } from '@components/Text'
import type { CartItem, CartItemSize } from '@dtos/cart'
import type { Product } from '@dtos/product'
import { useCart } from '@hooks/cart'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { THEME } from '@styles/theme'
import { Minus, Plus } from 'phosphor-react-native'
import { useCallback, useState } from 'react'
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

  function handleQuantity(mode: 'increase' | 'decrease') {
    setQuantity((prev) => {
      if (mode === 'decrease' && prev > 1) --prev
      if (mode === 'increase') prev++
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

  useFocusEffect(
    useCallback(() => {
      setSizeSelected('114ml')
      setQuantity(1)
    }, []),
  )

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
          <QuantityControls
            quantity={quantity}
            onDecrease={() => handleQuantity('decrease')}
            onIncrease={() => handleQuantity('increase')}
          />

          <Button label="Adicionar" type="purple" onPress={handleAddToCart} />
        </View>
      </View>
    </SafeAreaView>
  )
}
