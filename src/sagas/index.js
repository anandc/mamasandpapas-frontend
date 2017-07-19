import { all, fork } from 'redux-saga/effects'
import { searchProducts, searchColors, searchCriteriaChange } from './productSaga';

export default function* watchSearch() {
	yield all([
        fork(searchProducts),
        fork(searchColors),
        fork(searchCriteriaChange)
    ])
}
