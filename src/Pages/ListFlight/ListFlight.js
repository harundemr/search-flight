import './ListFlight.css';
import React, { useState, setState } from 'react';
import Flights from '../../Data/flights.json';
import Flight from '../../Components/Flight/Flight';

class ListFlight extends React.Component {
    constructor(props) {
        super(props);
        this.data = this.props.filterData;

        this.jsonData = Flights;

        this.filteredJsonData = this.jsonData.flights.filter((flight) => {
            return flight.originAirport.city.name === this.data.whereFrom &&
                flight.destinationAirport.city.name === this.data.toWhere;
        });

        this.state = {
            promoCode: false
        };

        this.onChangePromoCode = this.onChangePromoCode.bind(this);
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
                    <div className='route-info-div'>
                        <label className='route-info'>{this.data.whereFrom + ' - ' + this.data.toWhere + ', ' + this.data.traveller + ' Yolcu'}</label>
                    </div>
                    <div className='promo-code'>
                        <b>Promosyon Kodu </b>
                        <input
                            type="checkbox"
                            value="true"
                            checked={this.state.promoCode}
                            onChange={this.onChangePromoCode} />
                        <p>
                            Promosyon kodu seçeni ile tüm Economy kabini Eco Fly paketlerini %50 indirimle satın alabilirsiniz! <br />
                            Promosyon kodu seçeneği aktifken Eco Fly paketi haricinde seçim yapılamamaktadır.
                        </p>
                    </div>
                    <div className='list-flights'>
                        <div className='sort-bar'>
                            <label>Sıralama Kriterleri </label>
                            <button className='btn-sort'>Ekonomi Kabin Ücreti</button>
                            <button className='btn-sort'>Kalkış Saat</button>
                        </div>
                        {
                            this.filteredJsonData.map(flight => {
                                return (<Flight item={flight} key={flight.id} getPromoCode={this.getPromoCode} />);
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }

    onChangePromoCode(event) {
        this.setState({
            promoCode: !this.state.promoCode
        })
    }

    get getPromoCode() {
        return this.state.promoCode;
    }
}

export default ListFlight;