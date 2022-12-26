import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'

import logo from '../../assets/Logo.svg'
import { CartContext } from '../../contexts/CartContext'
import { HeaderContainer } from './styles'

export function Header() {
  const { items } = useContext(CartContext)

  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <div className="actions">
        <span className="location">
          <MapPin size={22} weight="fill" />
          Porto Alegre, RS
        </span>
        <span className="cart">
          <NavLink to="/checkout" title="Meu carrinho">
            <ShoppingCart size={22} weight="fill" />
            <span className="cartItemsCounter">{items.length}</span>
          </NavLink>
        </span>
      </div>
    </HeaderContainer>
  )
}
