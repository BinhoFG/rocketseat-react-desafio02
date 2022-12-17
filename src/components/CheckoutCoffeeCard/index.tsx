import { CheckoutCoffeeCardContainer } from './styles'

import { Trash } from 'phosphor-react'

import expressoTradicional from '../../assets/coffee/expresso-tradicional.png'
import expressoAmericano from '../../assets/coffee/expresso-americano.png'
import expressoCremoso from '../../assets/coffee/expresso-cremoso.png'
import expressoGelado from '../../assets/coffee/expresso-gelado.png'
import cafeComLeite from '../../assets/coffee/cafe-com-leite.png'
import latte from '../../assets/coffee/latte.png'
import capuccino from '../../assets/coffee/capuccino.png'
import macchiato from '../../assets/coffee/macchiato.png'
import mocaccino from '../../assets/coffee/mocaccino.png'
import chocolateQuente from '../../assets/coffee/chocolate-quente.png'
import cubano from '../../assets/coffee/cubano.png'
import havaiano from '../../assets/coffee/havaiano.png'
import arabe from '../../assets/coffee/arabe.png'
import irlandes from '../../assets/coffee/irlandes.png'
import { useContext, useState } from 'react'
import { CartContext } from '../../contexts/CartContext'

const coffeeList: any = {
  expressoTradicional,
  expressoAmericano,
  expressoCremoso,
  expressoGelado,
  cafeComLeite,
  latte,
  capuccino,
  macchiato,
  mocaccino,
  chocolateQuente,
  cubano,
  havaiano,
  arabe,
  irlandes,
}

interface CheckoutCoffeeCardProps {
  image: string
  name: string
  qtd: number
}

export function CheckoutCoffeeCard({
  image,
  name,
  qtd,
}: CheckoutCoffeeCardProps) {
  const { removeItemFromCart } = useContext(CartContext)

  const [itemQtd, setItemQtd] = useState(qtd)
  qtd = itemQtd

  function handleRemoveQtd() {
    if (itemQtd > 1) {
      setItemQtd((state) => state - 1)
    }
  }

  function handleAddQtd() {
    setItemQtd((state) => state + 1)
  }

  function handleRemoveItem() {
    removeItemFromCart(name)
  }

  return (
    <CheckoutCoffeeCardContainer>
      <img src={coffeeList[image]} alt="" />
      <div className="details">
        <span className="coffee-name">{name}</span>
        <div className="actions">
          <div className="counter">
            <button onClick={handleRemoveQtd}>—</button>
            <span>{qtd}</span>
            <button onClick={handleAddQtd}>+</button>
          </div>
          <span onClick={handleRemoveItem} className="remove">
            <Trash size={16} />
            REMOVER
          </span>
        </div>
      </div>
      <span className="price">R$ 9,90</span>
    </CheckoutCoffeeCardContainer>
  )
}
