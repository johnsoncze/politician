import {
	SET_SEARCH_QUERY,
  SEARCH,
  SET_SEARCH_START,
  SET_SEARCH_END,
	SET_SEARCH_RESULTS,
	LOAD_DETAIL,
	SET_DETAIL,
	SET_LOADING_DETAIL_END,
  SET_LOADING_DETAIL_START,
  SET_DETAIL_NEWS,
  TOGGLE_SHOW_ALL_DONATIONS,
  TOGGLE_SHOW_ALL_ROLES,
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

export const searchStarted = () => ({
	type: SET_SEARCH_START,
});

export const searchEnded = () => ({
	type: SET_SEARCH_END,
});

export const setDetailNews = news => ({
  type: SET_DETAIL_NEWS,
  payload: {
    news
  }
});

export const toggleShowAllDonations = () => ({
  type: TOGGLE_SHOW_ALL_DONATIONS,
});

export const toggleShowAllRoles = () => ({
  type: TOGGLE_SHOW_ALL_ROLES,
});
