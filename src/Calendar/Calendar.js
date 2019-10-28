import React from 'react';

import CalenderHeader from './CalenderHeader';
import CalendarBody from './CalendarBody';

class Calendar extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            selectedYear: null,
            selectedMonth: null,
            monthStartDay: null,
            currentDate: null,
            selectedDate: null,
            totalDaysInMonth: null,
            isVisible: props.visible
        };
        this.todaysFullDate = new Date();
        this.currentMonth = this.todaysFullDate.getMonth(); 
    }

    // LifeCycle Methods
    render () {
        return (
            <div style={{display: `${this.state.isVisible}`, position: 'absolute', top:38, left:0}}>
                <table className="ui unstackable table">
                    <thead>
                        <CalenderHeader 
                            year={this.state.selectedYear}
                            month={this.state.selectedMonth}
                            previousMonthHandler={this.previousMonthHandler}
                            nextMonthHandler={this.nextMonthHandler} />
                    </thead>
                    <tbody>
                        <CalendarBody                             
                            startDay={this.state.monthStartDay}
                            totalDays={this.state.totalDaysInMonth}
                            month={this.state.selectedMonth}
                            onDateSelect={(event) => this.handleDateSelect(event)} />
                    </tbody>
                </table>
            </div>
        )
    }

    static getDerivedStateFromProps (newProps, oldState) {
        if (newProps.visible !== oldState.isVisible) {
            return {
                isVisible: newProps.visible
            }
        }
        return null;
    }

    componentDidMount () {
        const Year = this.todaysFullDate.getFullYear(),
                Month = this.todaysFullDate.getMonth();

        this.getDateDetails(Month, Year);
    }

    // Utility Methods
    getDateDetails (month, year) {
        if (!year && !month) return;

        let requiredDate = new Date(year, month);
        let selectedMonthStartDay = requiredDate.getDay();

        requiredDate = new Date(year, month + 1, 0);
        let selectedMonthTotalDays = requiredDate.getDate();

        this.setState({
            selectedYear: year,
            selectedMonth: month,
            monthStartDay: selectedMonthStartDay,
            totalDaysInMonth: selectedMonthTotalDays,
            todayDate: this.todaysFullDate.getDate()
        })
    }

    previousMonthHandler = () => {
        let selectedMonth, 
            selectedYear;
        if (this.state.selectedMonth === 0) {
            selectedMonth = 11;
            selectedYear = this.state.selectedYear - 1;
        } else {
            selectedMonth = this.state.selectedMonth - 1;
            selectedYear = this.state.selectedYear;
        }

        this.getDateDetails(selectedMonth, selectedYear);
    }

    nextMonthHandler = () => {
        let selectedMonth, 
            selectedYear;
        if (this.state.selectedMonth === 11) {
            selectedMonth = 0;
            selectedYear = this.state.selectedYear + 1;
        } else {
            selectedMonth = this.state.selectedMonth + 1;
            selectedYear = this.state.selectedYear;
        }

        this.getDateDetails(selectedMonth, selectedYear);
    }

    handleDateSelect = (event) => {
        event.target.selectedMonth = this.state.selectedMonth;
        event.target.selectedYear = this.state.selectedYear;
        event.target.selectedDate = event.target.innerText;
        this.props.onDateSelectHandler(event);
    }
}

export default Calendar;
