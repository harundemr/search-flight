import './Flight.css';
import React, { useState, setState } from 'react';
import SubCategory from '../SubCategory/SubCategory';

class Flight extends React.Component {

    constructor(props) {
        super(props);
        this.data = this.props.item;

        this.state = {
            detailShow: false,
            cabin: 'economy1'
        };

        this.onChangeRadio = this.onChangeRadio.bind(this);
    }

    render() {
        return (
            <div>
                <div className='row'>
                    <div className="flight">
                        <div className='route'>
                            <div className='departure'>
                                <b>{this.data.departureDateTimeDisplay}</b>
                                <div>{this.data.originAirport.code}</div>
                                <div>{this.data.originAirport.city.name}</div>
                            </div>
                            <div className='route-border'></div>
                            <div className='arrival'>
                                <b>{this.data.arrivalDateTimeDisplay}</b>
                                <div>{this.data.destinationAirport.code}</div>
                                <div>{this.data.destinationAirport.city.name}</div>
                            </div>
                        </div>
                        <div className='duration' >
                            <div>Uçuş Süresi</div>
                            <b>{this.data.flightDuration}</b>
                        </div>
                    </div>
                    <div className='economy'>
                        <div className='economy-selection'>
                            <input
                                id={"economy-radio" + this.data.id}
                                type="radio"
                                name="cabin"
                                value={"economy" + this.data.id}
                                onChange={this.onChangeRadio} />
                            <label for={"economy-radio" + this.data.id}>ECONOMY</label>
                        </div>
                        <div className='economy-price'>
                            <div>Yolcu başına</div>
                            <b>
                                {
                                    this.data.fareCategories.ECONOMY.subcategories[0].price.currency
                                    + ' ' +
                                    this.data.fareCategories.ECONOMY.subcategories[0].price.amount
                                }
                            </b>
                        </div>
                    </div>
                    <div className='business'>
                        <div className='business-selection'>
                            <input
                                id={"business-radio" + this.data.id}
                                type="radio"
                                name="cabin"
                                value={"business" + this.data.id}
                                onChange={this.onChangeRadio} />
                            <label for={"business-radio" + this.data.id}>BUSINESS</label>
                        </div>
                        <div className='business-price'>
                            <div>Yolcu başına</div>
                            <b>
                                {
                                    this.data.fareCategories.BUSINESS.subcategories[0].price.currency
                                    + ' ' +
                                    this.data.fareCategories.BUSINESS.subcategories[0].price.amount
                                }
                            </b>
                        </div>
                    </div>
                </div>

                {
                    this.state.detailShow ?
                        <div className='sub-categories'>
                            {
                                this.data.fareCategories.ECONOMY.subcategories.map(category => {
                                    return (<SubCategory item={category} />);
                                })
                            }
                        </div> : null
                }
            </div>
        );
    }

    onChangeRadio(event) {
        if (event.target.value === ("economy" + this.data.id)) {
            this.setState({
                cabin: event.target.value,
                detailShow: true
            });
        }
    }
}

export default Flight;