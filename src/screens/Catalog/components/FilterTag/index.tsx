import { Text } from '@components/Text'
import type { ComponentProps } from 'react'
import { Pressable } from 'react-native'

import { styles } from './styles'

type Props = ComponentProps<typeof Pressable> & {
  name: string
  selected: boolean
}

export function FilterTag({ name, selected, ...props }: Props) {
  return (
    <Pressable
      {...props}
      style={[styles.container, selected && styles.containerActive]}
    >
      <Text style={[styles.text, selected && styles.textActive]}>{name}</Text>
    </Pressable>
  )
}
