import React from "react";
import ResultsList from "../results/ResultsList";
import PlaylistName from "./PlaylistName";

function SavePanel({results, onRemoveSong, playlistName, onSetPlaylistName}) {

    return (
        <div>
            <PlaylistName playlistName={playlistName} onSetPlaylistName={onSetPlaylistName} />
            <ResultsList songs={results} isAdding={false} onClickSong={onRemoveSong} />
        </div>
    )


}


export default SavePanel