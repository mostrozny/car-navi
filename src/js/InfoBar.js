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
        this.setState ({
            hour: date.getHours(),
            minutes: date.getMinutes()
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
                {this.state.hour}:{this.state.minutes}
            </div>
        );
    }
}

export default InfoBar
