import React from 'react';

import * as CalendarConfig from './CalendarConfig';
import './CalendarClass.css';

const EachRow = (startDay, totalDays, currentMonth, cellClickHandler) => {
    if(!startDay && !totalDays) return;

    let day = 1, 
        row = [],
        cell = [],
        today = new Date();


    for (let rowIndex = 0; rowIndex < CalendarConfig.NumConfig.rows; rowIndex ++) {
        if (day <= totalDays) {
            cell = [];
            
            for (let cellIndex = 0; cellIndex < CalendarConfig.NumConfig.columns; cellIndex ++) {
                if (day <= totalDays) {
                    if (rowIndex === 0 && cellIndex < startDay) {
                        cell.push (<td key={`cell_${cellIndex}`}></td>);
                    } else {
                        cell.push (
                            <td 
                                onClick={(event, day) => makeSelectedCellActive(event, day, cellClickHandler)}
                                key={`cell_${cellIndex}`}
                                className={(day === today.getDate() && currentMonth === today.getMonth()) ? 'today cell':'cell'}>{day}</td>
                        );
                        day++;
                    }

                } else {
                    cell.push (<td key={`cell_${cellIndex}`}></td>);
                }
            }

            row.push(<tr key={`row_${rowIndex}`}>{cell}</tr>); 
        }
    }
    return row;
}

const makeSelectedCellActive = (event, day, cellClickHandler) => {
    console.log('from Calendar Body');
    cellClickHandler(event, day);
}

const CalendarBody = (props) => {
    let { startDay, totalDays, month,  } = props;
    return (
        <>
            { EachRow (startDay, totalDays, month, props.onDateSelect) }
        </>
    )
}

export default CalendarBody;