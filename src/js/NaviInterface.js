import React from 'react'
import InfoBar from './InfoBar.js'
import Radio from './Radio.js'
import Maps from './Maps.js'
import Menu from './Menu.js'
import Clima from './Clima.js'
import Settings from './Settings.js'
import SettingsDisplay from './SettingsDisplay.js'
import SettingsSound from './SettingsSound.js'
import PlayerEngine from "./PlayerEngine"
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
            volume: 50,
            brightness: 1,
            background: "black",
            play: "PAUSED",
            track: "../src/music/gvfht.mp3",
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

    handleTrack = (props) => {
        this.setState({
            track: props
        })
    }
    handlePlay = (props) => {
        this.setState({
            play: props,
        })
    }


    render() {
        return (
            <div className="naviInterface" style={{
                backgroundColor: this.state.background
            }} >
                <InfoBar/>
                <HashRouter>
                    <div>
                        <Switch>
                            <Route exact path="/Radio" render={ props =>
                                <Radio {...props} onChangeTrack={this.handleTrack} onChangePlay={this.handlePlay} />}
                            />
                            <Route path="/Maps" component={Maps} />
                            <Route path="/Clima" render={ props =>
                                <Clima {...props} onChangeLeftTemp={this.handleVolume} />}
                            />
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
                <PlayerEngine statusVolume={this.state.volume} statusPlay={this.state.play} currentTrack={this.state.track} />
            </div>
        );
    }
}
export default NaviInterface
