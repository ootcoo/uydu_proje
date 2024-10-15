
import React from 'react';


function Eski_goruntu(satelliteImages){

  return(
<div className="eski_goruntu" style={{flex:2}}>
<h3>Başlangıç Zamanı için Uydu Görüntüsü:</h3>
{satelliteImages.start && (
                <div>
                    
                    <img src={satelliteImages.start} alt="Start Satellite" style={{ width: '100%', height: 'auto' }} />
                </div>
            )}
</div>

  )
}
export default Eski_goruntu