import { BackButton } from '@components/BackButton'
import { CartButton } from '@components/CartButton'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { styles } from './styles'

export function TopBar() {
  return (
    <SafeAreaView edges={['top']}>
      <View style={styles.container}>
        <BackButton color="white" />
        <CartButton />
      </View>
    </SafeAreaView>
  )
}
