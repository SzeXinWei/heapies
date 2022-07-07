import React from 'react'
import './Helloconnected.css'
import wink from './images/wink.png'
import logo from './images/spotifylogo.png'

function HelloName(){
    return (
        <h1 className='name'>Hello Name</h1>
    )
}

function Greeting(){
    return(
        <h5 className='greeting'>How are you today?</h5>
    )
}

function SpotifyConnected(){
    return(
        <div>
            <h4 className='sc'>SPOTIFY CONNECTED</h4>
            <img className='spotifylogo' src={logo} width = '40px'/>
        </div>
    )
}

function Wink(){
    return(
        <img className='wink' src={wink} />
    )
}

function Helloconnected(){
    return(
        <div>
            <HelloName />
            <Greeting />
            <Wink />
            <SpotifyConnected />
        </div>
    )

}

export default Helloconnected