import React from 'react';

import Calendar from './Calendar';
import { DateFormat, Months } from './CalendarConfig';

class DatePicker extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            isVisible: 'none',
            dateVal: ''
        };
        this.defaultFormat = '';
    }

    render () {
        return (
            <div className="ui icon input" style={{position: 'relative'}}> 
                <input 
                    type='text' 
                    onClick={this.onClick} 
                    value={this.state.dateVal} 
                    readOnly
                    placeholder="Select Date" />
                <i className="calendar link icon" onClick={this.onClick}></i>
                <Calendar 
                    visible={this.state.isVisible}
                    onDateSelectHandler={this.onDateSelectHandler}/>
            </div>
        )
    }

    onClick = () => {
        let visiblity;
        if (this.state.isVisible === 'none') {
            visiblity = 'block';
        } else {
            visiblity = 'none'
        }

        this.setState({
            isVisible: visiblity
        });
    }

    onDateSelectHandler = (e) => {
        console.log('Date Clicked with value ==> ', e.target.selectedDate);
        console.log('Date Clicked with Month ==> ', e.target.selectedMonth);
        console.log('Date Clicked with year ==> ', e.target.selectedYear);

        let selectedDate = e.target.selectedDate, 
            selectedMonth = e.target.selectedMonth + 1, 
            selectedYear = e.target.selectedYear,
            formattedDate;

        formattedDate = this.formatDate(selectedDate.toString(), selectedMonth.toString(), selectedYear.toString());

        this.setState({
            dateVal: formattedDate, 
            isVisible: 'none'
        });
    }

    formatDate = (date, month, year) => {
        if (!date && !month && !year) return;

        let formattedDate;

        switch (DateFormat) {
            case "dd/mm/yy":
            case "dd-mm-yy": 
                date = (date < 10) ? `0${date}` : date;
                month = (month < 10) ? `0${month}` : month;
                year = year.slice(-2);

                (DateFormat.includes('/')) ? formattedDate = `${date}/${month}/${year}` : formattedDate = `${date}-${month}-${year}`;
                
                break;
            case "mm/dd/yyyy":
            case "mm-dd-yyyy":
                date = (date < 10) ? `0${date}` : date;
                month = (month < 10) ? `0${month}` : month;

                (DateFormat.includes('/')) ? formattedDate = `${month}/${date}/${year}` : formattedDate = `${month}-${date}-${year}`;
                break;
            case "yyyy-mm-dd":
            case "yyyy/mm/dd":
                date = (date < 10) ? `0${date}` : date;
                month = (month < 10) ? `0${month}` : month;

                (DateFormat.includes('/')) ? formattedDate = `${year}/${month}/${date}` : formattedDate = `${year}-${month}-${date}`;
                break;
            case "month d, yr":
            case "d month, yr":
            case "yr, month d":
                month = Months[parseInt(month) - 1].val;

                (DateFormat.startsWith('mon') ? formattedDate = `${month} ${date}, ${year}` : (DateFormat.startsWith('d') ? formattedDate = `${date} ${month}, ${year}` : formattedDate = `${year}, ${month} ${date}`));
                break;
            case "mon-dd-yyyy":
            case "dd-mon-yyyy":
                month = Months[parseInt(month) - 1].key;

                (DateFormat.startsWith('mon') ? formattedDate = `${month} ${date}, ${year}` : formattedDate = `${date} ${month}, ${year}`);
                break;
        }

        return formattedDate;
    }
}   

export default DatePicker;