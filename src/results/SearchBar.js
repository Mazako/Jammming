import React from "react";

function SearchBar({item, onSearchSong}) {
    const handleSearchSong = event => {
        const song = event.target.value;
        onSearchSong(song)
    }

    return (
        <div>
            <input type={"text"} value={item} onChange={handleSearchSong}/>
            <button>ADD</button>
        </div>
    )
}

export default SearchBar