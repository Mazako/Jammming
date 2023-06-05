import React from "react";

function PlaylistName({onSetPlaylistName, playlistName}) {
    const handleChangePlaylistName = (e) => {
        let name = e.target.value
        if (!name.isEmpty) {
            onSetPlaylistName(name)
        }
    }
    return (
        <div className={'playlist-name-input'}>
            <p>Playlist name: </p>
            <input type='text' onChange={handleChangePlaylistName} value={playlistName}/>
        </div>
    )
}

export default PlaylistName