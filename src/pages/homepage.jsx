import React from 'react'
import SearchBar from '../components/searchBar/searchBar'

function Homepage() {
  return (
    <div>
      <h1 className='homepage-logo'>Našipolitici.cz</h1>
      <div className='homepage-perex'>Mapujeme stav korupce v ČR a aktivně přispíváme k jejímu omezování. Hledejte političky a politiky.</div>
      <SearchBar/>
    </div>
  )
}

export default Homepage;