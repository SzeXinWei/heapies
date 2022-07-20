import React from 'react'
import './Helloconnected.css'
import wink from './images/wink.png'
import logo from './images/spotifylogo.png'
import {useNavigate} from "react-router-dom"


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

function Helloconnected({username}){
    let navigate = useNavigate();
    return(
        <div>

            <h1 className='name'>Hello {username}</h1>
            <Greeting />
            <Wink />
            <SpotifyConnected />
            <button onClick={() => {navigate("/Feelings")}}>Go To Feelings</button>
        </div>
    )

}

export default Helloconnected