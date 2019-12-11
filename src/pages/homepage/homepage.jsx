import React from 'react'
import SearchBar from '../../components/searchBar/searchBar'
import Result from '../../components/result/result'
import styles from './homepage.module.scss'

// TODO loading pri vyhledavani
function Homepage() {
  return (
    <div className={styles.homepage}>
      <div className={styles.wrapper}>
        <div className={styles.intro}>
          <h1 className={styles.title}>Našipolitici.cz</h1>
          <div className={styles.perex}>Mapujeme stav korupce v ČR a aktivně přispíváme k jejímu omezování. Hledejte političky a politiky.</div>
        </div>
        <SearchBar/>
        <Result />
      </div>
    </div>
  )
}

export default Homepage;
