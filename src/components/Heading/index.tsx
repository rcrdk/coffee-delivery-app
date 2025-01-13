import { THEME } from '@styles/theme'
import type { ComponentProps } from 'react'
import { Text } from 'react-native'

import { styles } from './styles'

type Props = ComponentProps<typeof Text> & {
  size?: 'xl' | 'lg' | 'md' | 'sm' | 'xs'
  color?: keyof typeof THEME.COLORS
}

export function Heading({ size = 'xl', color = 'gray200', ...props }: Props) {
  return (
    <Text
      style={[
        styles.container,
        styles[size],
        { color: THEME.COLORS[color] },
        props.style,
      ]}
      {...props}
    />
  )
}
