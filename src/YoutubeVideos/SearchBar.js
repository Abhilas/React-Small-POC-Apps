import React from 'react';

class SearchBar extends React.Component {
    state = {
        searchText: ''
    }

    onInputChangeHandler = (event) => {
        this.setState({
            searchText: event.target.value
        })
    }

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onSearchSubmitHandler(this.state.searchText);
    }

    render() {
        return (
            <div className="ui segment search-bar">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Video Search</label>
                        <input
                            type="text"
                            value={this.state.searchText}
                            onChange={this.onInputChangeHandler} />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;