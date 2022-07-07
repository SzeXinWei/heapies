import Login from './Login'
import React, { useEffect, useState } from "react";
import { getTokenFromUrl } from './spotify';
import Helloconnected from './Helloconnected';

function App() {
  const [token, setToken] = useState(null);

  useEffect(() =>{
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token){
      setToken(_token)
    }

    console.log(_token);
  }, []);

  return (
  <div className = "app">
    {
      token ? (
        <Helloconnected />
      ) : (
        <Login />
      )
    }
        
    </div>
  );
}

export default App;
