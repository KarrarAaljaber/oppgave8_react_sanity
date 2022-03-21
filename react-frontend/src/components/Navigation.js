import { NavLink } from 'react-router-dom'

export default function Navigation() {
  return (
    <header className="Navigation">
      <h1>
        Oppgave 8      
      </h1>
      <nav>
        
        <ul>
          <li>
            <NavLink to="">Home</NavLink>
          </li>
          <li>
            <NavLink to="movies">Movies</NavLink>
          </li>
          <li>
            <NavLink to="actors">Actors</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}