import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import {getSearchResults} from '../../redux/selectors'

function ResultRow({result}) {
	return (<div>
		<img src={result.photoUrl} alt={result.lastName}/>
		<div>{result.firstName} {result.lastName}</div>
		<div>{result.birthYear}</div>
		<Link to={`/detail/${result.id}`}>Zobrazit profil</Link>
	</div>)
}

function Result({results}) {
// TODO vyresit mnozne/jednotne cislo
	return (
		<React.Fragment>
			<div>Nalezeni {results.length} politici</div>
			<div className='result-list'>{results.map(result => <ResultRow key={result.id} result={result} />)}</div>
		</React.Fragment>
  )
}

const mapStateToProps = state => ({
	results: getSearchResults(state),
})

export default connect(mapStateToProps)(Result);
