import React from "react"
import './Results.css'

function SearchBar({item, onSearchSong, onAddSong}) {
    const handleSearchSong = event => {
        const song = event.target.value;
        onSearchSong(song)
    }

    const handleSongAdding = () => {
        onAddSong(item)
        onSearchSong('')
    }

    return (
        <div>
            <input type={"text"} value={item} onChange={handleSearchSong}/>
            <button onClick={handleSongAdding}>ADD</button>
        </div>
    )
}

export default SearchBar