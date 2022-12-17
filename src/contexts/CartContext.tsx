import { createContext, ReactNode, useReducer } from 'react'
import { cartReducer, Item } from '../reducers/cart/reducer'
import {
  addNewItemToCartAction,
  removeItemFromCartAction,
  ChangeItemQtdAction,
} from '../reducers/cart/actions'

interface CartContextType {
  cart: Item[]
  addNewItemToCart: (item: Item) => void
  removeItemFromCart: (itemName: string) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(cartReducer, { cart: [] })

  const { cart } = cartState

  function addNewItemToCart(item: Item) {
    return dispatch(addNewItemToCartAction(item))
  }

  function removeItemFromCart(itemName: string) {
    return dispatch(removeItemFromCartAction(itemName))
  }

  return (
    <CartContext.Provider
      value={{ cart, addNewItemToCart, removeItemFromCart }}
    >
      {children}
    </CartContext.Provider>
  )
}
