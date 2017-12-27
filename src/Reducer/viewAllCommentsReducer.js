import * as actionType from '../actions/ActionType';

const viewAllCommentsReducer = (state = false, action) => {
  let newState;
  switch (action.type) {
    case actionType.VIEW_ALL:
      return newState = true;
    default:
      return state
  }
}

export default viewAllCommentsReducer;