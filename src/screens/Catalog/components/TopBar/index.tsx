import { CartButton } from '@components/CartButton'
import { Text } from '@components/Text'
import { THEME } from '@styles/theme'
import { MapPin } from 'phosphor-react-native'
import { View } from 'react-native'

import { styles } from './styles'

export function TopBar() {
  return (
    <View style={styles.container}>
      <View style={styles.location}>
        <MapPin color={THEME.COLORS.purple} weight="fill" size={20} />
        <Text size="sm" color="gray900">
          Timbó, SC
        </Text>
      </View>

      <CartButton />
    </View>
  )
}
