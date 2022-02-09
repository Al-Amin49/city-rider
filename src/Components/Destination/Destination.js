import React, {useState} from 'react'

import Direction from '../Direction/Direction';
import { GoogleMap, LoadScript, Marker} from '@react-google-maps/api';
function Destination(){
const [origin, setOrigin]= useState('')
const [destination, setDestination]=useState('');

// const containerStyle = {
//   width: '400px',
//   height: '400px'
// };

// const location = {
//   lat: 24.903560,
//   lng: 91.873611
// };
// const onLoad = marker => {
//     console.log('marker: ', marker)
//   }

  return (
    <div>
      <div className="col-md-4">
      <input type="text" placeholder="Starting From" OnBlur={e=>setOrigin(e.target.value)} />
      <input type="text" placeholder="Going From" OnBlur={e=>setDestination(e.target.value)} />
      </div>

     <div className="col-md-8">
     <Direction orgin={origin} destination={destination}/>
     {/* <LoadScript
      googleMapsApiKey="AIzaSyBk-DugQmwxHEecSzaerrv7BUkxfEklbJA"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={location}
        zoom={10}
      >
            {/* marker  */}
          {/* <Marker
      onLoad={onLoad}
      position={location}
    />
      </GoogleMap>
    </LoadScript> */} 
     </div>
   
    </div>
  );
}

export default Destination;
