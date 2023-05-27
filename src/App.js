import React, {useState} from "react"
import Logo from './logo/Logo'
import './App.css'
import Results from "./results/Results"
import SavePanel from "./save_panel/SavePanel";

class SongDTO {
    id
    name
    artist


    constructor(id, name, artist) {
        this.id = id;
        this.name = name;
        this.artist = artist;
    }

}


let ID = 1;

function App() {
    const [songs, setSongs] = useState([])
    const [savedSongs, setSavedSongs] = useState([])

    const onAddSong = (name) => {
        setSongs([
            ...songs,
            new SongDTO(ID++, name, 'firma')
        ])
    }

    const onSaveSong = (id, name, artist) => {
        setSavedSongs([
            ...savedSongs,
            new SongDTO(id, name, artist)
        ])

        setSongs(songs.filter(s => (s.id !== id)))
    }

    const onRemoveSong = (id) => {
        setSavedSongs(savedSongs.filter(s => s.id !== id))
    }

    return (
        <div>
            <Logo/>
            <div id={'app-bars'}>
                <Results onAddSong={onAddSong} songs={songs} onSaveSong={onSaveSong}/>
                <SavePanel results={savedSongs} onRemoveSong={onRemoveSong}/>
            </div>
        </div>
    )
}

export default App;
