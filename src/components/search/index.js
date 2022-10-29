import React, { useState } from  'react';
import { connect } from 'react-redux';
import { getSearchResults } from './action';


// Search function that takes in the input and returns the results through onInputChange
function Search(props) {

  const [textInput, setTextInput] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [sucessMessage, setSucessMessage] = useState('');

  const handleChange = (e) => {
    setTextInput(e.target.value);;
  }

  // Button handler to call the search function
  const handleClick = (e) => {
    if(isValidURL(textInput) === false) {
        setSucessMessage("");
        setErrorMessage('Please enter a valid URL');
        // console.log("test1")
        if (textInput === "") {
          setSucessMessage("");
          setErrorMessage("URL cannot be empty");
          // console.log("test2")
        }
      } else {
        setErrorMessage("");
        setSucessMessage("Shortened!")
        setTextInput(textInput);
        props.getSearchResults(textInput);
      }
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
                <input size="50" style={{ fontSize: "1rem" }} onChange ={handleChange} placeholder="Enter a URL to shorten!" />
                <button className='button' onClick={(e) => handleClick(e)}>Shorten!</button>
                {errorMessage && <p style={{ color: "#FF3333", fontSize: "1rem" }} className="center">{errorMessage}</p>}
                {sucessMessage && <p style={{ color: "#00ff0d", fontSize: "1.5rem" }} className="center" >{sucessMessage}</p>}
            </div>
        </div>
    </div>
  );
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
