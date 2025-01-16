import { Button } from '@components/Button'
import { Heading } from '@components/Heading'
import { Text } from '@components/Text'
import { useNavigation } from '@react-navigation/native'
import { View } from 'react-native'

import { Illustration } from './Components/Illustration'
import { styles } from './styles'

export function Success() {
  const navigator = useNavigation()

  return (
    <View style={styles.container}>
      <Illustration />

      <Heading size="lg" color="yellowDark" style={styles.title} center>
        Uhu! Pedido confirmado
      </Heading>

      <Text size="sm" color="gray200" center>
        Agora é só aguardar que logo o café chegará até você!
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
