import React from 'react';
import { connect } from 'react-redux';
import AreaChart from './AreaChart';
import AreaCardFull from './AreaCardFull';

export function AreaFull({ data, openArea }) {

    return (
        <div className="areafull-container" onClick={openArea}>
            
            <div>
                <AreaCardFull area={data} />

                <div className="areafull">
                    <div>
                        <h3>Precipitação  para hoje (mm)</h3>
                        <AreaChart data={data.weather.precipitation} reverse color='rgb(63, 81, 181)' />
                    </div>
                    <div>
                        <h3>Temperatura para hoje (°C)</h3>
                        <AreaChart data={data.weather.temperature} reverse color='rgb(18, 109, 179)' />
                    </div>
                    <div>
                        <h3>Umidade Para Hoje (g/Kg)</h3>
                        <AreaChart data={data.weather.humidity} reverse color='rgb(0, 188, 212)' />
                    </div>
                </div>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(AreaFull);
