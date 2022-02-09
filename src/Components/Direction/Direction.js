
import React,{useState} from 'react'
import { GoogleMap, LoadScript,DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const location = {
  lat: 24.903560,
  lng: 91.873611
};


function Direction(origin, destination) {
    const [directionResponse, setDirectionResponse]=useState(null);
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyBk-DugQmwxHEecSzaerrv7BUkxfEklbJA"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={location}
        zoom={10}
      >
          {
              origin !=='' && destination!=='' && <DirectionsService
              // required
              options={{ 
                destination: destination,
                origin: origin,
                travelMode: 'DRIVING'
              }}
              // required
              callback={
                  res=>{
                      if(res!==null){
                          setDirectionResponse(res)
                      }
                  }
              }
              
            />
          }
                {
                    directionResponse  &&  <DirectionsRenderer
                    // required
                    options={{ 
                      directions: directionResponse
                    }}
                    />
                }
                
   
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Direction)