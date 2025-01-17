import { BackButton } from '@components/BackButton'
import { Heading } from '@components/Heading'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { styles } from './styles'

export function TopBar() {
  const { top } = useSafeAreaInsets()

  return (
    <View style={{ paddingTop: top }}>
      <View style={styles.container}>
        <BackButton color="gray" />

        <Heading size="sm" color="gray200">
          Carrinho
        </Heading>

        <View style={styles.offset} />
      </View>
    </View>
  )
}
