import React from 'react'
import {Component} from 'react';
import ReactMapGL from 'react-map-gl';

class Maps extends Component {
    state = {
        viewport: {
            width: 800,
            height: 350,
            latitude: 51.1078852,
            longitude: 17.0385376,
            zoom: 13
        }
    };

    changePosition = (lati, long) => {
        this.setState({
            viewport: {
                width: 800,
                height: 350,
                latitude: lati,
                longitude: long,
                zoom: 14
            }
        })
    };

    componentDidMount () {
        let lati;
        let long;
        let self = this;
        fetch("http://api.ipstack.com/check?access_key=5b5f77a6b50310443ae8da1e03902def")
            .then(function(response) {
            return response.json();
        })
            .then(function(myJson) {
                lati = myJson.latitude;
                long = myJson.longitude;
                self.changePosition(lati, long);
            });
    }

    render() {
        return (
            <ReactMapGL
                mapboxApiAccessToken="pk.eyJ1IjoibW9zdHJvem55IiwiYSI6ImNqbGRudnowbzBjM3AzcXA3ZW5vaWduMGoifQ.wZbOqryPuwJy_0_A03JFKA"
                {...this.state.viewport}
                onViewportChange={(viewport) => this.setState({viewport})}
            />
        );
    }
}

export default Maps
