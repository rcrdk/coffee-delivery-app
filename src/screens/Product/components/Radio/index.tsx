import { Text } from '@components/Text'
import { Pressable } from 'react-native'

import { styles } from './styles'

type Props = {
  value: string
  checked: boolean
  onChange: VoidFunction
}

export function Radio({ checked, value, onChange }: Props) {
  return (
    <Pressable
      style={[styles.radio, checked && styles.radioSelected]}
      onPress={onChange}
    >
      <Text size="sm" color={checked ? 'purple' : 'gray300'} bold={checked}>
        {value}
      </Text>
    </Pressable>
  )
}
