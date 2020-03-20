import React from 'react';
import * as AREA from '../../helpers/area';

export default function AreaCard({ area, openArea = null }) {

    function getCulture(type) {
        return AREA.culture.find(
            culture => culture.type === type
        )
    }

    function getSoil(type) {
        return AREA.soil.find(
            soil => soil.type === type
        )
    }

    const {
        _id,
        name,
        imageFile,
        cultureType,
        soilType,
        cycleDays,
        sowingDate,
        //notification,
        size
    } = area;

    const soil = getSoil(soilType);
    const culture = getCulture(cultureType);

    return (
        <div className="area-card" onClick={() => openArea(_id)}>
            <div className="area-card-image-container">
                <img className="area-card-image" src={imageFile} alt={name} />
            </div>
            <h3 style={{padding: "0 10px", margin: "10px 0 0 10px"}}>{name}</h3>
            <div className="area-card-props">
                <ul>
                    
                    <li><h4>{`≅ ${size ? size : 'N/A'} ha`}</h4></li>
                    <li>{`Data de plantio: ${new Date(sowingDate).toLocaleDateString('pt-BR', { dateStyle: 'short' })}`}</li>
                    <li>{`Dias de ciclo: ${cycleDays}`}</li>
                </ul>
                <div className="area-card-types">
                    <div>
                        {
                            <img src={soil.icon} alt={soil.label} />
                        }
                    </div>
                    <div>
                        {
                            <img src={culture.icon} alt={culture.label} />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
