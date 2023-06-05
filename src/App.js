import React, {useEffect, useState} from "react"
import Logo from './logo/Logo'
import './App.css'
import Results from "./results/Results"
import SavePanel from "./save_panel/SavePanel";
import SearchBar from "./search-bar/SearchBar";
import SongDTO from "./DTO/SongDto";
import UserDto from "./DTO/UserDto";
import CurrentUser from "./CurrentUser/CurrentUser";

const getAuthToken = async () => {
    const url = 'https://accounts.spotify.com/api/token';
    try {
        const token = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'grant_type=client_credentials&client_id=c3e9386d79894b13921ab2d191c8dbf4&client_secret=ca6c82e0bac145d892167f05062122f3'
        })
        if (token.ok) {
            return await token.json()
        }
    } catch (e) {
        alert(e);
    }
}

function App() {
    const [token, setToken] = useState({});
    useEffect(() => {
        getAuthToken().then(resolved => setToken(resolved));
        setInterval(() => getAuthToken().then(resolved => setToken(resolved)), 3600 * 1000);

    }, []);

    const [songs, setSongs] = useState([])
    const [item, setItem] = useState("")
    const [playlistName, setPlaylistName] = useState("");
    const [savedSongs, setSavedSongs] = useState([])
    const [user, setCurrentUser] = useState(null);
    const onAddSong = async (name) => {
        const url = `https://api.spotify.com/v1/search?q=${name}&type=track&limit=10`;
        try {
            const request = await fetch(url, {
                headers: {
                    Authorization: `${token.token_type} ${token.access_token}`
                }
            });
            if (request.ok) {
                const results = await request.json();
                setSongs(
                    results['tracks']['items'].map(song => new SongDTO(song['id'], song['name'], song['artists'][0]['name']))
                )
            }
        } catch (e) {
            console.log(e)
        }

    }

    const onSetCurrentUser = async () => {
        const url = `https://api.spotify.com/v1/me`
        alert(JSON.stringify(token))
        try {
            const request = await fetch(url, {
                method: 'GET',
                headers: {
                    Authorization: `${token.token_type} ${token.access_token}`
                }
            })
            if (request.ok) {
                const user = await request.json()
                setCurrentUser(new UserDto(user.display_name, user.images, user.id))
            } else {
                throw new Error("XD")
            }
        } catch (e) {
            console.log(e)
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
    const onSearchingSong = (name) => {
        setItem(name)
    }

    return (
        <div>
            <Logo/>
            <div id={'search-and-login'}>
                <CurrentUser user={user} onSetUser={onSetCurrentUser} />
                <SearchBar item={item} onSearchSong={onSearchingSong} onAddSong={onAddSong}/>
            </div>
            <div id={'app-bars'}>
                <Results songs={songs} onSaveSong={onSaveSong}/>
                <SavePanel results={savedSongs} onRemoveSong={onRemoveSong} playlistName={playlistName}
                           onSetPlaylistName={setPlaylistName}/>
            </div>
        </div>
    )
}

export default App;
