import { useMemo } from 'react'
import PropTypes from 'prop-types'

import { getHeroesByPublisher } from '../helpers'
import { HeroCard } from './HeroCard'
export const HeroList = ({ publisher }) => {

  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])

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
HeroList.propTypes = {
  publisher: PropTypes.string
}
