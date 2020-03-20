import React from 'react';
import { connect } from 'react-redux';
import AreaChart from './AreaChart';
import AreaCard from './AreaCard';

export function Area({ data }) {
    console.log(data)
    return (
        <div className="area-container">
            <div className="area">
            <AreaCard area={data} openArea={null} />
                <h3>Precipitação  para hoje (mm)</h3>
                <AreaChart data={data.weather.precipitation} />
                <h3>Temperatura para hoje (°C)</h3>
                <AreaChart data={data.weather.temperature} />
                <h3>Umidade Para Hoje (g/Kg)</h3>
                <AreaChart data={data.weather.humidity} />
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(Area);
