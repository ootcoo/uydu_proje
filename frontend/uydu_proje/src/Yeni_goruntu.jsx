
import React from 'react';


function Yeni_goruntu(satelliteImages){

  return(
<div className="yeni_goruntu" style={{flex:2}}>
<h3>Bitiş Zamanı için Uydu Görüntüsü:</h3>
{satelliteImages.end && (
                <div>
                    
                    <img src={satelliteImages.end} alt="End Satellite" style={{ width: '100%', height: 'auto' }} />
                </div>
            )}
</div>

  )
}
export default Yeni_goruntu