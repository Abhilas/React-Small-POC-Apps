import React from 'react';
import './SeasonDisplay.css';

const SeasonConfig = {
    Summer: {
        text: 'Let\'s hit the beach',
        iconName: 'sun'
    },
    Winter: {
        text: 'Burr it\'s chilly',
        iconName: 'snowflake'
    }
}

const getSeason = (latitude, currentMonth) => {
    if (currentMonth > 2 && currentMonth < 9) {
        return latitude > 0 ? 'Summer':'Winter';
    } else {
        return latitude > 0 ? 'Winter':'Summer';
    }
}

const DisplayResult = (props) => {
    const season = getSeason(props.latitude, new Date().getMonth());
    const { text, iconName } = SeasonConfig[season];
    return (
        <div className={`season-display ${season}`}>
            <i className={`${iconName} icon massive icon-left`} />
            <h1>{text}</h1>
            <i className={`${iconName} icon massive icon-right`} />
        </div>
    )
}

export default DisplayResult;