import React from "react";
import "./results.css";
import { connect } from "react-redux";

// Results component page

function Results(props) {
    if (props.searchResults) {
    return (
        <>
        <div style={{ fontSize: "2rem" }} className="text-center center" >
        {props.searchResults}
        </div>
        </>
    )
    }
}

const mapStateToProps = state => {
    return {
        searchResults: state.search.get('searchResults')
    }
}

export default connect(mapStateToProps)(Results);