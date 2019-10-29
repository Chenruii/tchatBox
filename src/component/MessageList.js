import React from 'react';
import MessageItem from './MessageItem';

class MessageList extends React.Component{
    constructor(props) {
        super (props);
        this.state = {
            message :'',
            MessageList : [],
        };

       // this.componentDidMount() {

        //}

    }
    render() {
        return (
            <ul >
                <MessageItem />
            </ul>
        );
    }
}
export default MessageList;