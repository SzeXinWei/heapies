import React from 'react'
import './Artists.css'
import circle from './images/circle.png'
import {useNavigate} from "react-router-dom"

function Who(){
    return (
        <h1 className='who'>SO... WHO DO YOU LISTEN TO?</h1>

    )
}

function Artists(){
    return(
        <div>
            <img className='artist1' src={circle} />
            <img className='artist2' src={circle} />
            <img className='artist3' src={circle} />
            <img className='artist4' src={circle} />
            <img className='artist5' src={circle} />
            <img className='artist6' src={circle} />
        </div>
    )
}

function SelectDesc(){
    return(
        <div className='selectdesc'>
        SELECT UP TO 3
    </div>
    )

}


function Search(){
    let navigate = useNavigate();
    return(
    <div>
        <h2 className='nothere'>Not here? No worries.</h2>
        <h2 className='searchartist'>Search for your favourite ARTISTS here.</h2>
        <button onClick={() => {navigate("/Artistsconfirmed")}}>Next</button>
        {/* <h2 className='next'>NEXT</h2> */}
        
    </div>
    )

}

function Final_Artists(){
    
    return(
        <div>
            <Who />
            <Artists />
            <SelectDesc />
            <Search />
            
        </div>
    )
}

export default Final_Artists