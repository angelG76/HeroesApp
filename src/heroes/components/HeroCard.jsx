import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'
export const HeroCard = ({ id,
  superhero,
  // publisher,
  alter_ego,
  first_appearance,
  characters
}) => {
  const heroImageUrl = `/assets/heroes/${id}.jpg`

  const CharactersByHero = ({ characters, alter_ego }) => {
    if (characters === alter_ego) {
      return (<></>)
    }

    return <p className="mb-3 font-normal text-gray-70">{characters}</p>
  }
  return (

    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow animate__animated animate__fadeIn">
      <div>
        <img className="rounded-t-lg" src={heroImageUrl} alt="" />
      </div>
      <div className="p-5">
        <div>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{superhero}</h5>
        </div>
        <p className="mb-3 font-normal text-gray-70">{alter_ego}</p>

        <CharactersByHero characters={characters} alter_ego={alter_ego} />

        <p className="mb-3 font-normal text-gray-70"> <small className="text-gray-500">{first_appearance}</small></p>
        <Link to={`/hero/${id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Mas Informacion
          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </Link>
      </div>
    </div>


  )
}
HeroCard.propTypes = {
  id: PropTypes.string,
  superhero: PropTypes.string,
  publisher: PropTypes.string,
  alter_ego: PropTypes.string,
  first_appearance: PropTypes.string,
  characters: PropTypes.string
}