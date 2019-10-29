import React from 'react';
import MessageItem from './MessageItem';

class MessageList extends React.Component{
    render() {
        return (
            <ul >
                <MessageItem />
            </ul>
        );
    }
}
export default MessageList;