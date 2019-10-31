import React from 'react';
import Emoji from 'react-emoji-render';

class MessageItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      message : ''
    }
  }

    render() {
        return(
          <div>
            <small>{this.props.message}</small>
            <br />
            <Emoji text={this.props.message} />
          </div>            
        );
    };
}
MessageItem.defaultProps ={
  MessageList: '@MessageList'
};

export default MessageItem;