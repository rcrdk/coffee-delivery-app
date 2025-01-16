import decorationImage from '@assets/decoration.png'
import { Heading } from '@components/Heading'
import { THEME } from '@styles/theme'
import { MagnifyingGlass } from 'phosphor-react-native'
import { useEffect } from 'react'
import { Image, TextInput, View } from 'react-native'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated'

import { styles } from './styles'

export function Header() {
  const containerTranslate = useSharedValue(48)

  const containerTrnaslateAnimation = useAnimatedStyle(() => ({
    transform: [{ translateY: containerTranslate.value }],
  }))

  useEffect(() => {
    containerTranslate.value = withDelay(250, withTiming(0, { duration: 750 }))
  }, [containerTranslate])

  return (
    <Animated.View style={[styles.container, containerTrnaslateAnimation]}>
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

      <Image source={decorationImage} style={styles.decoration} />
    </Animated.View>
  )
}
