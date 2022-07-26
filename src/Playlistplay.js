import React from 'react'
import './Playlistplay.css'
import circle from './images/circle.png'
import SpotifyWebApi from 'spotify-web-api-js'

const spotifyApi = new SpotifyWebApi();

export function NamesPlaylist(){
    return(
        <h1 className='namesplaylist'>Name's playlist &lt;3 </h1>
    )
}

export function Song1(){
    return(
        <div id='song1'>
            <img className='c1' src={circle} />
            <p className='s1'>SONG</p>
            <p className='a1'>ARTIST</p>
            <p className='num1'>1</p>
        </div>
    )
}

export function Song2(){
    return(
        <div id='song2'>
            <img className='c2' src={circle} />
            <p className='s2'>SONG</p>
            <p className='a2'>ARTIST</p>
            <p className='num2'>2</p>
        </div>
    )
}

export function Song3(){
    return(
        <div id='song3'>
            <img className='c3' src={circle} />
            <p className='s3'>SONG</p>
            <p className='a3'>ARTIST</p>
            <p className='num3'>3</p>
        </div>
    )
}

export function Song4(){
    return(
        <div id='song4'>
            <img className='c4' src={circle} />
            <p className='s4'>SONG</p>
            <p className='a4'>ARTIST</p>
            <p className='num4'>4</p>
        </div>
    )
}

export function Song5(){
    return(
        <div id='song5'>
            <img className='c5' src={circle} />
            <p className='s5'>SONG</p>
            <p className='a5'>ARTIST</p>
            <p className='num5'>5</p>
        </div>
    )
}

export function Song6(){
    return(
        <div id='song6'>
            <img className='c6' src={circle} />
            <p className='s6'>SONG</p>
            <p className='a6'>ARTIST</p>
            <p className='num6'>6</p>
        </div>
    )
}

export function Song7(){
    return(
        <div id='song7'>
            <img className='c7' src={circle} />
            <p className='s7'>SONG</p>
            <p className='a7'>ARTIST</p>
            <p className='num7'>7</p>
        </div>
    )
}

export function Song8(){
    return(
        <div id='song8'>
            <img className='c8' src={circle} />
            <p className='s8'>SONG</p>
            <p className='a8'>ARTIST</p>
            <p className='num8'>8</p>
        </div>
    )
}

export function Song9(){
    return(
        <div id='song9'>
            <img className='c9' src={circle} />
            <p className='s9'>SONG</p>
            <p className='a9'>ARTIST</p>
            <p className='num9'>9</p>
        </div>
    )
}

export function Song10(){
    return(
        <div id='song10'>
            <img className='c10' src={circle} />
            <p className='s10'>SONG</p>
            <p className='a10'>ARTIST</p>
            <p className='num10'>10</p>
        </div>
    )
}

export function Song11(){
    return(
        <div id='song11'>
            <img className='c11' src={circle} />
            <p className='s11'>SONG</p>
            <p className='a11'>ARTIST</p>
            <p className='num11'>11</p>
        </div>
    )
}

export function Song12(){
    return(
        <div id='song12'>
            <img className='c12' src={circle} />
            <p className='s12'>SONG</p>
            <p className='a12'>ARTIST</p>
            <p className='num12'>12</p>
        </div>
    )
}

export function Song13(){
    return(
        <div id='song13'>
            <img className='c13' src={circle} />
            <p className='s13'>SONG</p>
            <p className='a13'>ARTIST</p>
            <p className='num13'>13</p>
        </div>
    )
}

export function Song14(){
    return(
        <div id='song14'>
            <img className='c14' src={circle} />
            <p className='s14'>SONG</p>
            <p className='a14'>ARTIST</p>
            <p className='num14'>14</p>
        </div>
    )
}

export function Song15(){
    return(
        <div id='song15'>
            <img className='c15' src={circle} />
            <p className='s15'>SONG</p>
            <p className='a15'>ARTIST</p>
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
var username = "";
function test({token}){


    spotifyApi.getMe().then(user => {
        username = user.id;
        console.log(username)
    }
    )
    spotifyApi.createPlaylist(username , "testing playlist").then(
        function(data){
            console.log(data);
        }
    )
    alert("Playlist created");

}

function Playlistplay(){
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
            <Play />
            <Save />
            <button onClick={test}>Create playlist</button>
        </div>
    )
}

export default Playlistplay