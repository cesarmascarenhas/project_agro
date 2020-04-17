import React from 'react';
import { connect } from 'react-redux';
import AreaChart from './AreaChart';
import AreaCard from './AreaCard';

export function Area({ data, openArea }) {

    return (
        <div className="area-container" onClick={openArea}>
            <div className="area">
                <AreaCard area={data} openArea={null} />
                <h3>Precipitação  para hoje (mm)</h3>
                <AreaChart data={data.weather.precipitation} reverse color='rgb(63, 81, 181)' />
                <h3>Temperatura para hoje (°C)</h3>
                <AreaChart data={data.weather.temperature} reverse color='rgb(18, 109, 179)' />
                <h3>Umidade Para Hoje (g/Kg)</h3>
                <AreaChart data={data.weather.humidity} reverse color='rgb(0, 188, 212)' />
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(Area);
