import React from "react";
import './NoLoginLandingPage.css'

function NoLoginLandingPage({onLogin}) {
    return (
        <div id={'no-login'}>
            <p>Aby skorzystać z aplikacji, musisz zalogować się na swoje konto Spotify</p>
            <button onClick={onLogin}>Zaloguj się</button>
        </div>
    )
}

export default NoLoginLandingPage