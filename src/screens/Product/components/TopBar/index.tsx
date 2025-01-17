import { BackButton } from '@components/BackButton'
import { CartButton } from '@components/CartButton'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { styles } from './styles'

export function TopBar() {
  const { top } = useSafeAreaInsets()

  return (
    <View style={{ paddingTop: top }}>
      <View style={styles.container}>
        <BackButton color="white" />
        <CartButton />
      </View>
    </View>
  )
}
