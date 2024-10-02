
import React from 'react';
import axios from 'axios';




function Filtreler({ marker, setMarker, search, setSearch }) {
  const HandleSearch = async () => {
    try {
      const response = await axios.get(`https://nominatim.openstreetmap.org/search?format=json&q=${search}`);
      if (response.data.length > 0) {
        const { lat, lon } = response.data[0];
        setMarker({ lat: parseFloat(lat), lng: parseFloat(lon) });
      }
       else {
        alert("Aradığınız konum bulunamadı");
      }
    }
    catch (error) {
      console.error("Error searching location", error);
    }
  };
  
  return (
    <div className="filtreler" style={{ flex: 2 }}>
      <h1>Filtreler</h1>

      <input type="text" value={search} placeholder="Arama yapın" onChange={(e) => { setSearch(e.target.value) }} style={{scale: '120%'}} />
    <button className="buttonum" onClick={HandleSearch}>Ara</button>

    </div>

  )
}
export default Filtreler