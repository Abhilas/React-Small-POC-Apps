import React, { Component } from "react";

import Header from "./Component/Header";
import ListInbox from "./Component/ListInbox";
import ListFav from "./Component/ListFav";

class Todo extends Component {
    state = {
        taskCounter: 1,
        data: [],
        listData: [],
        favData: [],
        errorMsg: ""
    };

    onTaskAddHandler = taskValue => {
        taskValue = taskValue.trim().replace(/\s+/g, " ");
        const validateTask = this.validateTaskEntry(taskValue);

        if (typeof validateTask === "string") {
            this.setState({
                errorMsg: validateTask
            });
        } else if (validateTask) {
            const updatedTask = {
                id: this.state.taskCounter,
                title: taskValue.trim(),
                isFav: false
            };

            this.setState({
                taskCounter: this.state.taskCounter + 1,
                data: this.sortList(this.state.data.concat(updatedTask)),
                listData: this.sortList(this.state.listData.concat(updatedTask)),
                errorMsg: ""
            });
        } else {
            this.setState({
                errorMsg: "Task already added!!!"
            });
        }
    };

    onTaskDeleteHandler = taskId => {
        const updatedTaskList = this.state.listData.filter(eachList => {
            return eachList.id !== taskId;
        });

        const updatedMasterTaskList = this.state.data.filter(eachList => {
            return eachList.id !== taskId;
        });

        this.setState({
            data: this.sortList(updatedMasterTaskList),
            listData: this.sortList(updatedTaskList)
        });
    };

    onFavClickHandler = taskId => {
        const updatedFavList = this.state.listData.find(eachList => {
            return eachList.id === taskId;
        });

        // Setting the isFav to true.
        updatedFavList.isFav = true;

        // removing the selected record from the actual data[]
        const updatedTaskList = this.state.listData.filter(eachList => {
            return eachList.id !== taskId;
        });

        this.setState({
            listData: this.sortList(updatedTaskList),
            favData: this.sortList(this.state.favData.concat(updatedFavList))
        });
    };

    onUnFavClickhandler = taskId => {
        const selectedList = this.state.favData.find(eachList => {
            return eachList.id === taskId;
        });

        // Setting the isFav to true.
        selectedList.isFav = false;

        // removing the selected record from the actual favdata[]
        const updatedFavList = this.state.favData.filter(eachList => {
            return eachList.id !== taskId;
        });

        this.setState({
            favData: this.sortList(updatedFavList),
            listData: this.sortList(this.state.listData.concat(selectedList))
        });
    };

    onFavTaskDeleteHandler = taskId => {
        const updatedFavList = this.state.favData.filter(eachList => {
            return eachList.id !== taskId;
        });

        const updatedDataList = this.state.data.filter(eachList => {
            return eachList.id !== taskId;
        });

        this.setState({
            favData: this.sortList(updatedFavList),
            data: this.sortList(updatedDataList)
        });
    };

    validateTaskEntry = taskValue => {
        if (taskValue === "") {
            return "Task cannot be empty";
        }

        return this.state.data.every(eachList => {
            if (eachList.title.trim() === taskValue.trim()) {
                return false;
            } else {
                return true;
            }
        });
    };

    sortList = listArry => {
        return listArry.slice(0).sort(function (a, b) {
            return a.title > b.title ? 1 : a.title < b.title ? -1 : 0;
        });
    };

    render() {
        return (
            <div className="ui raised very padded text container segment">
                <Header
                    addTask={this.onTaskAddHandler}
                    errorMsg={this.state.errorMsg}
                />
                <ListFav
                    favLists={this.state.favData}
                    unFavTask={this.onUnFavClickhandler}
                    removeFavTask={this.onFavTaskDeleteHandler}
                />

                <ListInbox
                    taskLists={this.state.listData}
                    removeTask={this.onTaskDeleteHandler}
                    favTask={this.onFavClickHandler}
                />
            </div>
        );
    }
}

export default Todo;
