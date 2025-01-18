import { useNavigation } from '@react-navigation/native'
import { THEME } from '@styles/theme'
import { ArrowLeft } from 'phosphor-react-native'
import { Pressable } from 'react-native'

import { styles } from './styles'

type Props = {
  color: 'white' | 'gray'
}

export function BackButton({ color }: Props) {
  const navigator = useNavigation()

  const arrowColor = THEME.COLORS[color === 'white' ? 'white' : 'gray100']

  return (
    <Pressable style={styles.button} onPress={() => navigator.goBack()}>
      <ArrowLeft color={arrowColor} size={22} />
    </Pressable>
  )
}
