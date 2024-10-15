import React from 'react';
import Filtreler from './Filtreler.jsx'
import Map from './Map.jsx'
import Header from './Header.jsx'
import Eski_goruntu from './Eski_goruntu.jsx'
import Yeni_goruntu from './Yeni_goruntu.jsx'
import Sonuclar from './sonuclar.jsx'
import { useState } from 'react';





function App() {
  const [marker, setMarker] = useState(null);
  const [search, setSearch] = useState("");

  

  return (

    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Header />
      <div style={{ display: 'flex', flex: 1, flexDirection: 'row' }}>

        <Filtreler marker={marker} setMarker={setMarker} search={search} setSearch={setSearch} />
        <Map marker={marker} setMarker={setMarker} search={search} setSearch={setSearch}/>
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button className='buttonum'>Göster</button>
      </div>
      <div style={{ display: 'flex', flex: 1, flexDirection: 'row' }} >

      <Eski_goruntu/>
      <Yeni_goruntu/>

      </div>

      <div style={{ display: 'flex' }}>
        <Sonuclar/>
      </div>



    </div>
  )
}

export default App
