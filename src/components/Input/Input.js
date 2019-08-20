import React, {Component} from 'react';

class Input extends Component {

    enterKey = (e) => {
        if (e.keyCode === 13) {
            this.props.sendMessage(this.refs.messageInput);
        }
    };

    render() {
        return (
            <div>
                <div className="bottom_wrapper clearfix">
                    <div className="message_input_wrapper">
                        <input onKeyUp={this.enterKey} ref="messageInput" className="message_input" placeholder="Type your message here..."/>
                    </div>
                    <div onClick={() => this.props.sendMessage(this.refs.messageInput)} className="send_message">
                        <div className="icon"></div>
                        <div className="text">Send</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Input;
