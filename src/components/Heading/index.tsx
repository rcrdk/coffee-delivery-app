import { THEME } from '@styles/theme'
import type { ComponentProps } from 'react'
import { Text } from 'react-native'

import { styles } from './styles'

type Props = ComponentProps<typeof Text> & {
  size?: 'xl' | 'lg' | 'md' | 'sm' | 'xs'
  color?: keyof typeof THEME.COLORS
  center?: boolean
}

export function Heading({
  size = 'xl',
  color = 'gray200',
  center = false,
  ...props
}: Props) {
  return (
    <Text
      {...props}
      style={[
        styles.container,
        styles[size],
        { color: THEME.COLORS[color] },
        { textAlign: center ? 'center' : 'left' },
        props.style,
      ]}
    />
  )
}
