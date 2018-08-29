import React from 'react';
import thumbGreta from '../images/greta.jpg';
import flirtini from '../images/flirtini.jpg';
import biggie from '../images/biggie.jpg';

class Player extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            thumbs: [flirtini, thumbGreta, biggie],
            infoTrack: ["Flirtini - Hearthbreaks & Promises IV", "Greta Van Fleet - From The Fires", "Notorious B.I.G - Ready to die"],
            playing: true,
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

        //setting state
        this.setState({
            thumbs: thumbsArray,
            infoTrack: infoArray,
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

        //setting state
        this.setState({
            thumbs: thumbsArray,
            infoTrack: infoArray,
        })
    };



    render() {
        const {thumbs, infoTrack} = this.state;

        return (
            <div className="player">
                <div onClick={this.handlePrevTrack} className="prevTrack">
                    <img src={thumbs[0]} className="thumbnail"/>
                </div>

                <div className="currentTrack">
                  <div className="header">Now playing...</div>
                  <div className="thumbnail"><img src={thumbs[1]} className="thumbnail"/></div>
                   <div className="infoTrack">{infoTrack[1]} </div>
                    <div className="controlPanel">
                        <i className="far fa-play-circle"></i>
                        <i className="far fa-pause-circle"></i>
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
