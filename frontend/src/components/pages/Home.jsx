import GoogleMapReact from 'google-map-react'
import React from 'react';
import {GoogleMap, LoadScript} from '@react-google-maps/api'
import axios from 'axios'
import { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await axios.get('http://localhost:8000/api/search_nearby/', {
        params: {
          latitude: 40.7128,
          longitude: -74.0060
        }
      });

      const data = response.data;
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      {/* Your component JSX */}
    </div>
  );
}

export default MyComponent;

// const MapContainer = () => {
//     const containerStyle = {
//         width: '400px',
//         height: '400px',
//     };
//     const center = {
//         lat: 37.7749,
//         lng: -122.4194,
//     };

//     return(
//         <div>
//             <LoadScript googleMapsApiKey='AIzaSyBA33G2mozyNhZHxTAlPOMYspt3WsXFfoA'>
//                 <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>

//                 </GoogleMap>
//             </LoadScript>
//         </div>
//     )
// };
// export default function Home() {
//     return <MapContainer />
// }