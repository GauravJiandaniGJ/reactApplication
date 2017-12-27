import { combineReducers } from 'redux';
import viewAllCommentsReducer from './viewAllCommentsReducer';
import comments from './comments';
	
	console.log('index.js Reducer')
	console.log(comments);

const commentSection = combineReducers({

  viewAllCommentsReducer,
  comments
})

export default commentSection