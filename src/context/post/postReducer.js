import {
  GET_POSTS,
  ERROR,
  FILTER_POSTS,
  SET_LOADING,
  SET_ALERT,
  REMOVE_ALERT
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        postData: action.payload,
        loading: false
      };

    case ERROR:
      return {
        ...state,
        error: action.payload
      };

    case FILTER_POSTS:
      return {
        ...state,
        filteredData: action.payload,
        loading: false
      };

    case SET_ALERT:
      return {
        ...state,
        alert: true
      };

    case REMOVE_ALERT:
      return {
        ...state,
        alert: false
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
};
