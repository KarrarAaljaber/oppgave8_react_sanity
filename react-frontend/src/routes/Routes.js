
import Home from '../pages/Home'
import MoviesPage from '../pages/MoviesPage'
import ActorPage from '../pages/ActorPage'
import ActorsPage from '../pages/ActorsPage'
import Navigation from '../components/Navigation'
import { Routes, Route } from 'react-router-dom'


export default function PageRoutes() {
    return (
      <>
        <Navigation />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="movies" element={<MoviesPage/>} />
          <Route path="actors">
            <Route index element={<ActorsPage />} />
            <Route path=":slug" element={<ActorPage />} />
          </Route>
        </Routes>
      </>
    )
  }