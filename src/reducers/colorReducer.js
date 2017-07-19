import initialState from './initialState';
import * as types from '../constants/actionTypes';
export default function (state = initialState.colors, action) {
  switch (action.type) {
  	case types.RECEIVE_COLORS:
  		const { payload } = action;
  		return [
  			...payload
  		];
    default:
      return state;
  }
}