
import './Feelings.css'
import happy from './images/happy.png'
import angry from './images/angry.png'
import sad from './images/sad.png'
import party from './images/party.png'
import relaxed from './images/relaxed.png'
import {useNavigate} from "react-router-dom"
import React, { useEffect, useState } from "react";

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

function Sad(){
    let navigate = useNavigate();
    // const [emotions, setEmotions] = useState("");
    // setEmotions("Sad");
    // console.log(emotions);
    <button onClick ={() => {navigate("/Artists")}}>Go To Artists</button>
}

function Feelings(){
    let navigate = useNavigate();
    return(
        <div>
            <Greeting />
            <Emotions />
            <button onClick ={() => {navigate("/Artists" , {state: {emotions: "angry"}})}}>Angry</button>
            <button onClick ={() => {navigate("/Artists" , {state: {emotions: "Happy"}})}}>Happy</button>
            <button onClick ={() => {navigate("/Artists" , {state: {emotions: "sad"}})}}>sad</button>
            <button onClick ={() => {navigate("/Artists" , {state: {emotions: "party"}})}}>party</button>
            <button onClick ={() => {navigate("/Artists" , {state: {emotions: "relaxed"}})}}>relaxed</button>
           
        </div>
    )

}

export default Feelings