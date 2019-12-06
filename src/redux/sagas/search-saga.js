import { call, put, select, takeLatest } from 'redux-saga/effects'

import {SEARCH, LOAD_DETAIL} from '../action-types'
import {setSearchResults, setDetail, loadingDetailStarted, loadingDetailEnded} from '../actions'
import {getSearchQuery} from '../selectors'
import API from '../../services/api'

function* handleSearch(action) {
	const query = yield select(getSearchQuery)
	const {persons} = yield call(API.search, query)
	yield put(setSearchResults(persons))
}

function* handleLoadDetail(action) {
	yield put(loadingDetailStarted())
	const detail = yield call(API.fetchDetail, action.payload.id)
	yield put(setDetail(detail))
	yield put(loadingDetailEnded())
}

function* searchSaga() {
  yield takeLatest(SEARCH, handleSearch);
  yield takeLatest(LOAD_DETAIL, handleLoadDetail);
}

export default searchSaga;
