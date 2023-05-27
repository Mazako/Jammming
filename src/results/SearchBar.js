import React from "react"
import './Results.css'

function SearchBar({item, onSearchSong, onAddSong}) {
    const handleSearchSong = event => {
        const song = event.target.value;
        onSearchSong(song)
    }

    const handleSongAdding = () => {
        if (item !== '') {
            onAddSong(item)
            onSearchSong('')
        }
    }

    const handleClickingEnter = e => {
        if (e.key === 'Enter' && item !== '') {
            onAddSong(e.target.value)
            onSearchSong('')

        }
    }

    return (
        <div>
            <input type={"text"} value={item} onChange={handleSearchSong} onKeyDown={handleClickingEnter}/>
            <button onClick={handleSongAdding}>ADD</button>
        </div>
    )
}

export default SearchBar