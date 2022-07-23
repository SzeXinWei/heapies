import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Songs.css'

export function TellMe(){
    return(
        <h1 className='tellme'>Now... Tell me about your favourite songs</h1>
    )
}

export function SearchList(){
    return(
        <div className='searchlist'>
            Search for your favourite SONGS here.
        </div>
    )
}

export function DescSkip(){
    return(
        <div>
            <p className='select'>SELECT UP TO 3</p>
            <p className='skip'>SKIP</p>
        </div>
    )
}

function Songs(){
    let navigate = useNavigate();
    return(
        <div>
            <TellMe />
            <SearchList />
            <DescSkip />
            <button onClick={() => {navigate("/Songsselected")}}>Next</button>
        </div>
    )
}

export default Songs