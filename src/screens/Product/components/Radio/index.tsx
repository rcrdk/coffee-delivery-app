import { Text } from '@components/Text'
import type { CartItemSize } from '@dtos/cart'
import { THEME } from '@styles/theme'
import { useEffect } from 'react'
import { Pressable } from 'react-native'
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

import { styles } from './styles'

type Props = {
  value: CartItemSize
  checked: boolean
  onChange: VoidFunction
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable)

export function Radio({ checked, value, onChange }: Props) {
  const scale = useSharedValue(1)
  const active = useSharedValue(0)

  const containerAnimation = useAnimatedStyle(() => ({
    backgroundColor: withTiming(
      interpolateColor(
        active.value,
        [0, 1],
        [THEME.COLORS.gray700, THEME.COLORS.white],
      ),
      {
        duration: 150,
      },
    ),
    borderColor: withTiming(
      interpolateColor(
        active.value,
        [0, 1],
        [THEME.COLORS.gray700, THEME.COLORS.purple],
      ),
      {
        duration: 150,
      },
    ),
    transform: [{ scale: withTiming(scale.value, { duration: 100 }) }],
  }))

  const onPressIn = () => (scale.value = 0.9)
  const onPressOut = () => (scale.value = 1)

  useEffect(() => {
    active.value = checked ? 1 : 0
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checked])

  return (
    <AnimatedPressable
      style={[styles.radio, containerAnimation]}
      onPress={onChange}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
    >
      <Text size="sm" color={checked ? 'purple' : 'gray300'} bold={checked}>
        {value}
      </Text>
    </AnimatedPressable>
  )
}
