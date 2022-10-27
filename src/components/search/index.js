import React from 'react';
import { connect } from 'react-redux';
import { getSearchResults } from './action';

// Search function that takes in the input and returns the results through onInputChange
function Search(props) {
    // console.log(props);
  return (
    <div className="background">
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <div className="text-center">
        <h1>URL Shortener Challenge!</h1>
            <input placeholder = "Enter URL" onChange = { e => onInputChange(e, props)}/>
        </div>
      </div>
    </div>
  );
}

// Check if the input is a valid URL
async function onInputChange(e, props) {
    if (e.target.value.trim() !== "") 
        props.getSearchResults(e.target.value);
}

// Dispatch the action to the reducer
const mapDispatchToProps = {
    getSearchResults
}

export default connect(null, mapDispatchToProps)(Search);
