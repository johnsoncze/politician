import {
	SET_SEARCH_QUERY,
	SET_SEARCH_RESULTS,
	SET_DETAIL,
	SET_LOADING_DETAIL_START,
	SET_LOADING_DETAIL_END,
} from "../action-types";

const initialState = {
	searchQuery: '',
	searchResults: [],
	detail: {},
	loadingDetail: false,
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
    case SET_DETAIL: {
			const { detail } = action.payload;
      return {
        ...state,
        detail,
      };
    }
    case SET_LOADING_DETAIL_START: {
      return {
        ...state,
        loadingDetail: true,
      };
    }
    case SET_LOADING_DETAIL_END: {
      return {
        ...state,
        loadingDetail: false,
      };
    }
    default:
      return state;
  }
}
