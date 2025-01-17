import { Button } from '@components/Button'
import { QuantityControls } from '@components/QuantityControls'
import { Text } from '@components/Text'
import type { CartItem, CartItemSize } from '@dtos/cart'
import type { Product } from '@dtos/product'
import { useCart } from '@hooks/cart'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import type { QuantityModes } from '@utils/set-quantity-mode'
import { Audio } from 'expo-av'
import { useCallback, useEffect, useState } from 'react'
import { View } from 'react-native'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import uuid from 'react-native-uuid'

import { Radio } from '../Radio'
import { styles } from './styles'

type Props = {
  product: Product
}

export function Controls({ product }: Props) {
  const translate = useSharedValue(100)

  const [sizeSelected, setSizeSelected] = useState<CartItemSize>('114ml')
  const [quantity, setQuantity] = useState(1)

  const { onAddToCart } = useCart()
  const { bottom } = useSafeAreaInsets()
  const navigator = useNavigation()

  async function userFeedback() {
    const file = require('@assets/sound-add-to-cart.mp3')

    const { sound } = await Audio.Sound.createAsync(file, { shouldPlay: true })
    await sound.setPositionAsync(0)
    await sound.playAsync()
  }

  function handleQuantity(mode: QuantityModes) {
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
    userFeedback()
    navigator.navigate('catalog')
  }

  const controlsContainerAnimation = useAnimatedStyle(() => ({
    transform: [{ translateY: translate.value }],
  }))

  useEffect(() => {
    const timer = setTimeout(
      () => (translate.value = withTiming(0, { duration: 600 })),
      250,
    )

    return () => {
      clearTimeout(timer)
    }
  }, [translate])

  useFocusEffect(
    useCallback(() => {
      setSizeSelected('114ml')
      setQuantity(1)
    }, []),
  )

  return (
    <Animated.View
      style={[
        styles.container,
        controlsContainerAnimation,
        { paddingBottom: bottom },
      ]}
      onLayout={(event) => {
        translate.value = event.nativeEvent.layout.height
      }}
    >
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
    </Animated.View>
  )
}
