import { combineReducers } from 'redux';
import products from './productReducer';
import colors from './colorReducer';
import initialState from './initialState';
import * as types from '../constants/actionTypes';

const makeReducer = (propName) => {
	return (state = initialState.selectedColor, action) => {
		switch(action.type) {
			//Todo use the event after retrieving data to avoid react batching
			case types.SEARCH_CRITERIA_CHANGED:
				const { payload } = action;
				return payload[propName];
			default: return state;
		}
	}
}

// Combines all reducers to a single reducer function
const rootReducer = combineReducers({
  products,
  colors,
  selectedColor: makeReducer('selectedColor'),
  searchString: makeReducer('searchString')
});

export default rootReducer;