import React from 'react';
import thumbGreta from '../images/greta.jpg';
import flirtini from '../images/flirtini.jpg';
import biggie from '../images/biggie.jpg';

class Player extends React.Component {
    render() {
        const {thumbnail, infoTrack} = this.props;
        console.log(thumbnail)

        return (
            <div className="player">
                <div className="prevTrack"><img src={flirtini} className="thumbnail"/></div>
                <div className="currentTrack">
                <div className="header">Now playing...</div>
                <div className="thumbnail"><img src={thumbGreta} className="thumbnail"/></div>
                <div className="infoTrack">{infoTrack} </div>
                </div>
                <div className="nextTrack"><img src={biggie} className="thumbnail"/></div>
            </div>
        );
    }
}

export default Player
