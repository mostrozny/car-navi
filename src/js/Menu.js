import React from 'react'
import {NavLink} from "react-router-dom";
import {
    HashRouter,
} from "react-router-dom";


class Menu extends React.Component {
    render() {
        return (
            <div className="naviMenu">
                <HashRouter>
                <ul>
                    <li><NavLink exact to="/Radio" ><i className="fas fa-music"></i></NavLink></li>
                    <li><NavLink to="/Maps" ><i className="fas fa-map-marked-alt"></i></NavLink></li>
                    <li><NavLink to="/Clima" ><i className="fas fa-thermometer-empty"></i></NavLink></li>
                    <li><NavLink to="/Settings" ><i className="fas fa-cogs"></i></NavLink></li>
                </ul>
                </HashRouter>
            </div>
        );
    }
}

export default Menu
