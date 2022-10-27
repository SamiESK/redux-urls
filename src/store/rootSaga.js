import searchSaga from '../components/search/redux/searchSaga';
import { fork, all } from 'redux-saga/effects';

// Root saga is the main saga that is called in the store

function* rootSaga() {
    yield all([fork(searchSaga)]);
    // yield fork(searchSaga); if desired another dispatch to fork
}

export default rootSaga;