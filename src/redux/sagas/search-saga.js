import { call, put, select, takeLatest } from 'redux-saga/effects'

import {SEARCH, LOAD_DETAIL} from '../action-types'
import {
  setSearchResults,
  setDetail,
  loadingDetailStarted,
  loadingDetailEnded,
  searchEnded,
  searchStarted,
} from '../actions'
import {getSearchQuery} from '../selectors'
import API from '../../services/api'

function* handleSearch(action) {
  const query = yield select(getSearchQuery)
  if (!query) {
    yield put(setSearchResults(null))
    return
  }
  yield put(searchStarted())
  try {
    const {persons} = yield call(API.search, query)
    yield put(setSearchResults(persons))
  } catch (error) {
    yield put(setSearchResults([]))
    // TODO asi vymyslet nejaky jednotny error handling idealne i s designem
  }
  yield put(searchEnded())
}

function* handleLoadDetail(action) {
  yield put(loadingDetailStarted())
  try {
    const detail = yield call(API.fetchDetail, action.payload.id)
    yield put(setDetail(detail))
  } catch (error) {
    // TODO asi vymyslet nejaky jednotny error handling idealne i s designem
  }
	yield put(loadingDetailEnded())
}

function* searchSaga() {
  yield takeLatest(SEARCH, handleSearch);
  yield takeLatest(LOAD_DETAIL, handleLoadDetail);
}

export default searchSaga;
