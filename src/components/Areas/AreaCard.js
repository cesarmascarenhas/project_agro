import React from 'react';
import * as AREA from '../../helpers/area';
import * as TOOLS from '../../helpers/tools';

export default function AreaCard({ area, openArea = null }) {

    function getCultureIcon(type) {
        const annual = AREA.cultures.annual.find(
            culture => culture.type === type
        )
        const perennial = AREA.cultures.perennial.find(
            culture => culture.type === type
        )
    
        return annual ? annual : perennial;
    }
    
    function getSoilIcon(type) {
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
        size,
        bh
    } = area;

    const soil = getSoilIcon(soilType);
    const culture = getCultureIcon(cultureType);
    const irrigation = getLastComputedIrrigationToLabel(bh);


    function getLastComputedIrrigationToLabel(bh) {
        const last = bh.slice(-1)[0];
        return {
            label: Math.round(last.irrigation * 1000) / 1000,
            _createdAt: TOOLS.timestampToDateTimeShort(last._createdAt)
        }
    }

    function kmToHa(size) {
        return Math.round((size * 100) * 100) / 100;
    }

    return (
        <div className="area-card" onClick={() => openArea(_id)}>
            <div className="area-card-image-container">
                <img className="area-card-image" src={imageFile} alt={name} />
            </div>
            <h3 style={{ padding: "0 10px", margin: "10px 0 0 10px" }}>{name}</h3>
            <div className="area-card-props">
                <ul>

                    <li><h4>{`≅ ${size ? kmToHa(size) : 'N/A'} ha`}</h4></li>
                    <li>{`Data de plantio: ${new Date(sowingDate).toLocaleDateString('pt-BR', { dateStyle: 'short' })}`}</li>
                    <li>{`Dias de ciclo: ${cycleDays}`}</li>
                    {
                        bh.length > 0 && (
                            <li style={{color:'#437bce'}}>Sugestão de irrigação: {irrigation.label} ({irrigation._createdAt})</li>
                        )
                    }
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
