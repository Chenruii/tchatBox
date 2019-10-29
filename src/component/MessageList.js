import React from 'react';
import MessageItem from './MessageItem';

class MessageList extends React.Component{
    constructor(props) {
        super (props);
        this.state = {
            message :'',
            MessageList : [
                {message: "text1"},
                {message: "text2"},
                {message: "text3"}
            ],
        };
    }
    addMessage = () => {
        this.setState(state => {
            const list = state.list.concat(state.message);

            return{
                list,
                MessageList:'',
            };
        });
    };
    
    render() {
        return (
            <ul >
                {this.state.MessageList.map((item,i) => (
                    
                   <MessageItem  message={item.message}/>
                ))
                }
               
            </ul>
        );
    }
}
export default MessageList;