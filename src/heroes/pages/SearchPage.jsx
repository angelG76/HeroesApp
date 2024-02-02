import { useNavigate, useLocation } from "react-router-dom"
import queryString from 'query-string'

import { HeroCard } from "../components/HeroCard"
import { useForm } from "../../hooks/useForm"
import { getHeroesByName } from "../helpers"
export const SearchPage = () => {

  const navigate = useNavigate()

  const location = useLocation()

  const { q = '' } = queryString.parse(location.search)

  const heroes = getHeroesByName(q)

  const showSearch = (q.length === 0)
  const showError = (q.length) > 0 && (heroes.length === 0)

  const { searchText, onInputChange } = useForm({
    searchText: q
  })

  const onSearchSubmit = (event) => {
    event.preventDefault()
    // if (searchText.trim().length <= 1) return

    navigate(`?q=${searchText}`)

  }

  return (
    <>
      <h1>SearchPage</h1>
      <hr />
      <div className="flex flex-col sm:flex-row mt-4 gap-4">
        <form onSubmit={onSearchSubmit} className="w-full sm:w-5/12">
          <label className="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search a hero"
              name="searchText"
              value={searchText}
              onChange={onInputChange}
              autoComplete="off"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              required />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 "
            >Search</button>
          </div>
        </form>
        <div className="w-full sm:w-7/12">
          {/* {
            (q === '') ? <p className="alert-default" role="alert">Search a hero</p> : (heroes.length === 0) && <p className="alert-danger" role="alert">No hero with <b>{q}</b></p>
          } */}
          <div className="alert-default animate__animated animate__fadeIn" role="alert" style={{ display: showSearch ? '' : 'none' }}>
            <span className="font-medium">Search</span> a hero
          </div>

          <div className="alert-danger animate__animated animate__fadeIn" role="alert" style={{ display: showError ? '' : 'none' }}>
            <span className="font-medium">{q}</span>  not found
          </div>

          {
            heroes.map(hero => (
              <HeroCard key={hero.id} {...hero} />
            ))
          }

          {/* <HeroCard /> */}


        </div>


      </div>



    </>
  )
}
