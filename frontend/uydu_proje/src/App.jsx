import React from 'react';
import Filtreler from './Filtreler.jsx'
import Map from './Map.jsx'
import Header from './Header.jsx'
import Eski_goruntu from './Eski_goruntu.jsx'
import Yeni_goruntu from './Yeni_goruntu.jsx'
import Sonuclar from './sonuclar.jsx'
import { useState } from 'react';
import handleChange from './Filtreler.jsx'
import fetchSatelliteImages from './Map.jsx'





function App() {
  const [marker, setMarker] = useState(null);
  const [search, setSearch] = useState("");
  const [baslangic, setBaslangic] = useState('');
  const [bitis, setBitis] = useState('');
  const [coordinates, setCoordinates] = useState(null);
  const [satelliteImages, setSatelliteImages] = useState({ start: null, end: null });

  
  

  const handleFilterChange = () => {
  
    if (coordinates) {  // Koordinatlar var ise görüntüleri çek
        fetchSatelliteImages(coordinates.lat, coordinates.lng);
    }
};
  return (

    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Header />
      <div style={{ display: 'flex', flex: 1, flexDirection: 'row' }}>

        <Filtreler marker={marker} setMarker={setMarker} search={search} setSearch={setSearch} baslangic={baslangic} bitis={bitis} setBaslangic={setBaslangic} setBitis={setBitis} onFilterChange={handleFilterChange} />
        <Map marker={marker} setMarker={setMarker} search={search} setSearch={setSearch} coordinates={coordinates} setCoordinates={setCoordinates} setSatelliteImages={setSatelliteImages} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button className='buttonum' onClick={handleChange} >Göster</button>
      </div>
      <div style={{ display: 'flex', flex: 1, flexDirection: 'row' }} >

      <Eski_goruntu setSatelliteImages={setSatelliteImages} satelliteImages={satelliteImages}/>
      <Yeni_goruntu setSatelliteImages={setSatelliteImages} satelliteImages={satelliteImages}/>

      </div>

      <div style={{ display: 'flex' }}>
        <Sonuclar/>
      </div>



    </div>
  )
}

export default App
