import './SubCategory.css';
import React, { useState, setState } from 'react';

class SubCategory extends React.Component {

    constructor(props) {
        super(props);

        this.data = this.props.item;
        this.cabin = this.props.cabin;
        console.log(this.props.getPromoCode)
    }

    render() {
        return (
            <div className='sub-category'>
                <div className='sub-category-header'>
                    <div>{this.data.brandCode}</div>
                    <div>
                        {
                            this.props.getPromoCode && this.cabin === 'economy' && this.data.brandCode === 'ecoFly' ?
                            this.data.price.currency + ' ' + this.data.price.amount/2 
                            : this.data.price.currency + ' ' + this.data.price.amount
                        }
                    </div>
                </div>
                <div className='rights'>
                    {
                        this.data.rights.map(right => {
                            return (
                                <div className='right-item'>
                                    {right}
                                </div>
                            );
                        })
                    }
                </div>
                {
                    !this.props.getPromoCode ?
                        <button className='btn-choose-flight' onClick={this.onClickChooseFlight}>Uçuşu Seç</button>
                        : this.cabin === 'economy' && this.data.brandCode === 'ecoFly' ?
                            <button className='btn-choose-flight' onClick={this.onClickChooseFlight}>Uçuşu Seç</button>
                            : <button className='btn-choose-flight' disabled>Uçuşu Seç</button>
                }

            </div>
        );
    }

    onClickChooseFlight() {
        alert('tes');
    }

}

export default SubCategory;