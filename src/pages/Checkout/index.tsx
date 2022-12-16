import {
  ArrowLeft,
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'

import { CheckoutContainer } from './styles'

import { NavLink } from 'react-router-dom'
import { CheckoutCoffeeCard } from '../../components/CheckoutCoffeeCard'

export function Checkout() {
  return (
    <CheckoutContainer>
      <div className="form-with-title">
        <span className="title">Complete seu pedido</span>

        <div className="form">
          <div className="form-header">
            <span className="header-title">
              <span className="header-icon">
                <MapPinLine size={22} />
              </span>
              Endereço de Entrega
            </span>
            <span className="header-complement">
              Informe o endereço onde deseja receber seu pedido
            </span>
          </div>

          <div className="form-data">
            <input className="input-cep" placeholder="CEP" />
            <input placeholder="RUA" />
            <div className="form-info-1">
              <input className="input-number" placeholder="Número" />
              <input className="input-complement" placeholder="Complemento" />
            </div>

            <div className="form-info-2">
              <input className="input-district" placeholder="Bairro" />
              <input className="input-city" placeholder="Cidade" />
              <input className="input-state" placeholder="UF" />
            </div>
          </div>
        </div>

        <div className="form-payment">
          <div className="form-payment-header">
            <span className="header-title">
              <span className="payment-header-icon">
                <CurrencyDollar size={22} />
              </span>
              Pagamento
            </span>
            <span className="header-complement">
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </span>
          </div>

          <div className="payment-method">
            <span>
              <CreditCard size={16} />
              CARTÃO DE CRÉDITO
            </span>
            <span>
              <Bank size={16} />
              CARTÃO DE DÉBITO
            </span>
            <span>
              <Money size={16} />
              DINHEIRO
            </span>
          </div>
        </div>

        <button className="back-button">
          <NavLink className="nav-link" to="/" title="Voltar">
            <ArrowLeft size={16} />
            Voltar
          </NavLink>
        </button>
      </div>

      <div className="selected-coffees">
        <span>Cafés selecionados</span>
        <div className="selected-coffes-card">
          <div className="coffees-container">
            <CheckoutCoffeeCard />
            <CheckoutCoffeeCard />
          </div>

          <div className="confirm">
            <div className="confirm-details">
              <div className="total-items">
                <span>Total de itens</span>
                <span>R$ 29,70</span>
              </div>
              <div className="delivery">
                <span>Entrega</span>
                <span>R$ 3,50</span>
              </div>
              <div className="total">
                <span>Total</span>
                <span>R$ 33,20</span>
              </div>
            </div>
            <button>Confirmar Pedido</button>
          </div>
        </div>
      </div>
    </CheckoutContainer>
  )
}
