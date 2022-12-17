import { Item } from './reducer'

export enum ActionTypes {
  ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART',
  REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART',
  CHANGE_ITEM_QTD = 'CHANGE_ITEM_QTD',
}

export function addNewItemToCartAction(newItem: Item) {
  return {
    type: ActionTypes.ADD_ITEM_TO_CART,
    payload: {
      newItem,
    },
  }
}

export function removeItemFromCartAction(itemName: string) {
  return {
    type: ActionTypes.REMOVE_ITEM_FROM_CART,
    payload: {
      itemName,
    },
  }
}

export function ChangeItemQtdAction() {
  return {
    type: ActionTypes.CHANGE_ITEM_QTD,
  }
}
