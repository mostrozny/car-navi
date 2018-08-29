import React from 'react'
import SeatControl from "./SeatControl";
import ClimaControl from "./ClimaControl";

class Clima extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            latitude: 51.1078852,
            longitude: 17.0385376,
            currentWeather: [],
            leftTemp: 21,
            rightTemp: 23,
        }
    }


    getCurrentLocationLati () {
        fetch("http://api.ipstack.com/check?access_key=5b5f77a6b50310443ae8da1e03902def")
            .then(function(response) {
                return response.json();
            })
            .then(function(myJson) {
                this.setState({
                    latitude: myJson.latitude,
                })
            });
    };
    getCurrentLocationLong () {
        fetch("http://api.ipstack.com/check?access_key=5b5f77a6b50310443ae8da1e03902def")
            .then(function(myJson) {
                this.setState({
                    longitude: myJson.longitude,
                })
            });
    };

    componentDidMount () {
        this.getCurrentLocationLong;
        this.getCurrentLocationLati;

        fetch(`https://api.openweathermap.org/data/2.5/weather?&units=metric&lat=${this.state.latitude}&lon=${this.state.longitude}&APPID=300d2701497f5d9e6daf2babded17864`)
            .then(resp => resp.json())
            .then((json) => {
                let currentWeather = this.state.currentWeather;
                this.setState({
                    currentWeather: [...currentWeather, json.main.temp, json.weather[0].description, json.weather[0].id]
                });
            });
    }


    changeIcon = () => {
        const currIcon = this.state.currentWeather[2];
        if (currIcon >= 200 && currIcon < 300) {
            return <i className="fas fa-bolt"></i>
        } else if (currIcon >= 300 && currIcon < 500) {
            return <i className="fas fa-umbrella"></i>
        } else if (currIcon >= 600 && currIcon < 700) {
            return <i className="fas fa-snowflake"></i>
        } else if (currIcon >= 700 && currIcon < 800) {
            return <i className="far fa-frown"></i>
        } else if (currIcon >= 800 && currIcon < 900) {
            return <i className="fas fa-sun"></i>
        }
    }

    handleTempA = (tempA) => {
        const temperature = tempA;
        this.setState({
            leftTemp: temperature,
        })
    };

    handleTempB = (tempB) => {
        const temperature = tempB;
          this.setState({
            rightTemp: temperature,
        })
    };

    render() {
        return (
            <div className="naviApp">
                <div className="currentWeather">{this.changeIcon()} {this.state.currentWeather[0]}&deg;C</div>

                <div className="temperatureControl"><span className="tempLeft">{this.state.leftTemp}&deg;C</span><span className="tempRight">{this.state.rightTemp}&deg;C</span>
                </div>

                <SeatControl/>

                <ClimaControl onChangeTempA={this.handleTempA} onChangeTempB={this.handleTempB}  />
            </div>
        );
    }
}

export default Clima
