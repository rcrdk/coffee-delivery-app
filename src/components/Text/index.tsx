import { THEME } from '@styles/theme'
import type { ComponentProps } from 'react'
import { Text as RNText } from 'react-native'

import { styles } from './styles'

type Props = ComponentProps<typeof RNText> & {
  size?: 'lg' | 'md' | 'sm' | 'xs'
  color?: keyof typeof THEME.COLORS
  bold?: boolean
  center?: boolean
}

export function Text({
  size = 'md',
  color = 'gray200',
  bold = false,
  center = false,
  ...props
}: Props) {
  return (
    <RNText
      {...props}
      style={[
        styles.container,
        styles[size],
        styles[bold ? 'bold' : 'regular'],
        { color: THEME.COLORS[color] },
        { textAlign: center ? 'center' : 'left' },
        props.style,
      ]}
    />
  )
}
