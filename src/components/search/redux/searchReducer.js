import types from '../types';
import {Map, fromJS } from 'immutable';

// searchReducer component states

const initialState = Map({
    searchResults: []
});

// Take in the state of the action and console log the action type
const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.setSearchResults: {
            return state.merge ({
                searchResults: fromJS(action.results)
            })
        }
        default: {
            return state;
        }
    }
}; 

export default searchReducer;