import React from 'react'
import './Playlistplay.css'
import circle from './images/circle.png'

export function NamesPlaylist(){
    return(
        <h1 className='namesplaylist'>Name's playlist &lt;3 </h1>
    )
}

export function Song(){
    return(
        <div className='song'>
            <img className='c' src={circle} />
            <p className='s'>SONG</p>
            <p className='a'>ARTIST</p>
            <p className='num'>1</p>
        </div>
    )
}

// based on how many songs are generated (test)

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

function Playlistplay(){
    return(
        <div>
            <NamesPlaylist />
            <Song />
            <Play />
            <Save />
        </div>
    )
}

export default Playlistplay