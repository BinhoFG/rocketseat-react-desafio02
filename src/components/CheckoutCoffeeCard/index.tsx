import { CheckoutCoffeeCardContainer } from './styles'

import ExpressoTradicional from '../../assets/coffee/expresso-tradicional.png'
import { Trash } from 'phosphor-react'

export function CheckoutCoffeeCard() {
  return (
    <CheckoutCoffeeCardContainer>
      <img src={ExpressoTradicional} alt="" />
      <div className="details">
        <span className="coffee-name">Expresso Tradicional</span>
        <div className="actions">
          <div className="counter">
            <button>—</button>
            <span>1</span>
            <button>+</button>
          </div>
          <span className="remove">
            <Trash size={16} />
            REMOVER
          </span>
        </div>
      </div>
      <span className="price">R$ 9,90</span>
    </CheckoutCoffeeCardContainer>
  )
}
