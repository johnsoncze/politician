import React, { useCallback } from 'react'
import { connect } from 'react-redux'
import { setSearchQuery, search } from '../../redux/actions'
import { getSearchQuery } from '../../redux/selectors'

function SearchBar({ setSearchQuery, search, query }) {
  const onSubmit = useCallback((e) => {
    e.preventDefault()
    search()
  }, [search])
  const onChange = useCallback((event) => {
    setSearchQuery(event.target.value)
  }, [setSearchQuery])
  return (
    <form onSubmit={onSubmit}>
      <div className="searchBar-wrapper">
        <input className='searchBar-input' onChange={onChange} value={query}></input>
        <button type='submit' className='searchBar-button'>Hledat Politika/čku</button>
      </div>
    </form>
  );
}

const mapStateToProps = state => ({
  query: getSearchQuery(state),
})

export default connect(mapStateToProps, { setSearchQuery, search })(SearchBar);
