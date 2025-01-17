import { Heading } from '@components/Heading'
import { Text } from '@components/Text'
import { useSearch } from '@hooks/search'
import { THEME } from '@styles/theme'
import { MagnifyingGlass } from 'phosphor-react-native'
import { useEffect } from 'react'
import { Image, Pressable, View } from 'react-native'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated'

import { styles } from './styles'

const decorationImage = require('@assets/decoration.png')

export function Header() {
  const { onToggleSearch } = useSearch()

  const containerTranslate = useSharedValue(72)

  const containerTranslateAnimation = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: containerTranslate.value,
      },
    ],
  }))

  useEffect(() => {
    containerTranslate.value = withDelay(250, withTiming(0, { duration: 1000 }))
  }, [containerTranslate])

  return (
    <Animated.View style={[styles.container, containerTranslateAnimation]}>
      <Heading size="md" color="white">
        Encontre o café perfeito para qualquer hora do dia
      </Heading>

      <Pressable style={{ position: 'relative' }} onPress={onToggleSearch}>
        <View style={styles.input}>
          <Text color="gray400">Pesquisar</Text>
        </View>

        <MagnifyingGlass
          color={THEME.COLORS.gray400}
          size={20}
          style={styles.searchIcon}
        />
      </Pressable>

      <Image source={decorationImage} style={styles.decoration} />
    </Animated.View>
  )
}
