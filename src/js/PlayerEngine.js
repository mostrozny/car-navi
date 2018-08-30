import React from 'react';
import Sound from 'react-sound';

class PlayerEngine extends React.Component {

    render() {
        return (
            <div className="players">
                        <Sound
                            url={this.props.currentTrack}
                            playStatus={this.props.statusPlay}
                            volume={Number(this.props.statusVolume)}
                        />
                    </div>
        );
    }
}

export default PlayerEngine
