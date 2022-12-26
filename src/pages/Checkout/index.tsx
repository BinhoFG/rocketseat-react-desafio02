import {
  ArrowLeft,
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'

import { CheckoutContainer, PaymentInput, PaymentMethod } from './styles'

import { NavLink, useNavigate } from 'react-router-dom'
import { CheckoutCoffeeCard } from '../../components/CheckoutCoffeeCard'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { priceFormatter } from '../../utils/formatter'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const paymentMethods = ['credit', 'debit', 'cash'] as const

const deliveryFormSchema = z.object({
  cep: z.string().length(8),
  street: z.string().min(3).max(50),
  number: z.string().min(1).max(10),
  complement: z.string().min(0).max(50).optional(),
  district: z.string().min(3).max(50),
  city: z.string().min(3).max(50),
  state: z.string().length(2),
  paymentMethod: z.enum(paymentMethods),
})

type DeliveryFormType = z.infer<typeof deliveryFormSchema>

export function Checkout() {
  const navigate = useNavigate()

  const { items, confirmOrder } = useContext(CartContext)
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DeliveryFormType>({
    resolver: zodResolver(deliveryFormSchema),
  })

  function handleConfirmOrder(data: DeliveryFormType, e: any) {
    e.preventDefault()

    confirmOrder(data)

    navigate('/success')

    reset()
  }

  const totalItems = items.reduce((acc, item) => {
    return (acc += item.qtd)
  }, 0)

  const deliveryPrice = items.length ? 3.5 : 0

  const totalItemsPrice = totalItems * 9.9
  const totalPrice = totalItemsPrice + deliveryPrice

  const totalItemsPriceFormatted = priceFormatter.format(totalItemsPrice)
  const deliveryPriceFormatted = priceFormatter.format(deliveryPrice)
  const totalPriceFormatted = priceFormatter.format(totalPrice)

  return (
    <CheckoutContainer>
      <div className="form-with-title">
        <span className="title">Complete seu pedido</span>

        <form id="deliveryInfo" onSubmit={handleSubmit(handleConfirmOrder)}>
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
              {errors.cep && (
                <span className="input-error">*CEP precisa ter 8 dígitos</span>
              )}
              <input {...register('street')} placeholder="RUA" />
              {errors.street && (
                <span className="input-error">
                  *Rua precisa ter entre 3 e 50 caracteres
                </span>
              )}
              <div className="form-info-1">
                <input
                  {...register('number')}
                  className="input-number"
                  placeholder="Número"
                />
                <input
                  {...register('complement')}
                  className="input-complement"
                  placeholder="Complemento"
                />
              </div>
              {errors.number && (
                <span className="input-error">
                  *Número precisa ter entre 1 e 10 dígitos
                </span>
              )}
              {errors.complement && (
                <span className="input-error">
                  *Complemento precisa ter até 50 caracteres
                </span>
              )}

              <div className="form-info-2">
                <input
                  {...register('district')}
                  className="input-district"
                  placeholder="Bairro"
                />
                <input
                  {...register('city')}
                  className="input-city"
                  placeholder="Cidade"
                />
                <input
                  {...register('state')}
                  className="input-state"
                  placeholder="UF"
                />
              </div>
              {errors.district && (
                <span className="input-error">
                  *Bairro precisa ter entre 3 e 50 caracteres
                </span>
              )}
              {errors.city && (
                <span className="input-error">
                  *Cidade precisa ter entre 3 e 50 caracteres
                </span>
              )}
              {errors.state && (
                <span className="input-error">
                  *UF precisa ter entre 2 caracteres
                </span>
              )}
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

            <Controller
              control={control}
              name="paymentMethod"
              render={({ field }) => {
                return (
                  <PaymentMethod
                    onValueChange={field.onChange}
                    value={field.value}
                  >
                    <PaymentInput value="credit">
                      <CreditCard size={16} />
                      CARTÃO DE CRÉDITO
                    </PaymentInput>
                    <PaymentInput value="debit">
                      <Bank size={16} />
                      CARTÃO DE DÉBITO
                    </PaymentInput>
                    <PaymentInput value="cash">
                      <Money size={16} />
                      DINHEIRO
                    </PaymentInput>
                  </PaymentMethod>
                )
              }}
            />
            {errors.paymentMethod && (
              <span className="input-error">
                *Escolha um método de pagamento
              </span>
            )}
          </div>
        </form>

        <div className="back-button-container">
          <NavLink to="/" title="Voltar">
            <button className="back-button">
              <ArrowLeft size={16} />
              Voltar
            </button>
          </NavLink>
        </div>
      </div>

      <div className="selected-coffees">
        <span>Cafés selecionados</span>
        <div className="selected-coffes-card">
          <div className="coffees-container">
            {items.length ? (
              items.map((item) => {
                return (
                  <CheckoutCoffeeCard
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    image={item.image}
                    qtd={item.qtd}
                  />
                )
              })
            ) : (
              <span className="noItemsAddedToCart">Nenhum item adicionado</span>
            )}
          </div>

          <div className="confirm">
            <div className="confirm-details">
              <div className="total-items">
                <span>Total de itens</span>
                <span>{totalItemsPriceFormatted}</span>
              </div>
              <div className="delivery">
                <span>Entrega</span>
                <span>{deliveryPriceFormatted}</span>
              </div>
              <div className="total">
                <span>Total</span>
                <span>{totalPriceFormatted}</span>
              </div>
            </div>
            <button form="deliveryInfo" type="submit">
              Confirmar Pedido
            </button>
          </div>
        </div>
      </div>
    </CheckoutContainer>
  )
}
