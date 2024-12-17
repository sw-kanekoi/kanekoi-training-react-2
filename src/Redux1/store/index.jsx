import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

const initialState = {
    count: 50,
    posts: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREASE_COUNT':
            return {
                ...state,
                count: state.count + 1,
            };
        case 'DECREASE_COUNT':
            return {
                ...state,
                count: state.count - 1,
            };
        case 'GET_POST_DATA':
            return {
                ...state, posts: action.payload
            };
        default:
            return state;
    }
};

// 動作確認用にstore用ファイルにgetPosts()を記述

export const getPosts = () => {
    return async (dispatch) => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await res.json();
      dispatch({
        type: 'GET_POST_DATA',
        payload: data,
      });
    };
  };

const store = createStore(reducer, applyMiddleware(thunk));
console.log(store.getState())

export default store;