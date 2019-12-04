import React from 'react';
import { connect } from "react-redux";
import {getSearchResults} from '../redux/selectors'

function ResultRow({result}) {
	return <div>{result.name} {result.surname}</div>
}

function Results({results}) {
  return results.map(result => <ResultRow key={result.id} result={result} />)
}

const mapStateToProsp = state => ({
	results: getSearchResults(state),
})

export default connect(mapStateToProsp)(Results);
