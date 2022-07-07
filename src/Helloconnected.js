import React from 'react'
import './hello-connected.css'

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
            <img className='spotifylogo' src="./spotifylogo.png" width = '40px'/>
        </div>
    )
}

function App(){
    return(
        <div>
            <HelloName />
            <Greeting />
            <SpotifyConnected />
        </div>
    )

}

export default Helloconnected