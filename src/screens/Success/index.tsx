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

import { Illustration } from './Components/Illustration'
import { styles } from './styles'

export function Success() {
  const navigator = useNavigation()

  const scale = useSharedValue(0.75)
  const translateY = useSharedValue(72)
  const translateX = useSharedValue(-300)
  const opacity = useSharedValue(0)

  const fadeTranslateAnimation = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateY: translateY.value }],
  }))

  const scaleTranslateAnimation = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateX: translateX.value }],
  }))

  useEffect(() => {
    translateX.value = withTiming(0, { duration: 1500 })

    translateY.value = withTiming(0, { duration: 1000 })
    opacity.value = withTiming(1, { duration: 1000 })
    scale.value = withTiming(1, { duration: 1000 })
  }, [opacity, scale, translateX, translateY])

  return (
    <View style={styles.container}>
      <Animated.View style={[scaleTranslateAnimation]}>
        <Illustration />
      </Animated.View>

      <Animated.View style={[styles.inner, fadeTranslateAnimation]}>
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
      </Animated.View>
    </View>
  )
}
