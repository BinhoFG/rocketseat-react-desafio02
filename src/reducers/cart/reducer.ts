import { produce } from 'immer'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { v4 as uuidv4 } from 'uuid'
import { DeliveryInfoType } from '../../contexts/CartContext'

import { ActionTypes } from './action'

export interface Item {
  id: string
  image: string
  name: string
  qtd: number
}

interface CartState {
  items: Item[]
  deliveryInfo: DeliveryInfoType
}

export function CartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_ITEM_TO_CART:
      return produce(state, (draft) => {
        const newItem = action.payload.newItem
        newItem.id = uuidv4()
        draft.items.push(newItem)

        toast.success(`${newItem.name} adicionado`, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1500,
        })
      })
    case ActionTypes.UPDATE_ITEM_QTD: {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.itemId,
      )

      return produce(state, (draft) => {
        action.payload.type === 'increase'
          ? (draft.items[itemIndex].qtd += 1)
          : (draft.items[itemIndex].qtd -= 1)
      })
    }
    case ActionTypes.REMOVE_ITEM_FROM_CART: {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.itemId,
      )

      toast.warn(`Item removido`, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1500,
      })

      return produce(state, (draft) => {
        draft.items.splice(itemIndex, 1)
      })
    }
    case ActionTypes.CONFIRM_ORDER:
      return produce(state, (draft) => {
        draft.deliveryInfo = action.payload.deliveryInfo
      })
    default:
      return state
  }
}
