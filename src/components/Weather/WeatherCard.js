import React from 'react';

// ICONS -----------------------------------------------------------------------------
import cloudyIcon  from '../../assets/imgs/weather/cloudy.png';
import rainIcon from '../../assets/imgs/weather/rain.png';
import unknownIcon from '../../assets/imgs/weather/unknown.png';

function getIcon(type){

    switch(type){
        case 'CLOUDY':
            return cloudyIcon;
        case 'RAIN':
            return rainIcon;
        default:
            return unknownIcon;
    }

}

const WeatherColumn = ({
    label,
    maxTemp,
    minTemp,
    type,
    posfix
}) => {
    
    return (
        <div style={styles.column}>
            <p style={styles.max}>{maxTemp}º</p>
            <img style={styles.type} alt={label} src={getIcon(type ? type : '')} />
            {
                minTemp !== null && (
                    <p style={styles.min}>{minTemp}º</p>
                )
            }
            <p style={styles.label}>{label}{posfix}</p>
        </div>
    )
}

const WeatherCard = ({data, posfix = ''}) => {
    
    return (
        <div style={styles.container}>
            { 
                data.map(
                    (weather, index) => <WeatherColumn key={`weather-${index}`} {...weather} posfix={posfix} /> 
                )
            }
        </div>
    )
}

const styles = {
    container:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    type:{
        width: 40,
        height: 40,
        marginBottom: 10
    },
    max:{
        fontSize: 26,
        fontWeight: '500',
        marginBottom: 10,
        left: 5
    },
    min:{
        fontSize: 22,
        fontWeight: '500',
        marginBottom: 10,
        color: '#a3a3a3',
        left: 5
    },
    label:{
        marginTop: 5,
        fontSize: 13,
    },
    column:{
        margin: 8,
        justifyContent: 'center',
        alignItems: 'center',
    }
}

export default WeatherCard;
