import './SubCategory.css';
import React, { useState, setState } from 'react';

class SubCategory extends React.Component {

    constructor(props) {
        super(props);

        this.data = this.props.item;
    }

    render() {
        return (
            <div className='sub-category'>
                <div className='sub-category-header'>
                    <div>{this.data.brandCode}</div>
                    <div>
                        {this.data.price.currency + ' ' +this.data.price.amount}
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
                <button className='btn-choose-flight'>Uçuşu Seç</button>
            </div>
        );
    }

}

export default SubCategory;