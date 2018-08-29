import React from 'react'

class SeatControl extends React.Component {

    //omg :o why
    






    render() {
        return (
            <div className="seatControl">
                <div className="leftSeatControl">
                    <i onClick={this.handleVentHeadLeft} className="climaHead fas fa-angle-double-left"/>
                    <i onClick={this.handleVentHandLeft} className="climaHand fas fa-angle-double-left"/>
                    <i onClick={this.handleVentLegsLeft} className="climaLegs fas fa-angle-double-left"/>
                </div>
                <div className="rightSeatControl">
                    <i onClick={this.handleVentHeadRight}  className="climaHead fas fa-angle-double-left"/>
                    <i onClick={this.handleVentHandRight}  className="climaHand fas fa-angle-double-left"/>
                    <i onClick={this.handleVentLegsRight}  className="climaLegs fas fa-angle-double-left"/>
                </div>
            </div>
        );
    }
}

export default SeatControl
