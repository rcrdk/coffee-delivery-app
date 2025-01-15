import type { CartItem } from '@dtos/cart'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { CART_STORAGE } from '@storage/config'

export async function storageCartGet() {
  const storage = await AsyncStorage.getItem(CART_STORAGE)
  const cartItems: { products: CartItem[] } = storage
    ? JSON.parse(storage)
    : { products: [] }

  return cartItems
}

export async function storageCartSave(item: CartItem) {
  await AsyncStorage.setItem(CART_STORAGE, JSON.stringify(item))
}

export async function storageCartRemove() {
  await AsyncStorage.removeItem(CART_STORAGE)
}
