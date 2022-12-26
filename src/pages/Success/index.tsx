import { SuccessContainer } from './styles'

import SuccessBike from '../../assets/successBike.png'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Success() {
  const { deliveryInfo } = useContext(CartContext)

  const formattedPaymentMethod =
    deliveryInfo.paymentMethod === 'credit'
      ? 'Cartão de crédito'
      : deliveryInfo.paymentMethod === 'debit'
      ? 'Cartão de débito'
      : 'Dinheiro'

  return (
    <SuccessContainer>
      <div className="confirmed">
        <div className="title">
          <h1>Uhu! Pedido Confirmado</h1>
          <span>Agora é só aguardar que logo o café chegará até você</span>
        </div>
        <div className="info">
          <div className="street">
            <span className="icon">
              <MapPin size={16} weight="fill" />
            </span>
            <div className="content">
              <span>
                Entrega em{' '}
                <span className="strong">{`${deliveryInfo.street}, ${deliveryInfo.number}`}</span>
              </span>
              <span>{`${deliveryInfo.district} - ${deliveryInfo.city}, ${deliveryInfo.state}`}</span>
            </div>
          </div>

          <div className="time">
            <span className="icon">
              <Timer size={16} weight="fill" />
            </span>

            <div className="content">
              <span>Previsão de entrega</span>
              <span className="strong">20 min - 30 min</span>
            </div>
          </div>

          <div className="payment">
            <span className="icon">
              <CurrencyDollar size={16} weight="fill" />
            </span>

            <div className="content">
              <span>Pagamento na entrega</span>
              <span className="strong">{formattedPaymentMethod}</span>
            </div>
          </div>
        </div>
      </div>

      <img src={SuccessBike} alt="" />
    </SuccessContainer>
  )
}
