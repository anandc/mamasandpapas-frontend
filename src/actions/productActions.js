import * as types from '../constants/actionTypes';
const searchAction = (payload) => ({
  type: types.SEARCH_REQUEST,
  payload
});
const receiveProductAction = (payload) => {
    return {
        type: types.RECEIVE_PRODUCTS,
        payload
    }
};
const colorAction = (payload) => ({
  type: types.COLOR_REQUEST,
  payload
});
const receiveColorAction = (payload) => {
    return {
        type: types.RECEIVE_COLORS,
        payload
    }
};
const searchCriteriaChangeAction = (payload) => {
	return {
	  type: types.SEARCH_CRITERIA_CHANGED,
	  payload
	}
};

export {
	searchAction,
	receiveProductAction,
	colorAction,
	receiveColorAction,
	searchCriteriaChangeAction
};