import { Heading } from '@components/Heading'
import { THEME } from '@styles/theme'
import { MagnifyingGlass } from 'phosphor-react-native'
import { TextInput, View } from 'react-native'

import { styles } from './styles'

export function Header() {
  return (
    <View style={styles.container}>
      <Heading size="md" color="white">
        Encontre o café perfeito para qualquer hora do dia
      </Heading>

      <View style={{ position: 'relative' }}>
        <TextInput
          placeholder="Pesquisar"
          placeholderTextColor={THEME.COLORS.gray400}
          style={styles.input}
        />

        <MagnifyingGlass
          color={THEME.COLORS.gray400}
          size={20}
          style={styles.searchIcon}
        />
      </View>
    </View>
  )
}
