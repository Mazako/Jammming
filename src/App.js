import React, {useEffect, useState} from "react"
import Logo from './logo/Logo'
import './App.css'
import Results from "./results/Results"
import SavePanel from "./save_panel/SavePanel";
import SearchBar from "./search-bar/SearchBar";
import SongDTO from "./DTO/SongDto";
import CurrentUser from "./CurrentUser/CurrentUser";
import {getUserDetailsAfterLogin, redirectToSpotifyLoginSite, searchPlaylists} from './SpotifyUtils'
import NoLoginLandingPage from "./no-login-landing-page/NoLoginLandingPage";

function App() {
    const [songs, setSongs] = useState([])

    const [item, setItem] = useState("")
    const [playlistName, setPlaylistName] = useState("");
    const [savedSongs, setSavedSongs] = useState([])
    const onAddSong = async (name) => {
        await searchPlaylists(name, setSongs)
    }
    const onSetCurrentUser = () => {
        redirectToSpotifyLoginSite()
    }

    useEffect(() => {
        const handleUserDetailsLogin = async (hash) => {
            await getUserDetailsAfterLogin(hash)
        }
        if (window.location.hash) {
            handleUserDetailsLogin(window.location.hash)
        }
    })

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

    const onSavePlaylist = (playlistName, songs) => {
        console.log(playlistName)
        console.log(songs)
    }

    const onSearchingSong = (name) => {
        setItem(name)
    }

    const getUserDetails = () => {
        const user = localStorage.getItem('user')
        const userJSON = JSON.parse(user)
        return {
            displayName: userJSON.displayName,
            href: userJSON.href,
            url: userJSON.images.url
        }
    }

    if (!localStorage.getItem('user')) {
        return <NoLoginLandingPage onLogin={onSetCurrentUser}/>;
    }
    return (
        <div>
            <Logo/>
            <div id={'search-and-login'}>
                <CurrentUser user={getUserDetails()}/>
                <SearchBar item={item} onSearchSong={onSearchingSong} onAddSong={onAddSong}/>
            </div>
            <div id={'app-bars'}>
                <Results songs={songs} onSaveSong={onSaveSong}/>
                <SavePanel results={savedSongs} onRemoveSong={onRemoveSong} playlistName={playlistName}
                           onSetPlaylistName={setPlaylistName} onSavePlaylist={onSavePlaylist}/>
            </div>
        </div>
    )
}

export default App;
