import React, {Component} from 'react';
import $ from 'jquery';
import io from 'socket.io-client';
import Input from './components/Input/Input';
import MessageList from './components/Message/MessageList';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            user: null
        };
        this.socket = null;
    }

    componentWillMount() {
        this.socket = io('localhost:7777');
        this.socket.on('id', (res) => {
            this.setState({
                user: res
            });
        });
        this.socket.on('message', (res) => {
            this.newMessage(res);
        });
    }

    newMessage = (data) => {
        const messages = this.state.messages;
        messages.push({
            userId: data.id,
            message: data.message,
            created_at: data.created_at
        });
        let objMessage = $('.messages');
        if (objMessage[0].scrollHeight - objMessage[0].scrollTop === objMessage[0].clientHeight) {
            this.setState({messages});
            objMessage.animate({scrollTop: objMessage.prop('scrollHeight')}, 300);

        } else {
            this.setState({messages});
            if (data.id === this.state.user) {
                objMessage.animate({scrollTop: objMessage.prop('scrollHeight')}, 300);
            }
        }
    };

    sendMessage = (message) => {
        if (message.value) {
            this.socket.emit('message', message.value);
            message.value = '';
        }
    };

    render() {
        return (
            <div>
                <div className="chat_window">
                    <div className="top_menu">
                        <div className="buttons">
                            <div className="button close"></div>
                            <div className="button minimize"></div>
                            <div className="button maximize"></div>
                        </div>
                        <div className="title">Chat</div>
                    </div>
                    <MessageList user={this.state.user} messages={this.state.messages}/>
                    <Input sendMessage={this.sendMessage}/>
                </div>
                <div className="message_template">
                    <li className="message">
                        <div className="avatar"></div>
                        <div className="text_wrapper">
                            <div className="text"></div>
                        </div>
                    </li>
                </div>
            </div>
        );
    }
}

export default App;
