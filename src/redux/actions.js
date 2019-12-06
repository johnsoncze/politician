import { SET_SEARCH_QUERY, SEARCH, SET_SEARCH_RESULTS } from "./action-types";

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
