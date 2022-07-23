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
import Songs from './Songs';
import Songsselected from './Songsselected';
import Songsconfirmation from './Songsconfirmation';

const spotifyApi = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);
  const [username, setUsername] = useState("");
  const [userID, setUserID] = useState("");

  useEffect(() =>{
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token){
      setToken(_token)

      spotifyApi.setAccessToken(_token);

      spotifyApi.getMe().then(user => {
        console.log(user);
        setUserID(user?.id);
        setUsername(user?.display_name);
        console.log(user?.display_name);
        console.log(user);
      })  

      // Api to get their Top artist
      spotifyApi.getMyTopArtists(userID, {limit: 10}).then(
        function(data){
            console.log(data);
            for (let i = 0; i < 5; i++) {
                console.log(data.items[i])
              }
        }
    )

       //Api to get their Top tracks
       spotifyApi.getMyTopTracks(userID).then(
        function(data){
            console.log(data);
            for (let i = 0; i < 5; i++) {
                console.log(data.items[i])
              }
        }
    )
      
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
            <Route path="/Artists" element = {<Final_Artists userID={userID}/>} />
            <Route path="/Artistsconfirmed" element = {<Artistsconfirmed/>}/>
            <Route path="/Playlistplay" element = {<Playlistplay/>}/>
            <Route path="/Songs" element = {<Songs/>}/>
            <Route path="/Songsselected" element = {<Songsselected/>}/>
            <Route path="/Songsconfirmation" element = {<Songsconfirmation/>}/>


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
