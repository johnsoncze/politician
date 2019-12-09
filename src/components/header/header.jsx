import React from 'react'
import { Link } from 'react-router-dom'
import { useRouteMatch } from "react-router-dom";
import SearchBar from '../searchBar/searchBar'

function Header() {
  const match = useRouteMatch('/')
  return (
    <header className='header-wrapper'>
      <Link to="/">Home</Link>
      <Link to="/o-projektu">O Projektu</Link>
      <Link to="/pro-media">Pro Média</Link>
      {!match.isExact && <SearchBar wrapperClassname='searchBar-wrapper-header'/>}
    </header>
  )
}

export default Header;
