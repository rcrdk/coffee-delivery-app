// import type { NewOrderFormData } from '../schemas/cart'
import type { Product } from './product'

export interface CartItem {
  id: string
  product: Product
  quantity: number
}

export interface Order {
  id: string
  // data: NewOrderFormData
  products: CartItem[]
}
