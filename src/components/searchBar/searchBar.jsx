import React from 'react'
import { connect } from 'react-redux'
import {setSearchQUery, search} from '../../redux/actions'
import {getSearchQuery} from '../../redux/selectors'
import Result from '../result/result'

function SearchBar({setSearchQUery, search}) {
  return (
    <div>
      <div className="searchBar-wrapper">
        <input className='searchBar-input' onChange={(event) => setSearchQUery(event.target.value)}></input>
        <button className='searchBar-button' onClick={search}>Hledat Politika/čku</button>
      </div>
      <Result />
    </div>
  );
}

const mapStateToProps = state => ({
	query: getSearchQuery(state),
})

export default connect(mapStateToProps, {setSearchQUery, search})(SearchBar);
