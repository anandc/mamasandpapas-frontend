import initialState from './initialState';
import * as types from '../constants/actionTypes';
export default function (state = initialState.products, action) {
  switch (action.type) {
  	case types.RECEIVE_PRODUCTS:
  		const { payload } = action;
  		return [
  			...payload
  		];
    default:
      return state;
  }
}