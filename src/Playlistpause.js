import React from 'react'
import './Playlistplay.css'
import circle from './images/circle.png'
import {NamesPlaylist, Song} from './Playlistplay.js'

function Pause(){
    return(
        <p className='pause'>PAUSE</p>
    )
}

function Save(){
    return(
        <p className='save'>SAVE IN SPOTIFY</p>
    )
}

function Playlistpause(){
    return(
        <div>
            <NamesPlaylist />
            <Song />
            <Pause />
            <Save />
        </div>
    )
}

export default Playlistpause