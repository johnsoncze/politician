import React from 'react'
import { connect } from 'react-redux'
import {setSearchQuery, search} from '../../redux/actions'
import {getSearchQuery} from '../../redux/selectors'
import Result from '../result/result'

function SearchBar({setSearchQuery, search}) {
  return (
    <div>
      <div className="searchBar-wrapper">
        <input className='searchBar-input' onChange={(event) => setSearchQuery(event.target.value)}></input>
        <button className='searchBar-button' onClick={search}>Hledat Politika/čku</button>
      </div>
      <Result />
    </div>
  );
}

const mapStateToProps = state => ({
	query: getSearchQuery(state),
})

export default connect(mapStateToProps, {setSearchQuery, search})(SearchBar);
