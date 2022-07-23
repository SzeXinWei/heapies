import React from 'react'
import './Artistsconfirmed.css'
import circle from './images/circle.png'
import {useNavigate , useLocation} from "react-router-dom"

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
            <button onClick={() => {navigate("/Artists" , { state: {emotions} })}}>I want to reselect</button>
            <button onClick={() => {navigate("/Playlistplay")}}>Generate</button>

        </div>
    )
}

function Artistsconfirmed(){
    
    
    return(
        <div>
            <Comment />
            <Artists />
            <Confirm />
        </div>
    )
}

export default Artistsconfirmed