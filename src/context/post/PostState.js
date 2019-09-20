import React, { useReducer } from 'react';
import axios from 'axios';
import PostContext from './postContext';
import PostReducer from './postReducer';
import {
  GET_POSTS,
  ERROR,
  FILTER_POSTS,
  SET_LOADING,
  SET_ALERT,
  REMOVE_ALERT
} from '../types';

const PostState = props => {
  const initialState = {
    postData: [],
    filteredData: [],
    error: null,
    loading: false,
    alert: false
  };

  const [state, dispatch] = useReducer(PostReducer, initialState);

  // getPosts
  const getPosts = async () => {
    setLoading();

    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');

      dispatch({
        type: GET_POSTS,
        payload: res.data
      });
    } catch (err) {
      dispatch({ type: ERROR, payload: 'server not found' });
    }
  };

  // Filter posts for the my posts component
  const filterPosts = (array, text) => {
    setLoading();
    const int = parseInt(text, 10);
    const newArray = array.filter(el => el.userId === int);
    dispatch({ type: FILTER_POSTS, payload: newArray });
  };

  // Set loading for progress bar
  const setLoading = () => dispatch({ type: SET_LOADING });

  // Set Alert
  const setAlert = () => dispatch({ type: SET_ALERT });

  // Remove Alert
  const removeAlert = () => dispatch({ type: REMOVE_ALERT });

  const regCheck = text => {
    const re = new RegExp('^(?:[1-9]|0[1-9]|10)$');

    if (re.test(text)) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <PostContext.Provider
      value={{
        postData: state.postData,
        filteredData: state.filteredData,
        getPosts,
        error: state.error,
        filterPosts,
        loading: state.loading,
        setAlert,
        removeAlert,
        alert: state.alert,
        regCheck
      }}
    >
      {props.children}
    </PostContext.Provider>
  );
};

export default PostState;
