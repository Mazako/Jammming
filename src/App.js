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

const optionsToGetSongs = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '273e9f091dmshbb23fda83ae9ae2p1973fdjsncd1814035bcb',
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    }
};

function App() {
    const [songs, setSongs] = useState([])
    const [savedSongs, setSavedSongs] = useState([])

    const onAddSong = async (name) => {
        const url = `https://spotify23.p.rapidapi.com/search/?q=${name}&type=tracks&offset=0&limit=${15}&numberOfTopResults=5`;
        try {
            const request = await fetch(url, optionsToGetSongs)
            if (request.ok) {
                const results = await request.json()
                setSongs(
                    results['tracks']['items'].map(song => new SongDTO(song['data']['id'], song['data']['name'], song['data']['artists']['items'][0]['profile']['name']))
                )
            }
        } catch (e) {
            alert(e)
        }
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
