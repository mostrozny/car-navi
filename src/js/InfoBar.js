import React from 'react'

class InfoBar extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            hour: null,
            minutes: null
        }
    }

    getTime = () => {
        const date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        if(hours < 10)
        {
            hours = '0' + hours.toString();
        }
        if(minutes < 10)
        {
            minutes = '0' + minutes.toString();
        }
        this.setState ({
            hour: hours,
            minutes: minutes
        })
    }

    componentDidMount () {
        this.idInterval = setInterval(() => {
            this.getTime();
        }, 1000)
    }

    componentWillUnmount () {
        clearInterval(this.idInterval);
    }

    render() {
        return (
            <div className="naviBar">
                <span><i className="fas fa-signal"></i>
                <i className="fab fa-bluetooth-b"></i></span>
                {this.state.hour}:{this.state.minutes}
            </div>
        );
    }
}

export default InfoBar
