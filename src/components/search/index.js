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

  // Button handler to call the search function and execute the action
  const handleClick = () => {
    if(isValidURL(textInput) === false) {
        setSucessMessage("");
        setErrorMessage('Please enter a valid URL');
        if (textInput === "") {
          setSucessMessage("");
          setErrorMessage("URL cannot be empty");
        }
      } else {
        setErrorMessage("");
        setSucessMessage("Success!")
        setTextInput(textInput);
        props.getSearchResults(textInput);
      }
  }

  // Check if the input has a valid URL protocol
  const isValidURL = (e) => {
    const regex = new RegExp('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?');    
    return regex.test(e);
  }

  return (
    <div className="background">
      <div className="search centered">
        <div className="text-head">
          <h1 className="center" style={{ fontSize: "3rem" }}>URL Shortener!</h1>
          <input size="50" style={{ fontSize: "1rem" }} onChange ={handleChange} placeholder="Enter a URL to shorten!"/>
          <button className='button' onClick={handleClick}>Submit</button>
          {errorMessage && <p style={{ color: "#FF3333", fontSize: "1.5rem" }} className="center">{errorMessage}</p>}
          {sucessMessage && <p style={{ color: "#00ff0d", fontSize: "1.5rem" }} className="center" >{sucessMessage}</p>}
        </div>
      </div>
    </div>
  );
}

// Dispatch the action to the getSearchResults reducer
const mapDispatchToProps = {
    getSearchResults
}

export default connect(null, mapDispatchToProps)(Search);