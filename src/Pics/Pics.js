import React from 'react';
import ImageListAPI from '../API/ImageSearch';

import SearchBar from './SearchBar';
import ImageList from './ImageList';

class Pics extends React.Component {
    state = {
        searchData: []
    }

    render() {
        return (
            <>
                <SearchBar onSubmit={this.onSearchSubmit} />
                Found: {this.state.searchData.length} images
                <ImageList images={this.state.searchData} />
            </>
        );
    }

    // onSearchSubmit = (searchTerm) => {
    //     console.log('searchTerm ==> ', searchTerm);
    //     Axios.get('https://api.unsplash.com/search/photos', {
    //         headers: {
    //             Authorization: 'Client-ID b9b35660965bf90647e498de7d6768a32fc397e3fa053d6bf53afb672d794bd4'
    //         },
    //         params: {
    //             query: searchTerm
    //         }
    //     }).then(response => {
    //         console.log('response ==> ', response.data.results);
    //     })
    // }

    /* The above commented code is a normal way to get the data using axios but there is another way using async and await */

    onSearchSubmit = async (searchTerm) => {
        console.log('searchTerm ==> ', searchTerm);
        const response = await ImageListAPI.get('/search/photos', {
            params: {
                query: searchTerm
            }
        });

        this.setState({
            searchData: response.data.results
        })
    }

}

export default Pics;