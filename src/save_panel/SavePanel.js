import React from "react";
import ResultsList from "../results/ResultsList";
import PlaylistName from "./PlaylistName";
import './SavePanel.css'

function SavePanel({results, onRemoveSong, playlistName, onSetPlaylistName, onSavePlaylist}) {

    const handleSavePlaylist = () => {
        onSavePlaylist(playlistName, results);
    }
    return (
        <div id={'savePanel'}>
            <PlaylistName playlistName={playlistName} onSetPlaylistName={onSetPlaylistName}/>
            <ResultsList songs={results} isAdding={false} onClickSong={onRemoveSong}/>
            <button id={'savePanel-button'} onClick={handleSavePlaylist}>Save Playlist</button>
        </div>
    )


}


export default SavePanel