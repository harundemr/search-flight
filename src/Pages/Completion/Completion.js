import './Completion.css';
import React from 'react';
import Message from '../../Components/Message/Message';

class Completion extends React.Component {

    constructor(props) {
        super(props);

        this.isComplated = this.props.isComplated;
        this.whereFrom = localStorage.getItem('where-from');
        this.toWhere = localStorage.getItem('to-where');
        this.travellerCount = localStorage.getItem('traveller-count');
        this.cabin = localStorage.getItem('cabin');
        this.amount = localStorage.getItem('amount');
        this.totalAmount = localStorage.getItem('total-amount');

        this.onClickReturnBack = this.onClickReturnBack.bind(this);
    }

    render() {
        return (
            <div className='content-list'>
                <div className="header-list">
                    <label>turkishAirlines.com</label>
                    <label>search<b>Flight Challenge</b></label>
                </div>
                <div className='main-completion'>
                    {
                        this.isComplated ?
                            <div>
                                <Message type="success" content="Kabin seçiminiz tamamlandı." />
                                <table>
                                    <tr>
                                        <th>Nereden</th>
                                        <th>Nereye</th>
                                        <th>Yolcu Sayısı</th>
                                        <th>Kabin</th>
                                        <th>Birim Fiyat</th>
                                    </tr>
                                    <tr>
                                        <td>{ this.whereFrom } </td>
                                        <td>{ this.toWhere }</td>
                                        <td>{ this.travellerCount }</td>
                                        <td>{ this.cabin }</td>
                                        <td>{ this.amount }</td>
                                    </tr>
                                </table>
                                <div className='total'>
                                    <div className='title'>Toplam tutar</div>
                                    <div className='amount'>{this.totalAmount}</div>
                                </div>
                                <div className='return-back'>
                                    <button onClick={this.onClickReturnBack}>Başa Dön</button>
                                </div>
                            </div> :
                            <div>
                                <Message type="error" content="Kabin seçiminiz tamamlanamadı!" />
                                <div className='return-back'>
                                    <button onClick={this.onClickReturnBack}>Başa Dön</button>
                                </div>
                            </div>
                    }
                </div>
            </div>
        );
    }

    onClickReturnBack() {
        localStorage.removeItem('where-from');
        localStorage.removeItem('to-where');
        localStorage.removeItem('traveller-count');
        localStorage.removeItem('cabin');
        localStorage.removeItem('amount');
        localStorage.removeItem('total-amount');
        this.props.navigate();
    }
}

export default Completion;