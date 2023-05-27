import React from "react"
import './Results.css'
import Song from "../song/Song";

function ResultsList({songs, onClickSong, isAdding}) {
    return (
        <ul>
            {songs.map(song => <Song key={song.id}
                                     id={song.id}
                                     name={song.name}
                                     artist={song.artist}
                                     isAdding={isAdding}
                                     onClickSongButton={onClickSong}/>)}
        </ul>
    )
}

export default ResultsList