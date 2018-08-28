import React from 'react'

class Radio extends React.Component {
    render() {
        return (
            <div className="naviApp">
                <audio controls="controls" src="http://proxy.tuned.svada.net:8000/radiojazzfm.mp3"></audio>
            </div>
        );
    }
}

export default Radio
