import './Message.css';
import React from 'react';

class Message extends React.Component {

    constructor(props) {
        super(props);

        this.type = this.props.type;
        this.content = this.props.content;
    }
    render() {
        return (
            <div className='message'>
                {
                    this.type === 'success' ?
                        <i className="fas fa-check-circle"></i> :
                        <i className="fas fa-times-circle"></i>
                }
                <label className='content'>{this.content}</label>
            </div>
        );
    }
}

export default Message;