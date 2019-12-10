import {
	SET_SEARCH_QUERY,
	SET_SEARCH_RESULTS,
	SET_DETAIL,
	SET_LOADING_DETAIL_START,
  SET_LOADING_DETAIL_END,
  SET_SEARCH_END,
  SET_SEARCH_START,
  SET_DETAIL_NEWS,
} from "../action-types";

const initialState = {
	searchQuery: '',
	searchResults: null,
	detail: {},
	detailNews: [],
	loadingDetail: false,
	loadingSearch: false,
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
    case SET_SEARCH_START: {
      return {
        ...state,
        loadingSearch: true,
      };
    }
    case SET_SEARCH_END: {
      return {
        ...state,
        loadingSearch: false,
      };
    }
    case SET_DETAIL_NEWS: {
			const { news } = action.payload;
      return {
        ...state,
        detailNews: news,
      };
    }
    default:
      return state;
  }
}
