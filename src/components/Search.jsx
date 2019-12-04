import React from 'react';
import { connect } from "react-redux";
import {setSearchQUery, search} from '../redux/actions'
import {getSearchQuery} from '../redux/selectors'

function Search({setSearchQUery, search}) {
  return (
		<div>
			<input onChange={(event) => setSearchQUery(event.target.value)}></input>
			<button onClick={search}>Hledat</button>
		</div>
  );
}

const mapStateToProsp = state => ({
	query: getSearchQuery(state),
})

export default connect(mapStateToProsp, {setSearchQUery, search})(Search);
