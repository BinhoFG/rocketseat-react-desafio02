import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  display: flex;
  justify-content: space-between;
  margin: 0 7.5rem;

  .form-with-title {
    display: flex;
    flex-direction: column;

    .title {
      font-family: 'Baloo 2', sans-serif;
      font-weight: bold;
      font-size: 1.13rem;
      color: ${(props) => props.theme['base-subtitle']};
      margin-bottom: 0.9375rem;
    }

    .form {
      display: flex;
      flex-direction: column;
      width: 40rem;
      padding: 2.5rem;
      background-color: ${(props) => props.theme['base-card']};
      border-radius: 6px;

      .form-header {
        display: flex;
        flex-direction: column;
        margin-bottom: 2rem;

        .header-title {
          display: flex;
          align-items: center;
          margin-bottom: 0.125rem;
          color: ${(props) => props.theme['base-subtitle']};
          font-size: 1rem;

          .header-icon {
            display: flex;
            color: ${(props) => props.theme['yellow-dark']};
            margin-right: 0.5rem;
          }
        }

        .header-complement {
          margin-left: 1.88rem;
          color: ${(props) => props.theme['base-text']};
          font-size: 0.875rem;
        }
      }

      .form-data {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        input {
          border-radius: 4px;
          border: 1px solid ${(props) => props.theme['base-button']};
          background-color: ${(props) => props.theme['base-input']};
          font-size: 0.875rem;
          height: 2.63rem;
          padding: 0.75rem;
          outline: 0;

          &::placeholder {
            color: ${(props) => props.theme['base-label']};
            font-size: 0.875rem;
          }

          &:focus {
            border: 1px solid ${(props) => props.theme['yellow-dark']};
          }
        }

        .input-cep {
          width: 12.5rem;
        }

        .form-info-1 {
          position: relative;
          display: flex;
          justify-content: space-between;
          align-items: center;

          .input-number {
            width: 12.5rem;
          }

          .input-complement {
            width: 21.75rem;
          }

          &::after {
            position: absolute;
            margin-left: calc(35rem - 3rem - 0.75rem);
            content: 'Opcional';
            font-size: 0.75rem;
            font-style: italic;
            color: ${(props) => props.theme['base-label']};
          }
        }

        .form-info-2 {
          display: flex;
          justify-content: space-between;

          .input-district {
            width: 12.5rem;
          }

          .input-city {
            width: 17.25rem;
          }

          .input-state {
            width: 3.75rem;
          }
        }
      }
    }

    .form-payment {
      display: flex;
      flex-direction: column;
      margin-top: 0.75rem;
      margin-bottom: 3rem;
      background-color: ${(props) => props.theme['base-card']};
      border-radius: 6px;
      padding: 2.5rem;
      width: 40rem;

      .form-payment-header {
        display: flex;
        flex-direction: column;
        margin-bottom: 2rem;

        .header-title {
          display: flex;
          align-items: center;
          margin-bottom: 0.125rem;
          color: ${(props) => props.theme['base-subtitle']};
          font-size: 1rem;

          .payment-header-icon {
            display: flex;
            color: ${(props) => props.theme.purple};
            margin-right: 0.5rem;
          }
        }

        .header-complement {
          margin-left: 1.88rem;
          color: ${(props) => props.theme['base-text']};
          font-size: 0.875rem;
        }
      }

      .payment-method {
        display: flex;
        justify-content: space-between;
        align-items: center;

        span {
          display: flex;
          align-items: center;
          padding: 1rem 0;
          background-color: ${(props) => props.theme['base-button']};
          color: ${(props) => props.theme['base-text']};
          font-size: 0.75rem;
          border-radius: 6px;
          width: 11.17rem;
          border: 1px solid transparent;
          cursor: pointer;

          &:hover {
            background-color: ${(props) => props.theme['base-hover']};
          }

          svg {
            margin-right: 0.75rem;
            margin-left: 1rem;
            color: ${(props) => props.theme.purple};
          }
        }
      }
    }

    .back-button {
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-size: 0.875rem;
      padding: 0.75rem 0.5rem;
      color: ${(props) => props.theme.white};
      background-color: ${(props) => props.theme.yellow};
      border-radius: 6px;
      border: 0;
      width: 7rem;
      margin-bottom: 5rem;
      cursor: pointer;

      &:hover {
        background: ${(props) => props.theme['yellow-dark']};
      }

      .nav-link {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: ${(props) => props.theme.white};
      }

      svg {
        margin-right: 0.5rem;
      }
    }
  }

  .selected-coffees {
    display: flex;
    flex-direction: column;
    width: 28rem;

    > span {
      font-family: 'Baloo 2', sans-serif;
      font-weight: bold;
      font-size: 1.13rem;
      color: ${(props) => props.theme['base-subtitle']};
      margin-bottom: 0.9375rem;
    }

    .selected-coffes-card {
      border-radius: 6px 44px 6px 44px;
      background: ${(props) => props.theme['base-card']};

      .coffees-container {
        width: 23rem;
        padding: 2.5rem 2.5rem 0 2.5rem;

        div:not(.coffees-container) + div {
          padding-top: 1.5rem;
        }
      }

      .confirm {
        display: flex;
        flex-direction: column;
        padding: 0 2.5rem 2.5rem 2.5rem;

        .confirm-details {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          padding: 1.5rem 0;
          font-size: 0.875rem;
          color: ${(props) => props.theme['base-text']};

          div {
            display: flex;
            justify-content: space-between;
            width: 23rem;
          }

          .total {
            font-size: 1.25rem;
            font-weight: bold;
            color: ${(props) => props.theme['base-subtitle']};
          }
        }

        > button {
          font-size: 0.875rem;
          font-weight: bold;
          color: ${(props) => props.theme.white};
          background: ${(props) => props.theme.yellow};
          border: 0;
          border-radius: 6px;
          height: 2.88rem;
          cursor: pointer;

          &:hover {
            background: ${(props) => props.theme['yellow-dark']};
          }
        }
      }
    }
  }
`
