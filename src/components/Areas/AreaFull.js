import React from 'react';
import { connect } from 'react-redux';
import AreaChart from './AreaChart';
import AreaCardFull from './AreaCardFull';
import {MdArrowBack} from 'react-icons/md';

export function AreaFull({ data, openArea }) {

    return (
        <div className="areafull-container">
            
            <div>
                <div style={{display: 'flex', alignItems: 'center', margin: "20px 0"}}>
                    <div  onClick={openArea} style={{ marginRight: 20, width:40, height: 40, borderRadius: "50%", border: "solid 2px #424242", display: 'flex', justifyContent: 'center', alignItems:'center'}}>
                     <MdArrowBack color="#424242" size={30} />
                    </div>
                    <h2 style={{ margin: "0" }}>{data.name}</h2>
                </div>
                <AreaCardFull area={data} />
                <div className="areafull">
                    <div>
                        <h3>Precipitação (mm)</h3>
                        <AreaChart data={data.weather.precipitation} reverse color='rgb(63, 81, 181)' />
                    </div>
                    <div>
                        <h3>Temperatura  (°C)</h3>
                        <AreaChart data={data.weather.temperature} reverse color='rgb(18, 109, 179)' />
                    </div>
                    <div>
                        <h3>Umidade (g/Kg)</h3>
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
