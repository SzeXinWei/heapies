
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

function Artists(){
    return(
        <div>
            <img className='c1' src={circle} />
            <p className='artist1'>Artist 1</p>
            <img className='c2' src={circle} />
            <p className='artist2'>Artist 2</p>
            <img className='c3' src={circle} />
            <p className='artist3'>Artist 3</p>
        </div>
    )
}

function Confirm(){
    const { state } = useLocation();
    const { emotions } = state;
    let navigate = useNavigate();
    return(
        <div>
            {/* <p className='confirm'>CONFIRM</p>
            <p className='reselect'>I want to reselect.</p> */}
            <button id="reselect" onClick={() => {navigate("/Artists" , { state: {emotions} })}}>I want to reselect</button>
            <button id="generate" onClick={() => {navigate("/Playlistplay")}}>Generate</button>

        </div>
    )
}

function Artistsconfirmed({topTracks}){
    const [playlist, setPlaylist] = useState(null);
    let navigate = useNavigate();
    const { state } = useLocation();
    const { emotions } = state;
    console.log({topTracks});


    if(playlist == null){
        spotifyApi.getRecommendations(
            {seed_artists: "4NHQUGzhtTLFvgF5SZesLK",
            seed_genres: emotions,
            seed_tracks:( ({topTracks}.topTracks[0]) , ({topTracks}.topTracks[1]) , ({topTracks}.topTracks[2]) , ({topTracks}.topTracks[3]) , ({topTracks}.topTracks[4]))
                } , (error , results) => setPlaylist(results) )
    }
            

 

    console.log(playlist);
   
    return(
        <div>
            <Comment />
            <Artists />
            <Confirm />
        </div>
    )
}

export default Artistsconfirmed