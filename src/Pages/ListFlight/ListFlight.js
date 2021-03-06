import './ListFlight.css';
import React from 'react';
import Flight from '../../Components/Flight/Flight';

class ListFlight extends React.Component {
    constructor(props) {
        super(props);
        this.data = this.props.searchData;
        console.log(this.props);

        this.state = {
            promoCode: false,
            filteredFlight: this.props.filteredFlight.sort((a, b) => {
                return a.fareCategories.ECONOMY.subcategories[0].price.amount - b.fareCategories.ECONOMY.subcategories[0].price.amount;
            }),
            detailShow: false,
            cabin: 'economy1',
            isSortEconomy: true,
            isSortDepertureDate: false
        };

        this.onChangeRadio = this.onChangeRadio.bind(this);
        this.onChangePromoCode = this.onChangePromoCode.bind(this);
        this.sortEconomyPrice = this.sortEconomyPrice.bind(this);
        this.sortDepertureDate = this.sortDepertureDate.bind(this);
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
                            Promosyon kodu seçili ise tüm Economy kabini Eco Fly paketlerini %50 indirimle satın alabilirsiniz! <br />
                            Promosyon kodu seçeneği aktifken Eco Fly paketi haricinde seçim yapılamamaktadır.
                        </p>
                    </div>
                    <div className='list-flights'>
                        <div className='sort-bar'>
                            <label>Sıralama Kriterleri </label>
                            <button className={this.state.isSortEconomy ? 'btn-sort sorted' : 'btn-sort'} onClick={this.sortEconomyPrice}>Ekonomi Kabin Ücreti</button>
                            <button className={this.state.isSortDepertureDate ? 'btn-sort sorted' : 'btn-sort'} onClick={this.sortDepertureDate}>Kalkış Saat</button>
                        </div>
                        {
                            this.state.filteredFlight.map(flight => {
                                return (
                                    <Flight
                                        key={flight.id}
                                        item={flight}
                                        onChangeRadio={this.onChangeRadio}
                                        getDetailShow={this.getDetailShow}
                                        getPromoCode={this.getPromoCode}
                                        navigate={this.props.navigate} />
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }

    onChangeRadio(event) {
        this.setState({
            cabin: event.target.value,
            detailShow: false
        }, () => {
            this.setState({
                detailShow: true
            })
        });
    }

    get getDetailShow() {
        return this.state;
    }

    onChangePromoCode() {
        this.setState({
            promoCode: !this.state.promoCode
        })
    }

    get getPromoCode() {
        return this.state.promoCode;
    }

    sortEconomyPrice() {
        this.setState({
            isSortEconomy: true,
            isSortDepertureDate: false,
            filteredFlight: this.state.filteredFlight.sort((a, b) => {
                return a.fareCategories.ECONOMY.subcategories[0].price.amount - b.fareCategories.ECONOMY.subcategories[0].price.amount;
            })
        });
    }

    sortDepertureDate() {
        this.setState({
            isSortEconomy: false,
            isSortDepertureDate: true,
            filteredFlight: this.state.filteredFlight.sort((a, b) => {
                return Number(a.departureDateTimeDisplay.split(':').join('')) - Number(b.departureDateTimeDisplay.split(':').join(''));
            })
        });
    }
}

export default ListFlight;