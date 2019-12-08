import React from 'react'
import SearchBar from '../../components/searchBar/searchBar'
import styles from './homepage.module.scss'

// TODO loading pri vyhledavani
function Homepage() {
  return (
    <div className={styles.homepage}>
      <h1>Našipolitici.cz</h1>
      <div className={styles.perex}>Mapujeme stav korupce v ČR a aktivně přispíváme k jejímu omezování. Hledejte političky a politiky.</div>
      <SearchBar/>
    </div>
  )
}

export default Homepage;
