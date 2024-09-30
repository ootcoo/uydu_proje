import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'C:/uydu_proje/node_modules/leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect } from 'react';


delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'leaflet/dist/images/marker-icon-2x.png',
  iconUrl: 'leaflet/dist/images/marker-icon.png',
  shadowUrl: 'leaflet/dist/images/marker-shadow.png',
});

function Map(){
// Leaflet iconlarının düzgün görünmesi için aşağıdaki adımı eklemeliyiz



  // Haritanın merkez noktası (latitude, longitude) ve yakınlaştırma seviyesini belirliyoruz
  const position = [51.505, -0.09]; // Londra örneği
    return(
  <div className="harita" style={{flex:8}}>
    <MapContainer center={position} zoom={13} style={{ height: '60vh', width: '100%' }}>
      {/* TileLayer, haritaya taban katmanını ekler */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* Marker ile bir nokta belirleyip Popup ile açıklama ekleyebiliriz */}
      <Marker position={position}>
        <Popup>
          Buradasınız!
        </Popup>
      </Marker>
    </MapContainer>
  </div>
    );
};


  export default Map;