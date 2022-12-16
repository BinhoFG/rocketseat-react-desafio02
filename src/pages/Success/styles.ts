import styled from 'styled-components'

export const SuccessContainer = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: 3rem 7.5rem 0 7.5rem;

  .confirmed {
    display: flex;
    flex-direction: column;

    .title {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;

      h1 {
        font-family: 'Baloo 2', sans-serif;
        font-size: 2rem;
        font-weight: 800;
        color: ${(props) => props.theme['yellow-dark']};
      }

      span {
        font-size: 1.25rem;
        color: ${(props) => props.theme['base-subtitle']};
      }
    }

    .info {
      position: relative;
      display: flex;
      flex-direction: column;
      padding: 2.5rem;
      margin-top: 2.5rem;
      gap: 2rem;
      background-color: ${(props) => props.theme.background};
      // border: 1px solid ${(props) => props.theme.purple};
      border-radius: 6px 36px 6px 36px;

      &:before {
        border-radius: 6px 36px 6px 36px;
        content: '';
        background-image: linear-gradient(
          -65deg,
          ${(props) => props.theme.purple} 0%,
          ${(props) => props.theme.yellow} 100%
        );
        top: -1px;
        left: -1px;
        bottom: -1px;
        right: -1px;
        position: absolute;
        z-index: -1;
      }

      div {
        display: flex;

        .icon {
          display: flex;
          padding: 0.5rem;
          height: 2rem;
          border-radius: 50%;
          margin-right: 0.75rem;

          svg {
            color: ${(props) => props.theme.background};
          }
        }

        .content {
          display: flex;
          flex-direction: column;

          .strong {
            font-weight: bold;
          }
        }
      }

      .street .icon {
        background: ${(props) => props.theme.purple};
      }

      .time .icon {
        background: ${(props) => props.theme.yellow};
      }

      .payment .icon {
        background: ${(props) => props.theme['yellow-dark']};
      }
    }
  }

  img {
    width: 30.75rem;
    height: 18.31rem;
  }
`
