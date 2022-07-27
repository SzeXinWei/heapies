import React, { useEffect, useState } from "react";
import './Playlistplay.css'
import circle from './images/circle.png'
import SpotifyWebApi from 'spotify-web-api-js'
import { isCompositeComponent } from "react-dom/test-utils";
import {useNavigate , useLocation} from "react-router-dom"

const spotifyApi = new SpotifyWebApi();

export function NamesPlaylist({username}){
    return(
        <h1 className='namesplaylist'>{username}'s playlist &lt;3 </h1>
    )
}

export function Song1(){
    const { state } = useLocation();
    const { playlist } = state;
    console.log(playlist[0].album.images[0].url)

    return(
    
        <div id='song1'>
            <img className='circle1' src= {playlist[0].album.images[0].url} />
            <p className='s1'>{playlist[0].name}</p>
            <p className='a1'>{playlist[0].artists[0].name}</p>
            <p className='num1'>1</p>
        </div>
    )
}

export function Song2(){
    const { state } = useLocation();
    const { playlist } = state;
    return(
        <div id='song2'>
            <img className='circle2' src={circle} />
            <p className='s2'>{playlist[1].name}</p>
            <p className='a2'>{playlist[1].artists[0].name}</p>
            <p className='num2'>2</p>
        </div>
    )
}

export function Song3(){
    const { state } = useLocation();
    const { playlist } = state;
    return(
        <div id='song3'>
            <img className='circle3' src={circle} />
            <p className='s3'>{playlist[2].name}</p>
            <p className='a3'>{playlist[2].artists[0].name}T</p>
            <p className='num3'>3</p>
        </div>
    )
}

export function Song4(){
    const { state } = useLocation();
    const { playlist } = state;
    return(
        <div id='song4'>
            <img className='c4' src={playlist[3].album.images[0].url} />
            <p className='s4'>{playlist[3].name}</p>
            <p className='a4'>{playlist[3].artists[0].name}</p>
            <p className='num4'>4</p>
        </div>
    )
}

export function Song5(){
    const { state } = useLocation();
    const { playlist } = state;
    return(
        <div id='song5'>
            <img className='c5' src={playlist[4].album.images[0].url} />
            <p className='s5'>{playlist[4].name}</p>
            <p className='a5'>{playlist[4].artists[0].name}</p>
            <p className='num5'>5</p>
        </div>
    )
}

export function Song6(){
    const { state } = useLocation();
    const { playlist } = state;
    return(
        <div id='song6'>
            <img className='c6' src={playlist[5].album.images[0].url} />
            <p className='s6'>{playlist[5].name}</p>
            <p className='a6'>{playlist[5].artists[0].name}</p>
            <p className='num6'>6</p>
        </div>
    )
}

export function Song7(){
    const { state } = useLocation();
    const { playlist } = state;
    return(
        <div id='song7'>
            <img className='c7' src={playlist[6].album.images[0].url} />
            <p className='s7'>{playlist[6].name}</p>
            <p className='a7'>{playlist[6].artists[0].name}</p>
            <p className='num7'>7</p>
        </div>
    )
}

export function Song8(){
    const { state } = useLocation();
    const { playlist } = state;
    return(
        <div id='song8'>
            <img className='c8' src={playlist[7].album.images[0].url} />
            <p className='s8'>{playlist[7].name}\</p>
            <p className='a8'>{playlist[7].artists[0].name}</p>
            <p className='num8'>8</p>
        </div>
    )
}

export function Song9(){
    const { state } = useLocation();
    const { playlist } = state;
    return(
        <div id='song9'>
            <img className='c9' src={playlist[8].album.images[0].url} />
            <p className='s9'>{playlist[8].name}</p>
            <p className='a9'>{playlist[8].artists[0].name}</p>
            <p className='num9'>9</p>
        </div>
    )
}

export function Song10(){
    const { state } = useLocation();
    const { playlist } = state;
    return(
        <div id='song10'>
            <img className='c10' src={playlist[9].album.images[0].url} />
            <p className='s10'>{playlist[9].name}</p>
            <p className='a10'>{playlist[9].artists[0].name}</p>
            <p className='num10'>10</p>
        </div>
    )
}

export function Song11(){
    const { state } = useLocation();
    const { playlist } = state;
    return(
        <div id='song11'>
            <img className='c11' src={playlist[10].album.images[0].url} />
            <p className='s11'>{playlist[10].name}</p>
            <p className='a11'>{playlist[10].artists[0].name}</p>
            <p className='num11'>11</p>
        </div>
    )
}

export function Song12(){
    const { state } = useLocation();
    const { playlist } = state;
    return(
        <div id='song12'>
            <img className='c12' src={playlist[11].album.images[0].url} />
            <p className='s12'>{playlist[11].name}</p>
            <p className='a12'>{playlist[11].artists[0].name}</p>
            <p className='num12'>12</p>
        </div>
    )
}

export function Song13(){
    const { state } = useLocation();
    const { playlist } = state;
    return(
        <div id='song13'>
            <img className='c13' src={playlist[12].album.images[0].url} />
            <p className='s13'>{playlist[12].name}</p>
            <p className='a13'>{playlist[12].artists[0].name}</p>
            <p className='num13'>13</p>
        </div>
    )
}

export function Song14(){
    const { state } = useLocation();
    const { playlist } = state;
    return(
        <div id='song14'>
            <img className='c14' src={playlist[13].album.images[0].url} />
            <p className='s14'>{playlist[13].name}</p>
            <p className='a14'>{playlist[13].artists[0].name}</p>
            <p className='num14'>14</p>
        </div>
    )
}

export function Song15(){
    const { state } = useLocation();
    const { playlist } = state;
    return(
        <div id='song15'>
            <img className='c15' src={playlist[14].album.images[0].url} />
            <p className='s15'>{playlist[14].name}</p>
            <p className='a15'>{playlist[14].artists[0].name}</p>
            <p className='num15'>15</p>
        </div>
    )
}


function Play(){
    return(
        <p className='play'>PLAY</p>
    )
}

function Save(){
    return(
        <p className='save'>SAVE IN SPOTIFY</p>
    )
}


function Playlistplay({token}){
    const [userId, setUserId] = useState("");
    const { state } = useLocation();
    const { playlist } = state;
    var playlist_array = [];
    for(let i = 0 ; i<15 ; i++){
        playlist_array.push(playlist[i].uri)
    }
    useEffect(() =>{
    spotifyApi.setAccessToken({token}.token);
    spotifyApi.getMe().then(user => {
        setUserId(user?.id);
      })
    }

    )

    function addsongs(results){
        spotifyApi.addTracksToPlaylist(results.id, playlist_array)
        alert("Playlist created");
    }

    function create(){
        spotifyApi.createPlaylist(userId , {
            "name": "Mood Playlist",
            "description": "The perfectly curated mood playlist",
            "public": false
          }, (error , results) => addsongs(results)
    
          
        )
          //spotifyApi.addTracksToPlaylist())
        }

    
          
    
    

    return(
        <div>
            <NamesPlaylist />
            <Song1 />
            <Song2 />
            <Song3 />
            <Song4 />
            <Song5 />
            <Song6 />
            <Song7 />
            <Song8 />
            <Song9 />
            <Song10 />
            <Song11 />
            <Song12 />
            <Song13 />
            <Song14 />
            <Song15 />
            {/* <Play /> */}
            <button id="createp" onClick = {create} >Create playlist</button>
            <Save />
        </div>
    )
}

export default Playlistplay