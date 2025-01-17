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
  name: string
  selected: boolean
  onPress: VoidFunction
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable)

export function FilterTag({ name, selected, onPress }: Props) {
  const scale = useSharedValue(1)
  const active = useSharedValue(0)

  const containerAnimation = useAnimatedStyle(() => ({
    backgroundColor: withTiming(
      interpolateColor(
        active.value,
        [0, 1],
        ['transparent', THEME.COLORS.purple],
      ),
      {
        duration: 150,
      },
    ),
    transform: [{ scale: withTiming(scale.value, { duration: 100 }) }],
  }))

  const textAnimation = useAnimatedStyle(() => ({
    color: withTiming(
      interpolateColor(
        active.value,
        [0, 1],
        [THEME.COLORS.purpleDark, THEME.COLORS.white],
      ),
      {
        duration: 150,
      },
    ),
  }))

  const onPressIn = () => (scale.value = 0.9)
  const onPressOut = () => (scale.value = 1)

  useEffect(() => {
    active.value = selected ? 1 : 0
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected])

  return (
    <AnimatedPressable
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      style={[styles.container, containerAnimation]}
    >
      <Animated.Text style={[styles.text, textAnimation]}>{name}</Animated.Text>
    </AnimatedPressable>
  )
}
