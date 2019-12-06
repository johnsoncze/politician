import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import {getSearchResults} from '../../redux/selectors'

function ResultRow({result}) {
	return <Link to="/detail">{result.name} {result.surname}</Link>
}

function Result({results}) {
  return (
    <div className='result-list'>{results.map(result => <ResultRow key={result.id} result={result} />)}</div>
  )
}

const mapStateToProps = state => ({
	results: getSearchResults(state),
})

export default connect(mapStateToProps)(Result);
