import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import {getSearchResults, isSearchLoading} from '../../redux/selectors'
import LoadingBar from '../loadingBar/loadingBar'

function ResultRow({result}) {
	return (<div>
		<img src={result.photoUrl} alt={result.lastName}/>
		<div>{result.firstName} {result.lastName}</div>
		<div>{result.birthYear}</div>
		<Link to={`/detail/${result.id}`}>Zobrazit profil</Link>
	</div>)
}

function EmptyState({result}) {
	return (<div>¯\_(ツ)_/¯ Tak toho tu nemame ¯\_(ツ)_/¯</div>)
}

function Result({results, loading}) {
// TODO vyresit mnozne/jednotne cislo
	return (
		<React.Fragment>
      {loading && <LoadingBar />}
      {!loading && results && results.length === 0 && <EmptyState />}
      {!loading && results && !!results.length &&
        <div>
          <div>Nalezeni {results.length} politici</div>
          <div className='result-list'>{results.map(result => <ResultRow key={result.id} result={result} />)}</div>
        </div>}
		</React.Fragment>
  )
}

const mapStateToProps = state => ({
  results: getSearchResults(state),
  loading: isSearchLoading(state),
})

export default connect(mapStateToProps)(Result);
