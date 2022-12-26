import { DeliveryInfoType } from './../../contexts/CartContext'
import { AddItemToCartType, UpdateItemQtd } from '../../contexts/CartContext'

export enum ActionTypes {
  ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART',
  UPDATE_ITEM_QTD = 'UPDATE_ITEM_QTD',
  REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART',
  CONFIRM_ORDER = 'CONFIRM_ORDER',
}

export function addItemToCartAction(newItem: AddItemToCartType) {
  return {
    type: ActionTypes.ADD_ITEM_TO_CART,
    payload: {
      newItem,
    },
  }
}

export function updateItemQtdAction({ itemId, type }: UpdateItemQtd) {
  return {
    type: ActionTypes.UPDATE_ITEM_QTD,
    payload: {
      itemId,
      type,
    },
  }
}

export function removeItemFromCartAction(itemId: string) {
  return {
    type: ActionTypes.REMOVE_ITEM_FROM_CART,
    payload: {
      itemId,
    },
  }
}

export function confirmOrderAction(data: DeliveryInfoType) {
  return {
    type: ActionTypes.CONFIRM_ORDER,
    payload: {
      data,
    },
  }
}
