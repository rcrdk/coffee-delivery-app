import { Text } from '@components/Text'
import type { ComponentProps } from 'react'
import { Pressable, type StyleProp, type ViewStyle } from 'react-native'

import { styles } from './styles'

type Props = ComponentProps<typeof Pressable> & {
  label: string
  type: 'purple' | 'yellow'
}

export function Button({ label, type, ...props }: Props) {
  return (
    <Pressable
      {...props}
      style={[
        styles.container,
        type === 'purple' && styles.containerPurple,
        type === 'yellow' && styles.containerYellow,
        props.disabled && styles.disabled,
        props.style as StyleProp<ViewStyle>,
      ]}
    >
      <Text style={styles.text} bold>
        {label}
      </Text>
    </Pressable>
  )
}
