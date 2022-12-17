import {
  ArrowLeft,
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/yup'
import * as zod from 'zod'

import { CheckoutContainer } from './styles'

import { NavLink } from 'react-router-dom'
import { CheckoutCoffeeCard } from '../../components/CheckoutCoffeeCard'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

const newOrderValidationSchema = zod.object({
  cep: zod.string().min(1, 'Ao menos 1 caractere'),
  rua: zod.string().min(1),
  numero: zod.string().min(1),
  complemento: zod.string().optional(),
  bairro: zod.string(),
  cidade: zod.string(),
  uf: zod.string(),
})

export function Checkout() {
  const { cart } = useContext(CartContext)

  const { register } = useForm({
    resolver: zodResolver(newOrderValidationSchema),
  })

  const totalCartQtd = cart.reduce((total, obj) => {
    return (total += Number(obj.qtd))
  }, 0)
  const totalItemsPrice =
    (cart.length * (9.9 * totalCartQtd)).toFixed(2) || '0,00'
  const totalPrice = Number(totalItemsPrice) + 3.5 || '3,50'

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
            <input
              {...register('cep')}
              className="input-cep"
              placeholder="CEP"
            />
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
            {cart.map((item) => {
              return (
                <CheckoutCoffeeCard
                  key={item.name}
                  name={item.name}
                  image={item.image}
                  qtd={item.qtd}
                />
              )
            })}
          </div>

          <div className="confirm">
            <div className="confirm-details">
              <div className="total-items">
                <span>Total de itens</span>
                <span>R$ {totalItemsPrice}</span>
              </div>
              <div className="delivery">
                <span>Entrega</span>
                <span>R$ 3,50</span>
              </div>
              <div className="total">
                <span>Total</span>
                <span>R$ {totalPrice}</span>
              </div>
            </div>
            <button>Confirmar Pedido</button>
          </div>
        </div>
      </div>
    </CheckoutContainer>
  )
}
