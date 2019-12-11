import React from 'react'
import {createStructuredSelector} from 'reselect'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import {getSearchResults, isSearchLoading} from '../../redux/selectors'
import LoadingBar from '../loadingBar/loadingBar'
import styles from './result.module.scss'

function ResultRow({result}) {
	return (<div>
		<img src={result.photoUrl} alt={result.lastName}/>
		<div>{result.firstName} {result.lastName}</div>
		<div>{result.birthYear}</div>
		<div>{result.currentParty}</div>
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
          <div className={styles.list}>{results.map(result => <ResultRow key={result.id} result={result} />)}</div>
        </div>}
		</React.Fragment>
  )
}

const mapStateToProps = createStructuredSelector({
  results: getSearchResults,
  loading: isSearchLoading,
})

export default connect(mapStateToProps)(Result);
