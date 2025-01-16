import { Button } from '@components/Button'
import { Heading } from '@components/Heading'
import { Text } from '@components/Text'
import { useNavigation } from '@react-navigation/native'
import { View } from 'react-native'

import { styles } from './styles'

export function Empty() {
  const navigator = useNavigation()

  return (
    <View style={styles.container}>
      <Heading size="lg" color="yellowDark" style={styles.title} center>
        Nenhum café adicionado
      </Heading>

      <Text size="sm" color="gray200" center>
        Confira agora nossa seleção de cafés
      </Text>

      <Button
        label="Ir para a home"
        type="purple"
        style={styles.button}
        onPress={() => navigator.navigate('catalog')}
      />
    </View>
  )
}
