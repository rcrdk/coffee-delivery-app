import { Text } from '@components/Text'
import { THEME } from '@styles/theme'
import type { QuantityModes } from '@utils/set-quantity-mode'
import { Minus, Plus } from 'phosphor-react-native'
import type { ComponentProps } from 'react'
import { Pressable, View } from 'react-native'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

import { styles } from './styles'

const AnimatedPressable = Animated.createAnimatedComponent(Pressable)

type Props = ComponentProps<typeof View> & {
  quantity: number
  onDecrease: VoidFunction
  onIncrease: VoidFunction
}

type ButtonProps = {
  onPress: VoidFunction
  mode: QuantityModes
}

function QuantityControlButton({ mode, onPress }: ButtonProps) {
  const scale = useSharedValue(1)

  const buttonAnimated = useAnimatedStyle(() => ({
    transform: [{ scale: withTiming(scale.value, { duration: 100 }) }],
  }))

  const onPressIn = () => (scale.value = 1.15)
  const onPressOut = () => (scale.value = 1)

  return (
    <AnimatedPressable
      style={[styles.button, buttonAnimated]}
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
    >
      {mode === 'decrease' && <Minus size={20} color={THEME.COLORS.purple} />}
      {mode === 'increase' && <Plus size={20} color={THEME.COLORS.purple} />}
    </AnimatedPressable>
  )
}

export function QuantityControls({
  quantity,
  onDecrease,
  onIncrease,
  ...props
}: Props) {
  return (
    <View {...props} style={[styles.container, props.style]}>
      <QuantityControlButton mode="decrease" onPress={onDecrease} />
      <Text style={styles.count}>{quantity}</Text>
      <QuantityControlButton mode="increase" onPress={onIncrease} />
    </View>
  )
}
