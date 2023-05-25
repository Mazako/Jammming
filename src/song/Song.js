import React from "react";

function Song({name, artist, onClickSongButton}) {
    return(
        <li>
            <p>{name}</p>
            <p>{artist}</p>
            <button>+</button>
        </li>
    )
}

export default Song