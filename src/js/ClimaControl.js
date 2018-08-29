import React from 'react'

class ClimaControl extends React.Component {


    handleChangeLeft = (e) => {
        this.props.onChangeTempA(e.target.value);
    }
    handleChangeRight = (e) => {
        this.props.onChangeTempB(e.target.value);
    }

    render() {
        return (
            <div className="climaControl">
                <input className="slider leftSlider" onChange={this.handleChangeLeft} type="range" defaultValue={20} min="16" max="31" />
                <input className="slider rightSlider" onChange={this.handleChangeRight} type="range" defaultValue={20} min="16" max="31" />
            </div>
        );
    }
}

export default ClimaControl
