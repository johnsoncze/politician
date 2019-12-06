import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <header className='header-wrapper'>
      <Link to="/">Home</Link>
      <Link to="/o-projektu">O Projektu</Link>
      <Link to="/pro-media">Pro Média</Link>
			<Link to="/search">Search v menu</Link>
    </header>
  )
}

export default Header;