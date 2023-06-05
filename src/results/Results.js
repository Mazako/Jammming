import React, {useState} from "react"
import ResultsList from "./ResultsList"
import SearchBar from "../search-bar/SearchBar"
import './Results.css'

function Results({songs, onSaveSong}) {

    return (
        <div id={'results-div'}>
            <h2>Results</h2>
            <ResultsList songs={songs} isAdding={true} onClickSong={onSaveSong}/>
        </div>
    )
}

export default Results