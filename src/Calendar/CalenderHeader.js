import React from 'react';
import './CalendarClass.css';
import * as CalendarConfig from './CalendarConfig';

const HeaderVariables = {
    MonthName: '',
    Year: ''
}

const RenderInitialWeekDays = () => {
    return CalendarConfig.WeekDays.map(eachDay => {
        return (
            <th key={ eachDay.id }>
                { eachDay.key }
            </th>
        )
    }); 
}

const CalenderHeader = (props) => {
    
    const { month, year } = props;

    const Month = CalendarConfig.Months.filter(eachMonth => {
        return eachMonth.id === month;
    });

    if (Month.length > 0) {
        HeaderVariables.MonthName = Month[0].val;
        HeaderVariables.Year = year;
    }

    return (
        <>
            <tr className='cal-header'>
                <th onClick={() => props.previousMonthHandler()} >
                    <i className="angle left icon big"></i>
                </th>
                <th colSpan='5' style={{textAlign: 'center'}}>{ `${HeaderVariables.MonthName}, ${HeaderVariables.Year}` }</th>
                <th onClick={() => props.nextMonthHandler()}>
                    <i className="angle right icon big"></i>
                </th>
            </tr>
            <tr>
                <RenderInitialWeekDays />
            </tr>
        </>
    )
}

export default CalenderHeader;