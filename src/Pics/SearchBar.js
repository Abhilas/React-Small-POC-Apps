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

        this.props.onSubmit(this.state.searchText);
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" onChange={this.onInputChangeHandler} value={this.state.searchText} />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;