import React from "react";
import './Song.css'
function Song({name, artist, onClickSongButton}) {
    return(
        <li className={'song-list'}>
            <p className={'song-name'}>{name}</p>
            <p className={'song-artist'}>Artist: {artist}</p>
            <button className={'song-add'}>+</button>
        </li>
    )
}

export default Song