import React from 'react'

class SeatControl extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            leftVent: [],
            rightVent: []
        }
    }


    //omg :o why
    changeColor (btn) {
        return btn.target.classList.toggle("activeVent");
    }

    handleVentHeadLeft = (e) => {
        this.changeColor(e);
    };
    handleVentHandLeft = (e) => {
        this.changeColor(e);
    };
    handleVentLegsLeft = (e) => {
        this.changeColor(e);
    };
    handleVentHeadRight = (e) => {
        this.changeColor(e);
    };
    handleVentHandRight = (e) => {
        this.changeColor(e);
    };
    handleVentLegsRight = (e) => {
        this.changeColor(e);
    };





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
