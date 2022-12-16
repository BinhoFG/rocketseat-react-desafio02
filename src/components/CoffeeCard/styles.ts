import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme['base-card']};
  width: 16rem;
  border-radius: 6px 36px 6px 36px;

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -1.25rem;
  }

  .tags {
    display: flex;
    gap: 0.25rem;
    margin-top: 0.75rem;

    span {
      color: ${(props) => props.theme['yellow-dark']};
      background-color: ${(props) => props.theme['yellow-light']};
      font-size: 0.625rem;
      font-weight: bold;
      padding: 0.25rem 0.5rem;
      border-radius: 100px;
    }
  }

  .title {
    margin-top: 1rem;
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  .description {
    text-align: center;
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-label']};
    margin: 0.5rem 1.25rem 0 1.25rem;
  }

  .buy {
    display: flex;
    justify-content: space-between;
    margin-top: 2.06rem;
    width: 13.5rem;
    margin-bottom: 1.25rem;

    .price {
      color: ${(props) => props.theme['base-text']};
      font-size: 0.875rem;

      .price-value {
        font-family: 'Baloo 2', sans-serif;
        font-size: 1.6rem;
        font-weight: 800;
      }
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

      .cart {
        display: flex;
        color: ${(props) => props.theme['base-card']};
        background: ${(props) => props.theme['purple-dark']};
        padding: 0.5rem;
        border-radius: 6px;
        cursor: pointer;

        &:hover {
          background: ${(props) => props.theme.purple};
        }
      }
    }
  }
`
