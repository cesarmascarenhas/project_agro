import React from 'react';
import { connect } from 'react-redux';
import AreaChart from './AreaChart';
import AreaCardFull from './AreaCardFull';
import { MdArrowBack } from 'react-icons/md';

export function AreaFull({ data, openArea }) {

    function formatNearStationData(type, data) {
        return data.map((station, i) => {
            return {
                label: new Date(station._date).getHours() + "h",
                value: parseFloat(station[type])
            }
        })
    }

    function formatBHData(type, data) {
        return data.filter(bh => bh.range).map((bh, i) => {
            return {
                label: new Date(parseInt(bh._createdAt)).toLocaleDateString('pt-BR', { dateStyle: 'short' }),
                value: bh.range === false ? "" : parseFloat(bh[type])
            }
        })
    }

    return (
        <div className="areafull-container">

            <div>
                <div style={{ display: 'flex', alignItems: 'center', margin: "20px 0" }}>
                    <div onClick={openArea} style={{ marginRight: 20, width: 40, height: 40, borderRadius: "50%", border: "solid 2px #424242", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <MdArrowBack color="#424242" size={30} />
                    </div>
                    <h2 style={{ margin: "0" }}>{data.name}</h2>
                </div>
                <AreaCardFull area={data} />
                <h2>Balanço hídrico</h2>
                <div className="areafull">
                    {
                        formatBHData('etc', data.bh).length === 0 ? (
                            <h3 style={{color: "#ccc"}}>Fora do período de cultivo ou ainda não calculado.</h3>
                        ) : (
                                <div className="areafull">
                                    <div>
                                        <h3>ETc (mm)</h3>
                                        <AreaChart data={formatBHData('etc', data.bh)} reverse color='rgb(63, 81, 181)' />
                                    </div>
                                    <div>
                                        <h3>AFDi  (mm)</h3>
                                        <AreaChart data={formatBHData('AFDi', data.bh)} reverse color='rgb(18, 109, 179)' />
                                    </div>
                                    <div>
                                        <h3>Irrigação (mm))</h3>
                                        <AreaChart data={formatBHData('irrigation', data.bh)} reverse color='rgb(0, 188, 212)' />
                                    </div>
                                </div>
                            )
                    }

                </div>
                <h2>Últimas 24 horas</h2>
                <div className="areafull">
                    <div>
                        <h3>Precipitação (mm)</h3>
                        <AreaChart data={formatNearStationData('precipitation', data.nearStation[0].data)} reverse color='rgb(63, 81, 181)' />
                    </div>
                    <div>
                        <h3>Temperatura  (°C)</h3>
                        <AreaChart data={formatNearStationData('tempNow', data.nearStation[0].data)} reverse color='rgb(18, 109, 179)' />
                    </div>
                    <div>
                        <h3>Umidade (%)</h3>
                        <AreaChart data={formatNearStationData('humidity', data.nearStation[0].data)} reverse color='rgb(0, 188, 212)' />
                    </div>
                    <div>
                        <h3>Velocidade do vento (m/s)</h3>
                        <AreaChart data={formatNearStationData('windVelocity', data.nearStation[0].data)} reverse color='rgb(0, 188, 212)' />
                    </div>
                </div>
                <h2>Previsão</h2>
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
