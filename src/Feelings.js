
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
            <h1 id="greeting1">HEY, CUTIE.</h1>
            <h1 id="greeting2">HOW ARE WE FEELING TODAY?</h1>
        </div>
    )
}

function Emotions(){
    return(
        <div>
            {/* <img className='happy' src={happy} />
            <img className='angry' src={angry} />
            <img className='sad' src={sad} />
            <img className='party' src={party} />
            <img className='relaxed' src={relaxed} /> */}
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

// emotions will be pass thru the navigate and state function can use that as a variable for recommendation api
function Feelings(){
    let navigate = useNavigate();
    return(
        <div>
            <Greeting />
            <Emotions />
            <button id="angry" onClick ={() => {navigate("/Artists" , {state: {emotions: "angry"}})}}><img src={angry} width="150px" height= "150px"/></button>
            <button id="happy" onClick ={() => {navigate("/Artists" , {state: {emotions: "Happy"}})}}><img src={happy} width="150px" height= "150px"/></button>
            <button id="sad" onClick ={() => {navigate("/Artists" , {state: {emotions: "sad"}})}}><img src={sad} width="150px" height= "150px"/></button>
            <button id="party" onClick ={() => {navigate("/Artists" , {state: {emotions: "party"}})}}><img src={party} width="150px" height= "150px"/></button>
            <button id="relaxed" onClick ={() => {navigate("/Artists" , {state: {emotions: "relaxed"}})}}><img src={relaxed} width="150px" height= "150px"/></button>
        </div>
    )

}

export default Feelings