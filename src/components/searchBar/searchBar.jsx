import React, { useCallback } from 'react'
import {createStructuredSelector} from 'reselect'
import { connect } from 'react-redux'
import { setSearchQuery, search } from '../../redux/actions'
import { getSearchQuery } from '../../redux/selectors'
import classnames from 'classnames'

function SearchBar({ setSearchQuery, search, query, wrapperClassname }) {
  const onSubmit = useCallback((e) => {
    e.preventDefault()
    search()
  }, [search])
  const onChange = useCallback((event) => {
    setSearchQuery(event.target.value)
  }, [setSearchQuery])
  return (
    <form onSubmit={onSubmit}>
      <div className={classnames('searchBar-wrapper', wrapperClassname)}>
        <input className='searchBar-input' onChange={onChange} value={query}></input>
        <button type='submit' className='searchBar-button'>Hledat Politika/čku</button>
      </div>
    </form>
  );
}

const mapStateToProps = createStructuredSelector({
  query: getSearchQuery,
})

export default connect(mapStateToProps, { setSearchQuery, search })(SearchBar);
