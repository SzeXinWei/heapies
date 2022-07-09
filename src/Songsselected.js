import React from 'react'
import './Songsselected.css'
import circle from './images/circle.png'
import cross from './images/cross.png'
import {TellMe, SearchList, DescSkip} from './Songs.js'

function SongsSelected(){
    return(
        <div>
            <div className='song1'>
                <img className='c' src={circle} />
                <p>Song 1</p>
                <img className='cross' src={cross} />
            </div>
            <div className='song2'>
                <img className='c' src={circle} />
                <p>Song 2</p>
                <img className='cross' src={cross} />
            </div>
            <div className='song3'>
                <img className='c' src={circle} />
                <p>Song 3</p>
                <img className='cross' src={cross} />
            </div>
        </div>
    )
}

function Songsselected(){
    return(
        <div>
            <TellMe />
            <SongsSelected />
            <SearchList />
            <DescSkip />
        </div>
    )
}

export default Songsselected
