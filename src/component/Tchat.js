import React from 'react';
import MessageList from './MessageList'

const tchat = {
    borderRadius: 10,
    fontFamily: "Montserrat",
    width: 400,
    backgroundColor: "#A2D",
    padding: 10,
    display: "flex",
    flexDirection: "column"
  };
class Tchat extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            MessageList :''
        };
       
    }
    render() {
        return (
            <div style={tchat}>
                <h1><center>TchatBox</center></h1>

                <ul  style={{listStyleType: 'disc'}}>
                    <li><MessageList /></li>
                   
                </ul>    
            </div>
        );
    }
}

export default Tchat