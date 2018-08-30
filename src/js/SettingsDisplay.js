import React from 'react'
import {NavLink} from "react-router-dom";
import {
    HashRouter,
} from "react-router-dom";

class SettingsDisplay extends React.Component {
    handleChangeBackground = (e) => {
        this.props.onChangeBackground(e.target.value);
    };
    handleChangeBrightness = (e) => {
        this.props.onChangeBrightness(e.target.value);
    };


    render() {
        return (
            <div className="naviApp">
                <div className="settingsContainer">
                    <span>
                        Background
                        <br />
                        <select onChange={this.handleChangeBackground} defaultValue={"black"} name="background">
                            <option value="black">Black</option>
                            <option value="midnightblue">Blue</option>
                            <option value="brown">Brown</option>
                            <option value="animated">Animated</option>
                        </select>
                    </span>
                    <span>
                        Brightness
                        <br />
                        <input type="range" onChange={this.handleChangeBrightness} defaultValue={1} min="0.2" step="0.1" max="1.0" />
                    </span>


                <HashRouter>
                    <NavLink to="/Settings" ><div className="backward" /></NavLink>
                </HashRouter>
                </div>
            </div>
        );
    }
}

export default SettingsDisplay
