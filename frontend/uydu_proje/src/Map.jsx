import {React, useState} from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, useMap } from 'react-leaflet';
import 'C:/uydu_proje/frontend/uydu_proje/node_modules/leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect } from 'react';
import axios from 'axios';
import Filtreler from './Filtreler';


delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

function Map({ marker, setMarker, search, setSearch,baslangic,bitis,setSatelliteImages, coordinates, setCoordinates}) {
 
  

  // Harita tıklama olayını yöneten LocationMarker bileşeni
  const LocationMarker = () => {
    useMapEvents({
      click(e) {
        const { lat, lng } = e.latlng;
        setCoordinates({ lat, lng });
        fetchSatelliteImages(lat, lng);
        setMarker({ lat, lng });
      },
    });

    return coordinates === null ? null : (
      <Marker position={coordinates}></Marker>
    );
  };


  const CenterMap = () => {
    const map=useMap();
    if(marker){
      map.setView([marker.lat,marker.lng],13);
    }
    return null;

  }
  const fetchSatelliteImages= async (lat,lng)=>{

    try{
      const response= await axios.post('http://localhost:5000/satellite_images', {
        latitude:lat,
        longitude:lng,
        startTime:baslangic,
        endTime:bitis,
      });   
      setSatelliteImages({start:response.data.baslangicImageUrl, end:response.data.bitisImageUrl});

    }
    catch(error){
      console.error("Error fetching satellite images", error);
    };
  }
  

 

  // Haritanın merkez noktası (latitude, longitude) ve yakınlaştırma seviyesini belirliyoruz
  const position = [51.505, -0.09]; // Londra örneği
  return (
    <>
    
    <div className="harita" style={{ flex: 8 }}>
      <MapContainer center={position} zoom={13} style={{ height: '60vh', width: '100%' }}>
        {/* TileLayer, haritaya taban katmanını ekler */}
        <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
                />
        <LocationMarker />
        <CenterMap/>
        {marker && <Marker position={[marker.lat, marker.lng]}/>}
      </MapContainer>
    </div>
    </>
  );
};


export default Map;