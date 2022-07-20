import React from 'react'
import './Feelings.css'
import happy from './images/happy.png'
import angry from './images/angry.png'
import sad from './images/sad.png'
import party from './images/party.png'
import relaxed from './images/relaxed.png'

function Greeting(){
    return (
        <div className='greeting'>
            <h1>HEY, CUTIE.</h1>
            <h1>HOW ARE WE FEELING TODAY?</h1>
        </div>

    )
}

function Emotions(){
    return(
        <div>
            <img className='happy' src={happy} />
            <img className='angry' src={angry} />
            <img className='sad' src={sad} />
            <img className='party' src={party} />
            <img className='relaxed' src={relaxed} />
        </div>
        )
}

function Feelings(){
    return(
        <div>
            <Greeting />
            <Emotions />
        </div>
    )

}

export default Feelings