import React from 'react';
import * as AREA from '../../helpers/area';
import WeatherCard from '../Weather/WeatherCard';

export default function AreaCardFull({ area }) {

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
        // _id,
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
        <div className="area-card-full">
            <div className="area-card-props">
                <div className="area-card-image-container">
                    <img className="area-card-image" src={imageFile} alt={name} />
                </div>
                <div style={{display: 'flex', flexGrow: 1, flexDirection: 'column'}}>
                    <div style={{display: 'flex', borderBottom: "solid 1px #c3c3c3"}}>
                        <ul style={{ padding: "0 20px" }}>
                            {/* <li><h2 style={{ margin: "0" }}>{name}</h2></li> */}
                            <li><h3>{`≅ ${size ? size : 'N/A'} ha`}</h3></li>
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
                    <WeatherCard data={area.weather.week} />
                </div>
            </div>
        </div>
    )
}
