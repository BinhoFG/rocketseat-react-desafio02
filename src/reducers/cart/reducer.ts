import { produce } from 'immer'
import { ActionTypes } from './actions'

export interface Item {
  image: string
  tags: string[]
  name: string
  description: string
  qtd: number
}

interface CartState {
  cart: Item[]
}

export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_ITEM_TO_CART:
      return produce(state, (draft) => {
        draft.cart.push(action.payload.newItem)
      })
    case ActionTypes.REMOVE_ITEM_FROM_CART: {
      const itemIndex = state.cart.findIndex((item) => {
        return item.name === action.payload.itemName
      })

      return produce(state, (draft) => {
        draft.cart.splice(itemIndex, 1)
      })
    }
    default:
      return state
  }
}
