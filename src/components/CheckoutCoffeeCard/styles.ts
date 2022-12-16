import styled from 'styled-components'

export const CheckoutCoffeeCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 23rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};

  img {
    width: 4rem;
    height: 4rem;
  }

  .details {
    display: flex;
    flex-direction: column;
    margin-left: 1.25rem;

    .coffee-name {
      color: ${(props) => props.theme['base-subtitle']};
      margin-bottom: 0.5rem;
    }

    .actions {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .counter {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 4.5rem;
        color: ${(props) => props.theme['base-title']};
        background-color: ${(props) => props.theme['base-button']};
        padding: 0.5rem;
        border-radius: 6px;
        margin-right: 0.5rem;

        button {
          color: ${(props) => props.theme.purple};
          border: 0;
          background: transparent;
          cursor: pointer;

          &:hover {
            color: ${(props) => props.theme['purple-dark']};
          }
        }
      }

      .remove {
        font-size: 0.75rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 5.69rem;
        color: ${(props) => props.theme['base-text']};
        background-color: ${(props) => props.theme['base-button']};
        padding: 0.5rem;
        border-radius: 6px;
        cursor: pointer;

        &:hover {
          background-color: ${(props) => props.theme['base-hover']};
        }

        svg {
          color: ${(props) => props.theme.purple};
        }
      }
    }
  }

  .price {
    font-weight: bold;
    color: ${(props) => props.theme['base-text']};
  }
`
