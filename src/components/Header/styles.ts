import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 7.5rem;

  .actions {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;

    .location {
      display: flex;
      align-items: center;
      color: ${(props) => props.theme['purple-dark']};
      background-color: ${(props) => props.theme['purple-light']};
      padding: 0.5rem;
      border-radius: 6px;

      svg {
        color: ${(props) => props.theme.purple};
        margin-right: 0.25rem;
      }
    }

    .cart {
      color: ${(props) => props.theme['yellow-dark']};
      background-color: ${(props) => props.theme['yellow-light']};
      padding: 0.5rem;
      border-radius: 6px;
      height: 2.38rem;
      position: relative;

      .cartItemsCounter {
        position: absolute;

        background: ${(props) => props.theme['yellow-dark']};
        color: ${(props) => props.theme.white};

        display: flex;
        border-radius: 50%;
        align-items: center;
        justify-content: center;

        width: 20px;
        height: 20px;
        top: -7px;
        right: -7px;

        font-size: 0.875rem;
      }

      svg {
        color: ${(props) => props.theme['yellow-dark']};
      }
    }
  }
`
