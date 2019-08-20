import React, {Component} from 'react';

class MessageItem extends Component {

    render() {
        return (
            <li className={this.props.user ? 'message right' : 'message left'}>
                <div className="avatar">
                    {/*<img src="" alt="user"/>*/}
                </div>
                <div className="text_wrapper">
                    <div className="box bg-light-info">{this.props.message}</div>
                </div>
                <div className="time">{this.props.created_at}</div>
            </li>
        );
    }
}

export default MessageItem;
