import React from 'react'
import './Artistsconfirmed.css'
import circle from './images/circle.png'

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
            <p className='artist2'>Artist 1</p>
            <img className='c3' src={circle} />
            <p className='artist3'>Artist 1</p>
        </div>
    )
}

function Confirm(){
    return(
        <div>
            <p className='confirm'>CONFIRM</p>
            <p className='reselect'>I want to reselect.</p>
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