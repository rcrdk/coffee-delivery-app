import type { CartItem } from '@dtos/cart'
import { storageCartGet } from '@storage/storageCart'
import { createContext, type ReactNode, useEffect, useState } from 'react'

interface CartContextType {
  cartCounter: number
  cartItems: CartItem[]
  onAddToCart: (data: CartItem) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartCounter, setCartCounter] = useState(0)
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  async function getSavedCartItems() {
    const { products } = await storageCartGet()
    setCartItems(products)
    // get product quantity
  }

  function onAddToCart(data: CartItem) {
    const productOfSameSizeExists = cartItems.find(
      (item) => item.product.id === data.product.id && item.size === data.size,
    )

    if (productOfSameSizeExists) {
      setCartItems((prev) =>
        prev.map((item) => {
          if (item.product.id === data.product.id && item.size === data.size) {
            return {
              ...item,
              quantity: item.quantity + data.quantity,
            }
          }

          return item
        }),
      )
    } else {
      setCartItems((prev) => [...prev, data])
    }

    setCartCounter((prev) => prev + data.quantity)
  }

  useEffect(() => {
    getSavedCartItems()
  }, [])

  return (
    <CartContext.Provider
      value={{
        cartCounter,
        cartItems,
        onAddToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
