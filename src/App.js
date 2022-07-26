import Login from './Login'
import React, { useEffect, useState } from "react";
import { getTokenFromUrl } from './spotify';
import Helloconnected from './Helloconnected';
import SpotifyWebApi from 'spotify-web-api-js';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Feelings from './Feelings';
import Final_Artists from './Artists';
import Artistsconfirmed from './Artistsconfirmed';
import Playlistplay from './Playlistplay';
import { isCompositeComponent } from 'react-dom/test-utils';

const spotifyApi = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);
  const [username, setUsername] = useState("");
  const [userID, setUserID] = useState("");
  const [topArtist, setTopArtist] = useState(null);
  const [topTracks, setTopTracks] = useState(null);
  var test = [];

  useEffect(() =>{
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    console.log(_token);

    if (_token){
      setToken(_token)
      console.log(_token);
      spotifyApi.setAccessToken(_token);

      spotifyApi.getMe().then(user => {
        console.log(user);
        setUserID(user?.id);
        setUsername(user?.display_name);
        console.log(user?.display_name);
        console.log(user);
      })  

      // Api to get their Top artist
      spotifyApi.getMyTopArtists(userID, {limit: 6}).then(
        function(data){
          setTopArtist(data);
            console.log(data);
            for (let i = 0; i < 5; i++) {
                console.log(data.items[i])
              }
        }
    )

       //Api to get their Top tracks
       spotifyApi.getMyTopTracks(userID).then(
        function(data){
          setTopTracks(data);
            console.log(data);
            for (let i = 0; i < 5; i++) {
              test[i] = (data.items[i].id);
                console.log(data.items[i].id);
              }
            setTopTracks(test);
        }
    )
        //Api to get recommendations
    // spotifyApi.getRecommendations(
    //   {seed_artists: "4NHQUGzhtTLFvgF5SZesLK",
    //   seed_genres: "Happy",
    //   seed_tracks: "0c6xIDDpzE81m2q797ordA"
    // } , (error , results) => console.log(results.tracks[1]) )
    
      
    }

  }, []);

  return (
  <div className = "app">
    {
      token ? (
        <Router>
          <Routes>
            <Route path="/" element = {<Helloconnected username={username}/>} />
            <Route path="/feelings" element = {<Feelings/>}/>
            <Route path="/Artists" element = {<Final_Artists topArtist = {topArtist}/>} />
            <Route path="/Artistsconfirmed" element = {<Artistsconfirmed topTracks = {topTracks}/>}/>
            {/* <Route path="/Playlistplay" element = {<Playlistplay token = {token}/>}/> */}
            <Route path="/Playlistplay" element = {<Playlistplay username={username}/>} />


          </Routes>
        </Router>
        
      ) : (
        <Login />
      )
    }
        
    </div>
  );
}

export default App;
