import { Button } from '@components/Button'
import { Heading } from '@components/Heading'
import { Text } from '@components/Text'
import { useSearch } from '@hooks/search'
import { useEffect } from 'react'
import { View } from 'react-native'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

import { Illustration } from './Illustration'
import { styles } from './styles'

type Props = {
  onDismiss: VoidFunction
}

export function Empty({ onDismiss }: Props) {
  const { searchQuery } = useSearch()

  const scale = useSharedValue(0.75)
  const translate = useSharedValue(72)
  const opacity = useSharedValue(0)

  const fadeTranslateAnimation = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateY: translate.value }],
  }))

  const scaleTranslateAnimation = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ scale: scale.value }],
  }))

  useEffect(() => {
    translate.value = withTiming(0, { duration: 1000 })
    opacity.value = withTiming(1, { duration: 1000 })
    scale.value = withTiming(1, { duration: 1000 })
  }, [opacity, scale, translate])

  return (
    <View style={styles.searchMessage}>
      <Animated.View style={[scaleTranslateAnimation]}>
        <Illustration />
      </Animated.View>

      <Animated.View style={[styles.empty, fadeTranslateAnimation]}>
        <Heading size="lg" color="yellowDark" center>
          Nenhum café encontrado
        </Heading>

        <Text color="gray400" center>
          Não encontramos cafés com o termo "{searchQuery}". Tente outros
          termos.
        </Text>

        <Button
          label="Fechar"
          type="purple"
          style={styles.searchButton}
          onPress={onDismiss}
        />
      </Animated.View>
    </View>
  )
}
