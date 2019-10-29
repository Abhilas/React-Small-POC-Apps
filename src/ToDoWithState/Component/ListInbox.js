import React from 'react';

const ListInbox = (props) => {
    const lists = props.taskLists.map((eachList) => {
        return (
            <div key={eachList.id} className="ui clearing margin-bottom-5" style={{ display: 'block' }}>
                <div className="ui large label" style={{ display: 'block' }}>
                    <div className="ui grid">
                        <div className="twelve wide column">
                            <label className="ui label task-label big">
                                {eachList.title}
                            </label>
                        </div>
                        <div className="four wide column">
                            <button
                                className="ui button background-transparent right aligned no-padding-left inbox-list"
                                onClick={() => { props.favTask(eachList.id) }}
                                title="Favourite Task"><i className="star outline large icon"></i></button>
                            <button
                                className="ui button background-transparent right aligned no-padding-left"
                                onClick={() => { props.removeTask(eachList.id) }}
                                title="Delete Task"><i className="trash large icon"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <div className="ui green segment">
            <h4 className="ui dividing header">Task List</h4>
            {(lists.length > 0 ? lists : <p className="dummy-text-color">Add Task to view</p>)}
        </div>
    )
}

export default ListInbox;