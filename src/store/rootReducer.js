import { combineReducers } from 'redux';
import searchReducer from "../components/search/redux/searchReducer";

// rootReducers to house all reducers for the store

export default combineReducers({
    search: searchReducer
})