import { Text } from '@components/Text'
import type { ComponentProps } from 'react'
import { Pressable } from 'react-native'

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
      ]}
    >
      <Text style={styles.text} bold>
        {label}
      </Text>
    </Pressable>
  )
}
