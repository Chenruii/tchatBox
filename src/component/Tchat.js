import React from 'react';
import MessageList from './MessageList'
import MessageBar from './MessageBar';


class Tchat extends React.Component {
    render() {
        return (
            <div>
                <h1><center>TchatBox</center></h1>

                <ul style={{listStyleType: 'disc'}}>
                    <li><MessageList /></li>
                </ul>
                    
                    <MessageBar />
            </div>
        );
    }
}

export default Tchat