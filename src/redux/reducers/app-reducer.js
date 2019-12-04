import { SET_SEARCH_QUERY, SET_SEARCH_RESULTS } from "../action-types";

const initialState = {
	searchQuery: '',
	searchResults: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_SEARCH_QUERY: {
			const { query } = action.payload;
      return {
        ...state,
        searchQuery: query,
      };
    }
    case SET_SEARCH_RESULTS: {
			const { results } = action.payload;
      return {
        ...state,
        searchResults: results,
      };
    }
    default:
      return state;
  }
}
