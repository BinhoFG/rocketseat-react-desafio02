import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { HomeContainer } from './styles'
import IntroImage from '../../assets/IntroImage.png'
import { CoffeeCard } from '../../components/CoffeeCard'

const coffeeList = [
  {
    image: 'expressoTradicional',
    tags: ['TRADICIONAL'],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
  },
  {
    image: 'expressoAmericano',
    tags: ['TRADICIONAL'],
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
  },
  {
    image: 'expressoCremoso',
    tags: ['TRADICIONAL'],
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
  },
  {
    image: 'expressoGelado',
    tags: ['TRADICIONAL', 'GELADO'],
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
  },
  {
    image: 'cafeComLeite',
    tags: ['TRADICIONAL', 'COM LEITE'],
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
  },
  {
    image: 'latte',
    tags: ['TRADICIONAL', 'COM LEITE'],
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
  },
  {
    image: 'capuccino',
    tags: ['TRADICIONAL', 'COM LEITE'],
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
  },
  {
    image: 'macchiato',
    tags: ['TRADICIONAL', 'COM LEITE'],
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
  },
  {
    image: 'mocaccino',
    tags: ['TRADICIONAL', 'COM LEITE'],
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
  },
  {
    image: 'chocolateQuente',
    tags: ['ESPECIAL', 'COM LEITE'],
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
  },
  {
    image: 'cubano',
    tags: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
  },
  {
    image: 'havaiano',
    tags: ['ESPECIAL'],
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
  },
  {
    image: 'arabe',
    tags: ['ESPECIAL'],
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
  },
  {
    image: 'irlandes',
    tags: ['ESPECIAL', 'ALCOÓLICO'],
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
  },
]

export function Home() {
  return (
    <HomeContainer>
      <div className="intro">
        <div className="intro-content">
          <div className="title">
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </div>

          <div className="items">
            <div className="items-left">
              <span className="first-span">
                <span className="second-span shoppingCart">
                  <ShoppingCart size={16} weight="fill" />
                </span>
                Compra simples e segura
              </span>

              <span className="first-span">
                <span className="second-span timer">
                  <Timer size={16} weight="fill" />
                </span>
                Entrega rápida e rastreada
              </span>
            </div>

            <div className="items-right">
              <span className="first-span">
                <span className="second-span package">
                  <Package size={16} weight="fill" />
                </span>
                Embalagem mantém o café intacto
              </span>

              <span className="first-span">
                <span className="second-span coffee">
                  <Coffee size={16} weight="fill" />
                </span>
                O café chega fresquinho até você
              </span>
            </div>
          </div>
        </div>

        <img src={IntroImage} alt="Café" />
      </div>

      <div className="coffeeList">
        <h2>Nossos cafés</h2>
        <div className="list">
          {coffeeList.map((coffee) => {
            return (
              <CoffeeCard
                key={coffee.name}
                image={coffee.image}
                tags={coffee.tags}
                name={coffee.name}
                description={coffee.description}
              />
            )
          })}
        </div>
      </div>
    </HomeContainer>
  )
}
