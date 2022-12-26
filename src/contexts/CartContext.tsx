import { createContext, ReactNode, useReducer } from 'react'
import {
  addItemToCartAction,
  confirmOrderAction,
  removeItemFromCartAction,
  updateItemQtdAction,
} from '../reducers/cart/action'
import { CartReducer, Item } from '../reducers/cart/reducer'

export interface UpdateItemQtd {
  itemId: string
  type: string
}

export interface AddItemToCartType {
  image: string
  name: string
  qtd: number
}

export interface DeliveryInfoType {
  complement?: string | undefined
  number: string
  cep: string
  street: string
  district: string
  city: string
  state: string
  paymentMethod: 'credit' | 'debit' | 'cash'
}

interface CartContextType {
  items: Item[]
  deliveryInfo: DeliveryInfoType
  addItemToCart: (newItem: AddItemToCartType) => void
  updateItemQtd: (data: UpdateItemQtd) => void
  removeItemFromCart: (itemId: string) => void
  confirmOrder: (data: DeliveryInfoType) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(CartReducer, {
    items: [],
    deliveryInfo: {} as DeliveryInfoType,
  })

  function addItemToCart(newItem: AddItemToCartType) {
    dispatch(addItemToCartAction(newItem))
  }

  function updateItemQtd(data: UpdateItemQtd) {
    dispatch(updateItemQtdAction(data))
  }

  function removeItemFromCart(itemId: string) {
    dispatch(removeItemFromCartAction(itemId))
  }

  function confirmOrder(data: DeliveryInfoType) {
    dispatch(confirmOrderAction(data))
  }

  const { items, deliveryInfo } = cartState

  return (
    <CartContext.Provider
      value={{
        items,
        deliveryInfo,
        addItemToCart,
        updateItemQtd,
        removeItemFromCart,
        confirmOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
