import React from 'react'
import { useState } from "react";
import './Artists.css'
import circle from './images/circle.png'
import { useNavigate, useLocation } from "react-router-dom"
import SpotifyWebApi from 'spotify-web-api-js';

const test = [];
const spotifyApi = new SpotifyWebApi();
function Who() {
  return (
    <h1 className='who'>SO... WHO DO YOU LISTEN TO?</h1>

  )
}

// const ArtistIds = [
//     {
//       id: "artist1"
//     },
//     {
//       id: "artist2"
//     },
//     {
//       id: "artist3"
//     },
//     {
//       id: "artist4"
//     },
//     {
//       id: "artist5"
//     },
//     {
//       id: "artist6"
//     }
//   ];

// const MultipleCheckBoxComponent = () => {
//     const [checked, setChecked] = useState(false);
//     return (
//       <div>
//           {ArtistIds.map((id, index) => {
//             console.log(id.id);
//             return (
//               <div key={index} className = {id}>
//                     <input
//                       type="checkbox"
//                       id={id}
//                       name={id}
//                       value={id}
//                     />
//                 </div>
//             );
//           })}
//       </div>
//     );
//   };

const Checkbox = ({ id, label, value, onChange }) => {
  return (
    <div>
      <input
        id={id}
        type="checkbox"
        checked={value}
        onChange={onChange}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

function Artists() {
  return (
    <div>
      <img id='artist1' src={circle} />
      <Checkbox
        id="artist1"
        label=""
      // value={checked} 
      // onChange={onChange} 
      />
      <img id='artist2' src={circle} />
      <Checkbox
        id="artist2"
        label=""
      // value={checked} 
      // onChange={onChange} 
      />
      <img id='artist3' src={circle} />
      <Checkbox
        id="artist3"
        label=""
      // value={checked} 
      // onChange={onChange} 
      />
      <img id='artist4' src={circle} />
      <Checkbox
        id="artist4"
        label=""
      // value={checked} 
      // onChange={onChange} 
      />
      <img id='artist5' src={circle} />
      <Checkbox
        id="artist5"
        label=""
      // value={checked} 
      // onChange={onChange} 
      />
      <img id='artist6' src={circle} />
      <Checkbox
        id="artist6"
        label=""
      // value={checked} 
      // onChange={onChange} 
      />
      {/* <MultipleCheckBoxComponent/> */}
    </div>
  )
}

function SelectDesc() {
  return (
    <div className='selectdesc'>
      SELECT UP TO 3
    </div>
  )

}



function Final_Artists({ topArtist }) {
  // console.log(topArtist);
  let navigate = useNavigate();
  const { state } = useLocation();
  const { emotions } = state;
  const [selectedArtists, setSelectedArtists] = useState([])

  // for (let i = 0; i < 6; i++) {
  //   console.log({ topArtist }.topArtist.items[i].name)
  // }

  const handleChange = e => {
    var options = e.target.options;
    var value = [];
    for (var i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        // value.push(options[i].value);
        value.push({ topArtist }.topArtist.items[i])
      }
    }
    // console.log(value)
    setSelectedArtists(value)
  }

  return (
    <div>
      <Who />
      <Artists />
      <SelectDesc />

      <div>
        {topArtist.items.slice(0, 6).map((artist, index) => <img id={`artist${index + 1}`} src={artist.images[0].url} key={artist.images[0].url}/>)}
      </div>

      <div id="select_artist">
      <label style={{"fontSize": "30px", "color": "white"}}>Choose your artists:</label>
      <select style= {{"fontSize": "30px"}} name="cars" size = '6' width = '100' id="cars" multiple onChange={e => handleChange(e)}>
        {topArtist.items.slice(0, 6).map((artist, index) => <option value={artist.name} key={artist.name}>{artist.name}</option>)}
      </select>
      </div>
      

      <button id="next" onClick={() => { navigate("/Artistsconfirmed", { state: { emotions, selectedArtists } }) }}>Next</button>



    </div>
  )

}
export default Final_Artists