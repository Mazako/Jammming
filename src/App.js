import React, {useState} from "react"
import Logo from './logo/Logo'
import './App.css'
import Results from "./results/Results"
import Song from "./song/Song"

function App() {
    const SONGS = [<Song name='Fałszywe Dziwki' artist='Firma'/>]
    const [songs, setSongs] = useState(SONGS)

    const onAddSong = (name) => {
        setSongs([
            ...songs,
            <Song name={name} artist={'Firma'}/>
        ])
    }

    return (
        <div>
            <Logo/>
            <div id={'app-bars'}>
                <Results onAddSong={onAddSong} songs={songs}/>
            </div>
        </div>
    )
}

export default App;
