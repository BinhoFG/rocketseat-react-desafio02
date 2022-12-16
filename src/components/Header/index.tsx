import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import logo from '../../assets/Logo.svg'
import { HeaderContainer } from './styles'

export function Header() {
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
          </NavLink>
        </span>
      </div>
    </HeaderContainer>
  )
}
