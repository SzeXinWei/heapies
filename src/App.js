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

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);
  const [username, setUsername] = useState("");
  useEffect(() =>{
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token){
      setToken(_token)

      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        setUsername(user?.display_name);
        console.log(user?.display_name);
        console.log(user);
      })  
      
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
            <Route path="/Artists" element = {<Final_Artists/>}/>
            <Route path="/Artistsconfirmed" element = {<Artistsconfirmed/>}/>
            <Route path="/Playlistplay" element = {<Playlistplay/>}/>


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
