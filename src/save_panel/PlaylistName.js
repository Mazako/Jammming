import React from "react";
import './SavePanel.css'

function PlaylistName({onSetPlaylistName, playlistName}) {
    const handleChangePlaylistName = (e) => {
        let name = e.target.value
        if (!name.isEmpty) {
            onSetPlaylistName(name)
        }
    }
    return (
        <div className={'playlist-name-input'}>
            <input type='text' onChange={handleChangePlaylistName} value={playlistName}
                   placeholder={'Nazwa playlisty'}/>
        </div>
    )
}

export default PlaylistName