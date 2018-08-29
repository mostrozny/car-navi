import React from 'react'

class SeatControl extends React.Component {
    render() {
        return (
            <div className="seatControl">
                <div className="leftSeatControl">
                    <i className="climaHead fas fa-angle-double-left"></i>
                    <i className="climaHand fas fa-angle-double-left"></i>
                    <i className="climaLegs fas fa-angle-double-left"></i>
                </div>
                <div className="rightSeatControl">
                    <i className="climaHead fas fa-angle-double-left"></i>
                    <i className="climaHand fas fa-angle-double-left"></i>
                    <i className="climaLegs fas fa-angle-double-left"></i>
                </div>
            </div>
        );
    }
}

export default SeatControl
