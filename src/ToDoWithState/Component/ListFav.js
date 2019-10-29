import React from 'react';

const ListFav = (props) => {
    const listsFav = props.favLists.map((eachList) => {
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
                                className="ui button background-transparent right aligned no-padding-left fav-list"
                                onClick={() => { props.unFavTask(eachList.id) }}
                                title="Unfavourite Task"><i className="star large icon"></i></button>
                            <button
                                className="ui button background-transparent right aligned no-padding-left"
                                onClick={() => { props.removeFavTask(eachList.id) }}
                                title="Delete Task"><i className="trash large icon"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <div className="ui yellow segment">
            <h4 className="ui dividing header">Favourite List</h4>
            {(listsFav.length > 0 ? listsFav : <p className="dummy-text-color">Add Task to Favourites</p>)}
        </div>
    )
}

export default ListFav;