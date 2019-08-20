import React, {Component} from 'react';
import MessageItem from './MessageItem';

class MessageList extends Component {

    render() {
        return (
            <ul className="messages">
                {
                    this.props.messages.map((message, index) => {
                        return <MessageItem user={message.userId === this.props.user ? true : false}
                                            message={message.message}
                                            created_at={message.created_at}
                                            key={index}/>
                    })
                }
            </ul>
        );
    }
}

export default MessageList;
