import { Text } from '@components/Text'
import { THEME } from '@styles/theme'
import { Minus, Plus } from 'phosphor-react-native'
import type { ComponentProps } from 'react'
import { Pressable, View } from 'react-native'

import { styles } from './styles'

type Props = ComponentProps<typeof View> & {
  quantity: number
  onDecrease: VoidFunction
  onIncrease: VoidFunction
}

export function QuantityControls({
  quantity,
  onDecrease,
  onIncrease,
  ...props
}: Props) {
  return (
    <View {...props} style={[styles.container, props.style]}>
      <Pressable style={styles.button} onPress={onDecrease}>
        <Minus size={20} color={THEME.COLORS.purple} />
      </Pressable>

      <Text style={styles.count}>{quantity}</Text>

      <Pressable style={styles.button} onPress={onIncrease}>
        <Plus size={20} color={THEME.COLORS.purple} />
      </Pressable>
    </View>
  )
}
