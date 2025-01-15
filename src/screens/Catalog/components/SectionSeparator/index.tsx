import { View } from 'react-native'

import { styles } from './styles'

type Props = {
  type: 'section' | 'title' | 'item'
}

export function SectionSeparator({ type }: Props) {
  function getSpaceByType() {
    switch (type) {
      case 'section':
        return styles.spaceLarge
      case 'title':
        return styles.spaceSmall
      case 'item':
        return styles.spaceMedium
    }
  }

  return <View style={getSpaceByType()} />
}
