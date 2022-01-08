import './Flight.css';
import React, { useState, setState } from 'react';

class Flight extends React.Component {
    constructor(props) {
        super(props);

        this.data = this.props.item;
    }
    render() {
        return (
            <div className='row'>
                <div className="flight">
                    <div className='route'>
                        <div >

                        </div>
                    </div>
                    {this.data.originAirport.name}
                </div>
                <div className='economy'>
                    <input id={"economy-radio" + this.data.id} type="radio" name="cabin" value="economy" />
                    <label for={"economy-radio" + this.data.id}>Economy</label>
                </div>
                <div className='business'>
                    <input id={"business-radio" + this.data.id} type="radio" name="cabin" value="business" />
                    <label for={"business-radio" + this.data.id}>Business</label>
                </div>
            </div>
        )
    };
}

export default Flight;