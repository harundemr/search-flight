import React, { useState, setState } from 'react';
import './SearchFlight.css';

class SearchFlight extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            boxShow: false,
            cabin: 'economy',
            count: 1
        };

        this.onClickCabinTraveller = this.onClickCabinTraveller.bind(this);
        this.onClickMinus = this.onClickMinus.bind(this);
        this.onClickPlus = this.onClickPlus.bind(this);
        this.onClickSubmit = this.onClickSubmit.bind(this);
        this.onChangeRadio = this.onChangeRadio.bind(this);
    }

    render() {
        return (
            <div className='content-search'>
                <div className="header-search">
                    <label>turkishAirlines.com</label>
                    <label>search<b>Flight Challenge</b></label>
                </div>
                <div className='main-search'>
                    <div className='welcome'>
                        <h4 className='title'>Merhaba</h4>
                        <h6 className='sub-title'>Nereyi keşfetmek istersiniz?</h6>
                    </div>
                    <div className='search'>
                        <div className='where-from-container'>
                            <div className="icon-wrapper">
                                <i className="fas fa-plane-departure" ></i>
                            </div>
                            <div className='port-wrapper'>
                                <input id="where-from" type="text" placeholder='Nereden' />
                            </div>
                        </div>
                        <div className='to-where-container'>
                            <div className="icon-wrapper">
                                <i className="fas fa-plane-arrival"></i>
                            </div>
                            <div className='port-wrapper'>
                                <input id="to-where" type="text" placeholder='Nereye' />
                            </div>
                        </div>
                        <div className='date-container'>
                            <div className='date-wrapper'>
                                <label className='date-wrapper-placeholder'>Tarih</label>
                            </div>
                            <div className='date-icon-wrapper'>
                                <i className="far fa-calendar fa-2x" ></i>
                            </div>
                        </div>
                        <div className='cabin-traveller-container' onClick={this.onClickCabinTraveller}>
                            <div className='cabin-traveller-icon-wrapper'>
                                <i className="fas fa-male fa-2x" ></i>
                            </div>
                            <div className='traveller-count-wrapper'>
                                <label>{this.state.count}</label>
                            </div>
                        </div>
                        <div className='submit-container' onClick={this.onClickSubmit}>
                            <i className="fas fa-chevron-right fa-2x"></i>
                        </div>
                    </div>
                    {
                        this.state.boxShow ?
                            <div className='cabin-and-traveller-selection' >
                                <label className='title'>Kabin ve yolcu seçimi</label>
                                <div className='cabin-selection' >
                                    <span>
                                        <input
                                            type="radio"
                                            name="cabin"
                                            id="economy-radio"
                                            value="economy"
                                            checked={this.state.cabin === "economy"}
                                            onChange={this.onChangeRadio} />
                                        <label for="economy-radio">Economy Class</label>
                                    </span>
                                    <span>
                                        <input
                                            type="radio"
                                            name="cabin"
                                            id="business-radio"
                                            value="business"
                                            checked={this.state.cabin === "business"}
                                            onChange={this.onChangeRadio}/>
                                        <label for="business-radio">Business Class</label>
                                    </span>
                                </div>
                                <div className='traveller-selection'>
                                    <span>
                                        <label className='title'>Yolcu</label>
                                    </span>
                                    <span>
                                        <button className='count-button' onClick={this.onClickMinus}>-</button>
                                        <label>{this.state.count}</label>
                                        <button className='count-button' onClick={this.onClickPlus}>+</button>
                                    </span>
                                </div>
                            </div> : null
                    }
                </div>
            </div>
        );
    }

    onClickCabinTraveller() {
        this.setState({ boxShow: !this.state.boxShow });
    }

    onClickMinus() {
        if (this.state.count > 1) {
            this.setState({ count: this.state.count - 1 });
        }
    }

    onClickPlus() {
        this.setState({ count: this.state.count + 1 });
    }

    onChangeRadio(event) {
        this.setState({
            cabin: event.target.value
        });
    }

    onClickSubmit() {

        var whereFrom = document.getElementById("where-from").value;
        var toWhere = document.getElementById("to-where").value;
        if(!whereFrom || !toWhere)
        {
            alert("lütfen tüm alanları doldurunuz.");
            return ;
        }

        this.props.navigate(
            {
                whereFrom: whereFrom,
                toWhere: toWhere,
                date: "02.02.2022",
                cabin: this.state.cabin,
                traveller: this.state.count
            }
        );
    }
}
export default SearchFlight;