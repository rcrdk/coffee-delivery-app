import { useRoute } from '@react-navigation/native'
import { Text, View } from 'react-native'

type RouteParams = {
  id: string
}

export function Product() {
  const { params } = useRoute()
  const { id: productId } = params as RouteParams

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{productId}</Text>
    </View>
  )
}
