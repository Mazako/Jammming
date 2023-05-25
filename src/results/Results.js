import React, {useState} from "react"
import ResultsList from "./ResultsList"
import SearchBar from "./SearchBar"
import './Results.css'

function Results({songs, onAddSong}) {
    const [item, setItem] = useState("")
    const onSearchingSong = (name) => {
        setItem(name)
    }

    return (
        <div id={'results-div'}>
            <h2>Results</h2>
            <SearchBar item={item} onSearchSong={onSearchingSong} onAddSong={onAddSong} />
            <ResultsList songs={songs}/>
        </div>
    )
}

export default Results