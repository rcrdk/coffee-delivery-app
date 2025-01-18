import { Heading } from '@components/Heading'
import { Text } from '@components/Text'
import { useSearch } from '@hooks/search'
import { THEME } from '@styles/theme'
import { MagnifyingGlass } from 'phosphor-react-native'
import { useEffect, useState } from 'react'
import { Image, Pressable, TextInput, View } from 'react-native'
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withTiming,
} from 'react-native-reanimated'

import { styles } from './styles'

export function Header() {
  const [query, setQuery] = useState('')

  const { onChangeSearchQuery } = useSearch()

  const shake = useSharedValue(0)
  const containerTranslate = useSharedValue(72)

  const containerTranslateAnimation = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: containerTranslate.value,
      },
    ],
  }))

  function setShakeAnimation() {
    shake.value = withSequence(
      withTiming(3, { duration: 400, easing: Easing.bounce }),
      withTiming(0, { duration: 400, easing: Easing.bounce }),
    )
  }

  const shakeStyleAnimated = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(
            shake.value,
            [0, 0.5, 1, 1.5, 2, 2.5, 3],
            [0, -15, 0, 15, 0, -15, 0],
          ),
        },
      ],
    }
  })

  useEffect(() => {
    containerTranslate.value = withDelay(250, withTiming(0, { duration: 1000 }))
  }, [containerTranslate])

  return (
    <Animated.View style={[styles.container, containerTranslateAnimation]}>
      <Heading size="md" color="white">
        Encontre o café perfeito para qualquer hora do dia
      </Heading>

      <Animated.View style={[shakeStyleAnimated, { position: 'relative' }]}>
        <TextInput
          placeholder="Pesquisar"
          style={styles.input}
          placeholderTextColor={THEME.COLORS.gray400}
          onChangeText={setQuery}
          value={query}
          returnKeyType="search"
          onSubmitEditing={() => {
            onChangeSearchQuery(query)
            if (!query) setShakeAnimation()
          }}
        />

        <MagnifyingGlass
          color={THEME.COLORS.gray400}
          size={20}
          style={styles.searchIcon}
        />
      </Animated.View>

      <Image
        source={require('@assets/decoration.png')}
        style={styles.decoration}
      />
    </Animated.View>
  )
}
