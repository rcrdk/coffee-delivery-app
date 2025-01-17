import type { CartItem } from '@dtos/cart'
import { storageCartGet, storageCartSave } from '@storage/storageCart'
import { type QuantityModes, setQuantityMode } from '@utils/set-quantity-mode'
import {
  createContext,
  type ReactNode,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { Alert } from 'react-native'

interface CartContextType {
  cartCounter: number
  cartItems: CartItem[]
  cartTotalPrice: number
  cartItemAdded: CartItem | null
  onAddToCart: (data: CartItem) => void
  onChangeCartItemQuantity: (mode: QuantityModes, productId: string) => void
  onRemoveProduct: (cartItemId: string) => void
  onConfirmOrder: VoidFunction
  onResetCartItemAdded: VoidFunction
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [itemAdded, setItemAdded] = useState<CartItem | null>(null)
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  async function getSavedCartItems() {
    const { products } = await storageCartGet()
    setCartItems(products)
  }

  function onAddToCart(data: CartItem) {
    // eslint-disable-next-line prettier/prettier
    const productOfSameSizeExists = cartItems.find((item) => item.product.id === data.product.id && item.size === data.size)

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

    setItemAdded(data)
  }

  function onChangeCartItemQuantity(mode: QuantityModes, productId: string) {
    setCartItems((prev) => {
      return prev.map((item) => {
        if (item.id === productId) {
          return {
            ...item,
            quantity: setQuantityMode(mode, item.quantity),
          }
        }

        return item
      })
    })
  }

  function onRemoveProduct(productId: string) {
    Alert.alert(
      'Remover produto',
      'Confirme a remoção do produto do carrinho',
      [
        { style: 'cancel', text: 'Cancelar' },
        {
          style: 'destructive',
          text: 'Remover',
          onPress: async () => {
            setCartItems((prev) => {
              return prev.filter((item) => item.id !== productId)
            })
          },
        },
      ],
    )
  }

  function onConfirmOrder() {
    setCartItems([])
  }

  function onResetCartItemAdded() {
    setItemAdded(null)
  }

  const cartTotalPrice = useMemo(() => {
    return cartItems.reduce((previous, current) => {
      return previous + current.product.price * current.quantity
    }, 0)
  }, [cartItems])

  const cartCounter = useMemo(() => {
    return cartItems.reduce((previous, current) => {
      return previous + current.quantity
    }, 0)
  }, [cartItems])

  useEffect(() => {
    getSavedCartItems()
  }, [])

  useEffect(() => {
    ;(async () => await storageCartSave(cartItems))()
  }, [cartItems])

  return (
    <CartContext.Provider
      value={{
        cartCounter,
        cartItems,
        cartTotalPrice,
        cartItemAdded: itemAdded,
        onAddToCart,
        onChangeCartItemQuantity,
        onRemoveProduct,
        onConfirmOrder,
        onResetCartItemAdded,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
