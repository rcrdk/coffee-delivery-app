import type { CartItem } from '@dtos/cart'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { CART_STORAGE } from '@storage/config'

type StorageProducts = {
  products: CartItem[]
}

export async function storageCartGet() {
  const storage = await AsyncStorage.getItem(CART_STORAGE)
  const cartItems: StorageProducts = storage
    ? JSON.parse(storage)
    : { products: [] }

  return cartItems
}

export async function storageCartSave(cartProducts: CartItem[]) {
  await AsyncStorage.setItem(
    CART_STORAGE,
    JSON.stringify({ products: cartProducts }),
  )

  await AsyncStorage.getItem(CART_STORAGE)
}
