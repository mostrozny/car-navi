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
    constructor(props) {
        super(props);

        this.state = {
            volume: 0.5,
            brightness: 1,
            background: "black",
        }
    }

    handleVolume = (props) => {
        const vols = props;
        this.setState({
            volume: vols,
        })
    }
    handleBrightness = (props) => {
        const bright = props;
        this.setState({
            brightness: bright,
        })
    }
    handleBackground = (props) => {
        const back = props;
        this.setState({
            background: back,
        })
    }


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
                            <Route path="/SettingsSound" render={ props =>
                                <SettingsSound {...props} onChangeVolume={this.handleVolume} />}
                            />
                            <Route path="/SettingsDisplay" render={ props =>
                                <SettingsDisplay {...props} onChangeBackground={this.handleBackground}
                                                 onChangeBrightness={this.handleBrightness} />
                            } />
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
