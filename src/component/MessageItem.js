import React from 'react';

class MessageItem extends React.Component {
  constructor(props){
    super(props);
  }
    render(){
        return(
            <li>{this.props.message}</li>
        );
    };
}
MessageItem.defaultProps ={
  MessageList: '@MessageList'
};
export default MessageItem;