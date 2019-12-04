import { call, put, select, takeLatest } from 'redux-saga/effects'

import {SEARCH} from '../action-types'
import {setSearchResults} from '../actions'
import {getSearchQuery} from '../selectors'
import API from '../../services/api'

function* handleSearch(action) {
	const query = yield select(getSearchQuery)
	const result = yield call(API.search, query)
	yield put(setSearchResults(result))
	console.log(action)
	console.log(query)
	console.log(result)
}

function* searchSaga() {
  yield takeLatest(SEARCH, handleSearch);
}

export default searchSaga;
