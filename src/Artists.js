import React from 'react'
import './Artists.css'
import circle from './images/circle.png'
import {useNavigate , useLocation} from "react-router-dom"
import SpotifyWebApi from 'spotify-web-api-js';

const test = [];
const spotifyApi = new SpotifyWebApi();
function Who(){
    return (
        <h1 className='who'>SO... WHO DO YOU LISTEN TO?</h1>

    )
}



function Artists(){
    return(
        <div>
            <img id='artist1' src={circle} />
            <img id='artist2' src={circle} />
            <img id='artist3' src={circle} />
            <img id='artist4' src={circle} />
            <img id='artist5' src={circle} />
            <img id='artist6' src={circle} />
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
    // let navigate = useNavigate();
    // const { state } = useLocation();
    // const { emotions } = state;
    // console.log(emotions);
    return(
    <div>
        <h2 className='nothere'>Not here? No worries.</h2>
        <h2 className='searchartist'>Search for your favourite ARTISTS here.</h2>
        {/* <button onClick={() => {navigate("/Artistsconfirmed" , { state: {emotions} })}}>Next</button>
        <h2 className='next'>NEXT</h2> */}
        
    </div>
    )

}

// // Api call for searching for artist 
// // Need to create a function to call the api so that the search artist variable is not hardcoded
// // console log helps to check and if yall need the image to display just call it out from the object
// spotifyApi.searchArtists('Justin Bieber').then(
//     function (data) {
//       console.log('Search artists by "Love"', data);
//       console.log(data.artists.href)
//       for (let i = 0; i < data.artists.items.length; i++) {
//         console.log(data.artists.items[i])
//       }
      
      
//     },
//     function (err) {
//       console.error(err);
//     }
//   );


//   function getTopArtist({topArtist}){
//     return(
//         <div>
//         <h1>{topArtist}</h1>
//         TEST
//         </div>
//     )
// }




function Final_Artists({topArtist}){
    console.log(topArtist);
    let navigate = useNavigate();
    const { state } = useLocation();
    const { emotions } = state;
    for (let i = 0; i < 6; i++) {
        console.log({topArtist}.topArtist.items[i].images[0])
      }

    return(
        <div>
            <Who />
            <Artists />
            <SelectDesc />
            <Search />
            <div>
                {topArtist.items.slice(0,6).map((artist,index)=><img id = {`artist${index+1}`} src={artist.images[0].url}/>)}    
            </div>
            <button onClick={() => {navigate("/Artistsconfirmed" , { state: {emotions} })}}>Next</button>
            
            
            
        </div>
    )

    }
export default Final_Artists