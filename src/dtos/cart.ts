import type { Product } from './product'

export type CartItemSize = '114ml' | '140ml' | '227ml'

export type CartItem = {
  id: string
  product: Product
  size: CartItemSize
  quantity: number
}
