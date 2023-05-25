import React, {useState} from "react";
import Song from "../song/Song";
import ResultsList from "./ResultsList";
import SearchBar from "./SearchBar";

function Results(props) {
    const SONGS = [<Song name='Fałszywe Dziwki' artist='Firma'/>]

    const [item, setItem] = useState("")
    const onSearchingSong = (name) => {
        setItem(name)
    }

    return (
        <div>
            <h3>Results</h3>
            <SearchBar item={item} onSearchSong={onSearchingSong} />
            <ResultsList songs={SONGS}/>
        </div>
    )
}

export default Results