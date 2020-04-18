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
        tetaCC,
        tetaPMP,
        soilHumidity,
        soilDepth,
        irrigationSystem,
        leaf,
        percentimeter,
        efficiency,
        irrigationType,
        spacing,
        population,
        variety,
        size,
        boundary,
        nearStation
    } = area;

    const soil = getSoil(soilType);
    const culture = getCulture(cultureType);

    return (
        <div className="area-card-full">
            <div className="area-card-props">
                <div className="area-card-image-container">
                    <div>
                        <img className="area-card-image" src={imageFile} alt={name} />
                        <div style={{padding: 12}}>
                            <p>lat, lon (center): {boundary.center.latitude}, {boundary.center.longitude}</p> 
                            <p>altitude: ≅ {nearStation[0].altitude}m</p>
                        </div>
                    </div>
                </div>
                <div style={{ display: 'flex', flexGrow: 1, flexDirection: 'column' }}>
                    <div style={{ display: 'flex', borderBottom: "solid 1px #c3c3c3" }}>
                        <ul style={{ padding: "0 20px" }}>
                            <li><h3>{`≅ ${size ? size : 'N/A'} ha`}</h3></li>
                            <li><b>Data de plantio: </b>{new Date(sowingDate).toLocaleDateString('pt-BR', { dateStyle: 'short' })}</li>
                            <li><b>Dias de ciclo: </b>{cycleDays}</li>
                            <li><h4>Solo</h4></li>
                            <li><b>θcc: </b>{tetaCC}</li>
                            <li><b>θpmp: </b>{tetaPMP}</li>
                            <li><b>Umidade: </b>{soilHumidity}</li>
                            <li><b>Profundidade: </b>{soilDepth}</li>
                            <li><h4>Irrigação</h4></li>
                            {
                                irrigationSystem === 'IRRIGATED' ? (
                                    <div>
                                        <li><b>Tipo: </b>{irrigationType}</li>
                                        <li><b>Percentímetro: </b>{percentimeter}</li>
                                        <li><b>Folha: </b>{leaf}</li>
                                        <li><b>Eficiência: </b>{efficiency}</li>
                                    </div>
                                ) : (
                                        <li><b>NA</b></li>
                                    )
                            }
                            <li><h4>Outros</h4></li>
                            <li><b>Variedade: </b>{variety}</li>
                            <li><b>População: </b>{population}</li>
                            <li><b>Espaçamento: </b>{spacing}</li>
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
