import { ShoppingCart } from 'phosphor-react'

import { CoffeeCardContainer } from './styles'

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

interface CoffeeCardProps {
  image: string
  tags: string[]
  name: string
  description: string
}

export function CoffeeCard({
  image,
  tags,
  name,
  description,
}: CoffeeCardProps) {
  return (
    <CoffeeCardContainer className="card">
      <img src={coffeeList[image]} alt="" />
      <div className="tags">
        {tags.map((tag) => {
          return <span key={tag}>{tag}</span>
        })}
      </div>
      <span className="title">{name}</span>
      <span className="description">{description}</span>
      <div className="buy">
        <div className="price">
          <span>R$ </span>
          <span className="price-value">9,90</span>
        </div>
        <div className="actions">
          <div className="counter">
            <button>—</button>
            <span>1</span>
            <button>+</button>
          </div>
          <span className="cart">
            <ShoppingCart size={22} weight="fill" />
          </span>
        </div>
      </div>
    </CoffeeCardContainer>
  )
}
