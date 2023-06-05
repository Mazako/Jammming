import React from "react";

function CurrentUser({user, onSetUser}) {
    if (user) {
        return (
          <p>GIT</p>
        );
    } else {
        return <button onClick={onSetUser}>Log in into Spotify</button>
    }
}

export default CurrentUser