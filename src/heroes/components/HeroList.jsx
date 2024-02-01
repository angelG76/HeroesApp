import { getHeroesByPublisher } from '../helpers'
import { HeroCard } from './HeroCard'
export const HeroList = ({ publisher }) => {
  const heroes = getHeroesByPublisher(publisher)
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 py-5">
      {
        heroes.map(hero => (
          <HeroCard
            key={hero.id}
            {...hero}
          />
        ))
      }
    </div>

  )
}
