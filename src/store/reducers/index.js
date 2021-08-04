  
import { combineReducers } from 'redux';

import posts from './postsReducer';
// import auth from './auth'

const reducers=combineReducers({ posts });

export default reducers