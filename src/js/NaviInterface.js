import React from 'react'
import InfoBar from './InfoBar.js'
import Radio from './Radio.js'
import Maps from './Maps.js'
import Menu from './Menu.js'
import Clima from './Clima.js'
import Settings from './Settings.js'
import SettingsDisplay from './SettingsDisplay.js'
import SettingsSound from './SettingsSound.js'
import {
    HashRouter,
    Switch,
    Route,
    NavLink
} from "react-router-dom";

class NaviInterface extends React.Component {
    render() {
        return (
            <div className="naviInterface">
                <InfoBar/>
                <HashRouter>
                    <div>
                        <Switch>
                            <Route exact path="/Radio" component={Radio} />
                            <Route path="/Maps" component={Maps} />
                            <Route path="/Clima" component={Clima} />
                            <Route path="/Settings" component={Settings} />
                            <Route path="/SettingsSound" component={SettingsSound} />
                            <Route path="/SettingsDisplay" component={SettingsDisplay} />
                            <Route component={Radio} />
                        </Switch>
                    </div>
                </HashRouter>
                <Menu />
            </div>
        );
    }
}

export default NaviInterface
