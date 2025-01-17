import { Text } from '@components/Text'
import type { ComponentProps } from 'react'
import { Pressable, type StyleProp, type ViewStyle } from 'react-native'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

import { styles } from './styles'

type Props = ComponentProps<typeof Pressable> & {
  label: string
  type: 'purple' | 'yellow'
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable)

export function Button({ label, type, ...props }: Props) {
  const scale = useSharedValue(1)

  const buttonAnimation = useAnimatedStyle(() => ({
    // backgroundColor: withTiming(
    //   interpolateColor(
    //     active.value,
    //     [0, 1],
    //     [THEME.COLORS.gray700, THEME.COLORS.white],
    //   ),
    //   {
    //     duration: 150,
    //   },
    // ),
    // borderColor: withTiming(
    //   interpolateColor(
    //     active.value,
    //     [0, 1],
    //     [THEME.COLORS.gray700, THEME.COLORS.purple],
    //   ),
    //   {
    //     duration: 150,
    //   },
    // ),
    transform: [{ scale: withTiming(scale.value, { duration: 100 }) }],
  }))

  const onPressIn = () => (scale.value = 0.97)
  const onPressOut = () => (scale.value = 1)

  return (
    <AnimatedPressable
      {...props}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      style={[
        styles.container,
        type === 'purple' && styles.containerPurple,
        type === 'yellow' && styles.containerYellow,
        props.disabled && styles.disabled,
        buttonAnimation,
        props.style as StyleProp<ViewStyle>,
      ]}
    >
      <Text style={styles.text} bold>
        {label}
      </Text>
    </AnimatedPressable>
  )
}
