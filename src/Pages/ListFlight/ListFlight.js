import './ListFlight.css';
import React, { useState, setState } from 'react';
import Flights from '../../Data/flights.json';
import Flight from '../../Components/Flight';

class ListFlight extends React.Component {
    constructor(props) {
        super(props);

        console.log(Flights);
        this.jsonData = Flights;
        this.data = this.props.filterData;
    }
    render() {
        return (
            <div className='content-list'>
                <div className="header-list">
                    <label>turkishAirlines.com</label>
                    <label>search<b>Flight Challenge</b></label>
                </div>
                <div className='main'>
                    <button className='btn-ucus'>UÇUŞ</button>
                    <div>
                        <label>{this.data.whereFrom + ' - ' + this.data.toWhere + ', ' + this.data.traveller + ' Yolcu'}</label>
                    </div>
                    <div className='list-flights'>
                        <div className='sort-bar'>
                            <label>Sıralama Kriterleri</label>
                            <button className='btn-sort'>Ekonomi Kabin Ücreti</button>
                            <button className='btn-sort'>Kalkış Saat</button>
                        </div>
                        {
                            this.jsonData.flights.map(flight => {
                                return (<Flight item={flight} />);
                            })
                        }
                    </div>
                </div>
            </div>
        )
    };
}

export default ListFlight;