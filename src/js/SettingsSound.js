import React from 'react'
import {NavLink} from "react-router-dom";
import {
    HashRouter,
} from "react-router-dom";

class SettingsSound extends React.Component {
    constructor(props) {
        super(props);

    }

    handleChange = (e) => {
            this.props.onChangeVolume(e.target.value);
    };


    render() {
        return (
            <div className="naviApp">
                <div className="settingsContainer">
                    <span>
                    Radio default volume:
                    <br />
                    <input type="range" onChange={this.handleChange} defaultValue={0.5} min="0.0" step="0.1" max="1.0" />
                    </span>

                <HashRouter>
                    <NavLink to="/Settings" ><div className="backward" /></NavLink>
                </HashRouter>
                </div>
            </div>
        );
    }
}

export default SettingsSound
