import {takeLatest, put} from 'redux-saga/effects';
import types from '../types';
import axios from "axios";
import { setSearchResult } from '../action.js';

// SetSearch value is the action creator that is called in the search component

export function* setSearch( {value} ) { 
    try {
    const url = `https://api.shrtco.de/v2/shorten?url=${value}`;
    const data = yield axios.get(url);
    return yield put(setSearchResult(data.data.result.full_short_link));
    } catch (error) {
        console.log(error);
    }
}

// Watcher saga that watches for the action creator to be called
function* watchSearch() { 
    yield takeLatest(types.watchGetSearchResults, setSearch);
}

export default (watchSearch);