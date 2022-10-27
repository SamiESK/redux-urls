import React from "react";
import "./results.css";
import { connect } from "react-redux";

// Results component page

function Results(props) {
    if (props.searchResults) {
    return (
        <>
        <br/>
        <div className="background-1">
        <div style={{display: 'flex', justifyContent: 'center'}}>
                <div className="text-center">
                    
                    <h1>Results</h1>
                    <div>
                        {props.searchResults}
                    </div>
                </div>
            </div>
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