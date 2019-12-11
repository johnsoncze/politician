import React from 'react'
import SearchBar from '../../components/searchBar/searchBar'
import Result from '../../components/result/result'
import logo from '../../assets/images/logo.png'
import styles from './homepage.module.scss'

// TODO loading pri vyhledavani
function Homepage() {
  return (
    <div className={styles.homepage}>
      <div className={styles.wrapper}>
        <div className={styles.intro}>
          <img src={logo} alt={logo} className={styles.logo}/>
          <div className={styles.perex}>Mapujeme stav korupce v ČR a aktivně přispíváme k jejímu omezování. Hledejte političky a politiky.</div>
        </div>
        <SearchBar/>
        <Result />
      </div>
    </div>
  )
}

export default Homepage;
