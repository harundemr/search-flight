import './Completion.css';
import React from 'react';
import Message from '../../Components/Message/Message';

class Completion extends React.Component {

    constructor(props) {
        super(props);

        this.isComplated = this.props.isComplated;
        console.log(this.props)
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
                            <div className='complated'>
                                <Message type="success" content="Kabin seçiminiz tamamlandı!" />
                                <div className='total'>
                                    <div className='title'>Toplam tutar</div>
                                    <div className='amount'>TRY 470</div>
                                </div>
                            </div> :
                            <div className='complated'>
                                <Message type="error" content="Kabin seçiminiz tamamlanamadı!" />
                                <div className='return-back'>
                                    <button>Başa Dön</button>
                                </div>
                            </div>
                    }
                </div>
            </div>
        );
    }
}

export default Completion;