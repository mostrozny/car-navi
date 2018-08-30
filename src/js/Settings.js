import React from 'react'
import {NavLink} from "react-router-dom";
import {
    HashRouter,
} from "react-router-dom";

class Settings extends React.Component {
    render() {
        return (
            <div className="naviApp">
                <HashRouter>
                <div className="settings">
                    <NavLink to="/SettingsSound" ><div className="settingsSound" /></NavLink>
                    <NavLink to="/SettingsDisplay" onChange={this.handleChangeVolume} ><div className="settingsDisplay" /></NavLink>
                </div>
                </HashRouter>
            </div>
        );
    }
}

export default Settings
