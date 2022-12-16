import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 7.5rem;
  gap: 5.75rem;

  .intro {
    display: flex;
    gap: 3.5rem;

    .intro-content {
      display: flex;
      flex-direction: column;
      gap: 4.13rem;

      .title {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        h1 {
          font-family: 'Baloo 2', sans-serif;
          font-size: 3rem;
          font-weight: 800;
          color: ${(props) => props.theme['base-title']};
        }

        p {
          font-size: 1.25rem;
          color: ${(props) => props.theme['base-subtitle']};
        }
      }

      .items {
        display: flex;
        color: ${(props) => props.theme['base-text']};
        gap: 2.5rem;
        align-items: center;

        .items-left,
        .items-right {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;

          .first-span {
            display: flex;
            align-items: center;

            .second-span {
              display: flex;
              padding: 0.5rem;
              color: ${(props) => props.theme.background};
              border-radius: 50%;
              margin-right: 0.75rem;
            }

            .shoppingCart {
              background: ${(props) => props.theme['yellow-dark']};
            }

            .timer {
              background: ${(props) => props.theme.yellow};
            }

            .package {
              background: ${(props) => props.theme['base-text']};
            }

            .coffee {
              background: ${(props) => props.theme.purple};
            }
          }
        }
      }
    }
  }

  .coffeeList {
    display: flex;
    flex-direction: column;
    gap: 3.38rem;
    margin-bottom: 5rem;

    h2 {
      font-family: 'Baloo 2', sans-serif;
      font-size: 2rem;
      font-weight: 800;
      color: ${(props) => props.theme['base-subtitle']};
      margin-top: 2rem;
    }

    .list {
      display: flex;
      flex-wrap: wrap;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      row-gap: 2.5rem;
    }
  }
`
