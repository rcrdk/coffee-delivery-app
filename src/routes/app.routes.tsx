import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Cart } from '@screens/Cart'
import { Catalog } from '@screens/Catalog'
import { Product } from '@screens/Product'
import { Success } from '@screens/Success'

const Stack = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="catalog" component={Catalog} />
      <Stack.Screen name="product" component={Product} />
      <Stack.Screen name="cart" component={Cart} />
      <Stack.Screen name="success" component={Success} />
    </Stack.Navigator>
  )
}
