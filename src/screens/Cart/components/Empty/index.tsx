import { Button } from '@components/Button'
import { Heading } from '@components/Heading'
import { Text } from '@components/Text'
import { useNavigation } from '@react-navigation/native'
import { useEffect } from 'react'
import { View } from 'react-native'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

import { Illustration } from './Illustration'
import { styles } from './styles'

export function Empty() {
  const navigator = useNavigation()

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
    <View style={styles.container}>
      <Animated.View style={[scaleTranslateAnimation]}>
        <Illustration />
      </Animated.View>

      <Animated.View style={[styles.inner, fadeTranslateAnimation]}>
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
      </Animated.View>
    </View>
  )
}
