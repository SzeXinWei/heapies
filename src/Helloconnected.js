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
        <nav>
            <div className="text">
                <h1 className='name'>Hello {username}</h1>
                <Greeting />
            </div>

            <div className="wink">
                <Wink />
            </div>

            <div className="sc">
                <img className='spotifylogo' src={logo} width = '50px'/>
                <div className="padding"></div>
                <SpotifyConnected />
            </div>

            <button id="next" onClick={() => {navigate("/Feelings")}}>Next</button>
        </nav>   
    )

}

export default Helloconnected