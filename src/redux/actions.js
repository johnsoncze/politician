import {
	SET_SEARCH_QUERY,
	SEARCH,
	SET_SEARCH_RESULTS,
	LOAD_DETAIL,
	SET_DETAIL,
	SET_LOADING_DETAIL_END,
	SET_LOADING_DETAIL_START,
} from "./action-types";

export const setSearchQuery = query => ({
  type: SET_SEARCH_QUERY,
  payload: {
    query
  }
});

export const setSearchResults = results => ({
  type: SET_SEARCH_RESULTS,
  payload: {
    results
  }
});

export const search = () => ({
  type: SEARCH,
});

export const loadDetail = id => ({
	type: LOAD_DETAIL,
	payload: {
		id,
	},
});

export const setDetail = detail => ({
	type: SET_DETAIL,
	payload: {
		detail,
	},
});

export const loadingDetailStarted = () => ({
	type: SET_LOADING_DETAIL_START,
});

export const loadingDetailEnded = () => ({
	type: SET_LOADING_DETAIL_END,
});
