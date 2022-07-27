
import './Artistsconfirmed.css'
import circle from './images/circle.png'
import {useNavigate , useLocation} from "react-router-dom"
import SpotifyWebApi from 'spotify-web-api-js'
import React, { useEffect, useState } from "react";

const spotifyApi = new SpotifyWebApi();
function Comment(){
    return (
        <h1 className='comment'>I SEE YOU'VE GOT GOOD TASTE :-&#41;</h1>

    )
}

function Confirm(){
    const { state } = useLocation();
    const { emotions, selectedArtists } = state;
    let navigate = useNavigate();
    return(
        <div>
            {/* <p className='confirm'>CONFIRM</p>
            <p className='reselect'>I want to reselect.</p> */}
            

        </div>
    )
}

function Artistsconfirmed({topTracks}){
    const [playlist, setPlaylist] = useState(null);
    let navigate = useNavigate();
    const { state } = useLocation();
    const { emotions, selectedArtists } = state;
    // console.log({topTracks});

    if(playlist == null){
        var seedArtists = []
        for (let artist of selectedArtists) {
            seedArtists.push(artist.id)
        }

        spotifyApi.getRecommendations(
            {seed_artists: seedArtists,
            seed_genres: emotions,
            seed_tracks:( ({topTracks}.topTracks[0]) , ({topTracks}.topTracks[1]) , ({topTracks}.topTracks[2]) , ({topTracks}.topTracks[3]) , ({topTracks}.topTracks[4]))
                } , (error , results) => setPlaylist(results.tracks) )
    }
            

 

    // console.log(playlist);
   
    return(
        <div>
            <Comment />
            <div>
                {selectedArtists.map((artist, index) => <img src={artist.images[0].url} />)}
            </div>
            <button id="reselect" onClick={() => {navigate("/Artists" , { state: {emotions} })}}>I want to reselect</button>
            <button id="generate" onClick={() => {navigate("/Playlistplay" , {state: {playlist}})}}>Generate</button>
        </div>
    )
}

export default Artistsconfirmed