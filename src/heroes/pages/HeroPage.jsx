import { useParams, Navigate, useNavigate } from 'react-router-dom'
import { useMemo } from 'react'

import { getHeroeById } from '../helpers'
export const HeroPage = () => {
  const { id } = useParams()

  const navigate = useNavigate()

  const hero = useMemo(() => getHeroeById(id), [id])

  const onNavigateBack = () => {
    navigate(-1)
  }

  if (!hero) {
    return <Navigate to="/marvel" />
  }
  return (
    <>
      <div>

        <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-2xl">
          <img className="w-full object-contain rounded-t-lg h-96 md:h-auto md:w-64 md:rounded-none md:rounded-s-lg animate__animated animate__fadeInLeft" src={`/assets/heroes/${hero.id}.jpg`} alt={hero.superhero} />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{hero.superhero}</h5>
            <ul className="mb-3 font-normal text-gray-700 ">
              <li><b>Alter ego: </b>{hero.alter_ego}</li>
              <li><b>Publisher: </b>{hero.publisher}</li>
              <li><b>First appearance: </b>{hero.first_appearance}</li>
            </ul>
            <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>Characters</h5>
            <p className="mb-3 font-normal text-gray-700  ">{hero.characters}</p>

            <button
              className='btn-alternative'
              onClick={onNavigateBack}>
              Regresar
            </button>
          </div>
        </div>

      </div>
    </>
  )
}
