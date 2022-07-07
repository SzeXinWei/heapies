//https://developer.spotify.com/documentation/web-api/quick-start/

export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000";
const clientId = "4332d14c7f8745ce9cacd8ff51fa3eb2";

const scopes = [
    "user-top-read",
    "user-library-modify",
    "playlist-modify-private",
    "user-read-private",
    "playlist-read-private",
];

export const getTokenFromUrl = () =>{
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial,item) => {
        var parts = item.split('=');
        initial[parts[0]] = 
        decodeURIComponent(parts[1]);

        return initial;
    }, {});
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri
}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;





