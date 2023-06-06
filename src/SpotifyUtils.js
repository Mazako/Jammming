import SongDTO from "./DTO/SongDto";

const REDIRECT_URL = 'http://localhost:3000/'
const CLIENT_ID = 'c3e9386d79894b13921ab2d191c8dbf4'
const CLIENT_SECRET = 'ca6c82e0bac145d892167f05062122f3'
export const redirectToSpotifyLoginSite = () => {
    const url = 'https://accounts.spotify.com/authorize'
    const scopes = ['user-read-private', 'user-read-email']
    const scopesParam = scopes.join('%20');
    const responseType = 'token'
    window.location = `${url}?response_type=${responseType}&client_id=${CLIENT_ID}&scope=${scopesParam}&redirect_uri=${REDIRECT_URL}`
}

const getAuthToken = () => {
    const user = localStorage.getItem('user')
    if (!user) {
        throw new Error('Auth token not set')
    }
    const userJSON = JSON.parse(user)
    return `${userJSON.tokenType} ${userJSON.accessToken}`

}
const getUserDataAndSaveUserObjectToLocalStorage = async (tokenType, accessToken) => {
    const url = `https://api.spotify.com/v1/me`
    try {
        const request = await fetch(url, {
            method: 'GET',
            headers: {
                Authorization: `${tokenType} ${accessToken}`
            }
        })
        if (request.ok) {
            const user = await request.json()
            localStorage.clear()
            localStorage.setItem('user', JSON.stringify({
                id: user.id,
                tokenType: tokenType,
                accessToken: accessToken,
                displayName: user.display_name,
                href: user.external_urls.spotify,
                images: {
                    url: user.images[0].url,
                    height: user.images[0].height,
                    width: user.images[0].width
                }


            }))
        } else {
            console.log('error')
        }
    } catch (e) {
        console.log(e)
    }
}

export const getUserDetailsAfterLogin = async (hash) => {
    hash = hash.substring(1)
    let credentials = hash.split('&')
        .map(h => h.split('='))
        .map(item => {
                return {
                    type: item[0],
                    value: item[1],
                }
            }
        )
    const accessToken = credentials
        .find(o => o.type === 'access_token')
        .value
    const tokenType = credentials
        .find(o => o.type === 'token_type')
        .value
    await getUserDataAndSaveUserObjectToLocalStorage(tokenType, accessToken)
    window.location = 'http://localhost:3000';
}


export const searchPlaylists = async (query, setSongs) => {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track&limit=10`;
    try {
        const request = await fetch(url, {
            headers: {
                Authorization: getAuthToken()
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