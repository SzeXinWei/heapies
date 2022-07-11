import React from 'react'
import './Songsconfirmation.css'
import circle from './images/circle.png'

function Comment(){
    return (
        <h1 className='comment'>OKAY, I LIKE IT PICASSO.</h1>
    )
}

function Songs(){
    return(
        <div>
            <img className='c1' src={circle} />
            <p className='s1'>SONG 1</p>
            <img className='c2' src={circle} />
            <p className='s2'>SONG 2</p>
            <img className='c3' src={circle} />
            <p className='s3'>SONG 3</p>
        </div>

    )
}

function GenerateButton(){
    return(
        <div className='generatebutton'>
            <p className='generate'>GENERATE PLAYLIST </p>
            <p className='reselect'>I want to reselect.</p>
        </div>
    )
}

function Songsconfirmation(){
    return(
        <div>
            <Comment />
            <Songs />
            <GenerateButton />
        </div>
    )
}

export default Songsconfirmation