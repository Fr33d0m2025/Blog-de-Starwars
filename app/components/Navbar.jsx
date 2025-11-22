
import { useContext } from 'react'
import { FavoritesContext } from '../store/FavoritesContext'
import { Link, useLocation } from 'react-router'

export default function Navbar() {
  const { favorites, deleteFavorite } = useContext(FavoritesContext)
  const location = useLocation()

  return (
    <nav className='nav px-5 py-3 bg-dark-subtle sticky-top'>
      {location.pathname !== '/' && (
        <Link to='/' className='btn btn-primary'>
          Home
        </Link>
      )}
      <div className='btn-group ms-auto'>
        <button
          type='button'
          className='btn btn-primary dropdown-toggle'
          data-bs-toggle='dropdown'
          aria-expanded='false'
        >
          Favorites
        </button>
        <ul className='dropdown-menu p-1'>
          {favorites && favorites.map(e => (

            <div key={e.uid}
              className='input-group d-flex flex-nowrap'>

              <Link to={`${e.category}/${e.uid}`}
                className='btn btn-outline-secondary text-nowrap w-100' > {e.name}</Link>
              <button className='btn btn-outline-danger'
                onClick={() => deleteFavorite(e.uid, e.name)}>X</button>

            </div>

          ))}
        </ul>
      </div>
    </nav>
  )
}