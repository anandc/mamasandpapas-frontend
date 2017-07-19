import { all, fork } from 'redux-saga/effects'
import { searchProducts, searchColors, searchCriteriaChange } from './productSaga';
import * as types from '../constants/actionTypes';

export default function* watchSearch() {
	yield all([
        fork(searchProducts),
        fork(searchColors),
        fork(searchCriteriaChange)
    ])
}
