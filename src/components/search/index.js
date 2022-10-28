import React, { useState } from  'react';
import { connect } from 'react-redux';
import { getSearchResults } from './action';

// Search function that takes in the input and returns the results through onInputChange
function Search(props) {
  const [textInput, setTextInput] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [sucessMessage, setSucessMessage] = useState('');

  const handleChange = (e) => {
    if(isValidURL(e.target.value) === false) {
      setSucessMessage("");
      setErrorMessage('Please enter a valid URL');
      // console.log("test1")
      if (e.target.value.trim() === "") {
        setSucessMessage("");
        setErrorMessage("URL cannot be empty");
        // console.log("test2")
      }
    } else {
      setErrorMessage("");
      setSucessMessage("Shortened!")
      setTextInput(e.target.value);
      onInputChange(e, props);
    }
    // console.log(e.target.value);
    console.log(textInput);
  }

  // Check if the input is a valid URL
  const isValidURL = (e) => {
    let url;
    try {
      url = new URL(e);
    } catch (_) {
      return false;
    }
    return url.protocol === "http:" || url.protocol === "https:";
  }

  return (
    
    <div className="background">
      <div className="search centered">
            <div className="text-head">
            <h1 className="center" style={{ fontSize: "3rem" }}>URL Shortener!</h1>
                <input size="50" style={{ fontSize: "1rem" }} onBlur ={handleChange} placeholder="Enter a URL to shorten!" />
                {errorMessage && <p style={{ color: "#FF3333", fontSize: "1rem" }} className="center">{errorMessage}</p>}
                {sucessMessage && <p style={{ color: "#00ff0d", fontSize: "1.5rem" }} className="center" >{sucessMessage}</p>}
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

const mapStateToProps = state => {
  return {
      searchResults: state.search.get('searchResults')
  }
}

// Connect map props to the component for accessibility
export default connect(mapStateToProps, mapDispatchToProps)(Search);
