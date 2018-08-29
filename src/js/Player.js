import React from 'react';
import Sound from 'react-sound';

import thumbGreta from '../images/greta.jpg';
import flirtini from '../images/flirtini.jpg';
import biggie from '../images/biggie.jpg';
/*import gvfmp from '../music/gvfht.mp3';
import brtdmp from '../music/brtd.mp3';
import fsmp from '../music/fs.mp3';*/



class Player extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            thumbs: [flirtini, thumbGreta, biggie],
            infoTrack: ["Flirtini - Hearthbreaks & Promises IV", "Greta Van Fleet - From The Fires", "Notorious B.I.G - Ready to die"],
            playing: "PLAYING",
            track: ['../src/music/fs.mp3', '../src/music/gvfht.mp3', '../src/music/brtd.mp3'],
            playerText: "Now playing...",
        }
    }


    handlePrevTrack = () => {
        //miniatures
        let thumbsArray = this.state.thumbs;
        const thumbsLength = thumbsArray.length;
        thumbsArray = [thumbsArray[thumbsLength-1], ...thumbsArray];
        thumbsArray.splice(thumbsLength);

        //info
        let infoArray = this.state.infoTrack;
        const infoLength = infoArray.length;
        infoArray = [infoArray[infoLength-1], ...infoArray];
        infoArray.splice(infoLength);

        //tracks
        let tracks = this.state.track;
        const tracksLength = tracks.length;
        tracks = [tracks[tracksLength-1], ...tracks];
        tracks.splice(tracksLength);

        //setting state
        this.setState({
            thumbs: thumbsArray,
            infoTrack: infoArray,
            track: tracks,
        })
    };

    handleNextTrack = () => {
        //miniatures
        let thumbsArray = this.state.thumbs;
        thumbsArray = [...thumbsArray, thumbsArray[0]];
        thumbsArray.splice(0, 1);


        //info
        let infoArray = this.state.infoTrack;
        infoArray = [...infoArray, infoArray[0]];
        infoArray.splice(0, 1);

        //tracks
        let tracks = this.state.track;
        tracks = [...tracks, tracks[0]];
        tracks.splice(0, 1);


        //setting state
        this.setState({
            thumbs: thumbsArray,
            infoTrack: infoArray,
            track: tracks,
        })
    };

    handlePlay = () => {
        this.setState({
            playing: "PLAYING",
            playerText: "Now playing...",
        })
    }

    handlePause = () => {
        this.setState({
            playing: "PAUSED",
            playerText: "PAUSED",
        })
    }

    render() {
        const {thumbs, infoTrack} = this.state;

        return (
            <div className="player">
                <div onClick={this.handlePrevTrack} className="prevTrack">
                    <img src={thumbs[0]} className="thumbnail"/>
                </div>

                <div className="currentTrack">
                  <div className="header">{this.state.playerText}</div>
                  <div className="thumbnail"><img src={thumbs[1]} className="thumbnail"/></div>
                   <div className="infoTrack">{infoTrack[1]} </div>
                    <div className="controlPanel">
                        <i onClick={this.handlePlay} className="far fa-play-circle"/>
                        <i onClick={this.handlePause} className="far fa-pause-circle"/>
                        <Sound
                            url={this.state.track[1]}
                            playStatus={this.state.playing}
                        />
                    </div>
                </div>
                <div onClick={this.handleNextTrack} className="nextTrack">
                    <img src={thumbs[2]} className="thumbnail"/>
                </div>

            </div>
        );
    }
}

export default Player
