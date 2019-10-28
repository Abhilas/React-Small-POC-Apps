import React from 'react';

// Please read the below desc as to why the code is commented.

// const SeasonDisplay = () => {
//     let Latitude, Longitude;
//     window.navigator.geolocation.getCurrentPosition(
//         (position) => {
//             Latitude = position.coords.latitude;
//             Longitude = position.coords.longitude;
//         },
//         (error) => console.log(error)
//     );

//     return (
//         <div>
//             u r in :{Latitude}, Latitude and {Longitude}, Longitude.
//         </div>
//     )
// }

// So we are trying to Print the Latitude and the Longitude from the Geolocation, 
// but the o/p we get is "u r in :, Latitude and , Longitude."
// Now why we didnt get the value even if the console prints the value, its because the geolocation api 
// takes some time to fetch the data and once the data is available there is no way to load the component again.
// To achieve that we can use Hooks or use Class/Statefull components.

// So commenting the above code and creating a class Component.

import DisplayResult from './DisplayResult';
import Spinner from '../UtilityComponents/Spinner';

class SeasonDisplay extends React.Component {
    constructor() {
        super();

        this.state = {
            Latitude: null,
            errMsg: ''
        }
    }

    renderContent() {
        if (this.state.errMsg && !this.state.Latitude) {
            return <div>Error: {this.state.errMsg}</div>
        }

        if (!this.state.errMsg && this.state.Latitude) {
            return <DisplayResult latitude={this.state.Latitude} />
        }

        return <div><Spinner msg='Please accept location request' /></div>
    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        )
    }

    componentDidMount() {
        console.log('Component is Mounted.')
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    Latitude: position.coords.latitude
                })
            },
            (error) => {
                this.setState({
                    errMsg: error.message
                })
            }
        );
    }

    componentDidUpdate() {
        console.log('Component is Updated.');
    }
}

export default SeasonDisplay;