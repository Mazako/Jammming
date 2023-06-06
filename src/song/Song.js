import React from "react";
import './Song.css'

function Song({id, name, artist, isAdding, onClickSongButton}) {

    const handleClickSongButton = () => {
        onClickSongButton(id, name, artist)
    }

    return (
        <li className={'song-list'}>
            <p className={'song-name'}>{name}</p>
            <p className={'song-artist'}>Artist: {artist}</p>
            <button className={'song-add'} onClick={handleClickSongButton}>{isAdding ? '+' : '-'}</button>
        </li>
    )
}

export default Song