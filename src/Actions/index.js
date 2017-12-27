import * as actionType from './ActionType';

export const viewAll = () => ({
  type: actionType.VIEW_ALL
});

export const addComment = (text) => {
  return {
    type: actionType.ADD_COMMENT,
    text
  }
}


